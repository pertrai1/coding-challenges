import net from "net";
import dgram from "dgram";
import { spawn } from "child_process";

function hexDump(buffer) {
  let hex = "";
  let ascii = "";
  let output = "";

  for (let i = 0; i < buffer.length; i++) {
    hex += buffer[i].toString(16).padStart(2, "0") + " ";

    const char =
      buffer[i] >= 32 && buffer[i] <= 126
        ? String.fromCharCode(buffer[i])
        : ".";
    ascii += char;

    if ((i + 1) % 16 === 0) {
      output += hex + " " + ascii + "\n";
      hex = "";
      ascii = "";
    }
  }

  if (hex.length > 0) {
    output += hex.padEnd(49, " ") + ascii + "\n";
  }

  return output;
}

function startServer(port, command, hexDumpFlag) {
  const server = net.createServer((socket) => {
    console.log("Client connected");

    if (command) {
      const proc = spawn(command[0], command.slice(1));

      socket.pipe(proc.stdin); // Client input -> Process input
      proc.stdout.pipe(socket); // Process output -> Client output
      proc.stderr.pipe(socket); // Process stderr -> Client output

      proc.on("close", (code) => {
        console.log(`Process exited with code ${code}`);
        socket.end();
      });
    } else {
      socket.on("data", (data) => {
        console.log(`Received ${data.length} bytes from the socket`);
        if (hexDumpFlag) {
          console.log(hexDump(data));
        } else {
          console.log("Client says:", data.toString());
        }
        const response = "Response from the server\n";

        socket.write(response + data.toString());

        console.log(
          `sent ${response.length + data.length} bytes to the socket`,
        );

        if (hexDumpFlag) {
          console.log(hexDump(Buffer.from(response + data.toString())));
        }
      });

      socket.on("end", () => console.log("Client disconnected"));
      socket.on("error", (err) => {
        console.error(`Error occurred: ${err}`);
        server.close();
      });
    }
  });

  server.listen(port, () => console.log(`Server listening on port ${port}`));
}

function startUdpServer(port) {
  const server = dgram.createSocket("udp6");

  server.on("error", (err) => {
    console.error(`Server error:\n${err.stack}`);
    server.close();
  });

  server.on("message", (msg, rinfo) => {
    console.log(`Server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
  });

  server.on("listening", () => {
    const address = server.address();
    console.log(`Server listening on ${address.address}:${address.port}`);
  });

  server.bind(port);
}

function checkPort(host, port, callback) {
  const socket = new net.Socket();
  socket.setTimeout(2000);

  socket.on("connect", () => {
    console.log(`Connection to ${host} port ${port} [tcp] succeeded!`);
    socket.end();
    callback(null, true);
  });

  socket.on("error", (err) => {
    if (err instanceof AggregateError) {
      for (const individualError of err.errors) {
        console.log(`Individual error: ${individualError}`);
      }
    } else {
      console.log(`Error with connection: ${err}`);
    }
    socket.destroy();
    callback(null, false);
  });

  socket.on("timeout", () => {
    console.log(`Timeout connecting to ${host} port ${port}`);
    socket.destroy();
    callback(null, false);
  });

  socket.connect({ port, host });
}

function scanPorts(host, startPort, endPort) {
  const portRange = Array.from(
    { length: endPort - startPort + 1 },
    (_, i) => i + startPort,
  );
  portRange.forEach((port) => {
    checkPort(host, port, (err, success) => {
      if (success) {
        console.log(`Connection to ${host} port ${port} [tcp] succeeded!`);
      }
    });
  });
}

const args = process.argv.slice(2);

if (args.includes("-l")) {
  const portIndex = args.indexOf("-p") + 1;
  const port = args[portIndex] ? parseInt(args[portIndex], 10) : 8888;

  const hexDumpFlag = args.includes("-x");

  if (args.includes("-u")) {
    startUdpServer(port);
  } else {
    startServer(port, null, hexDumpFlag);
  }
} else if (args.includes("-z")) {
  const hostIndex = args.indexOf("-z") + 1;
  const host = args[hostIndex];
  const portArg = args[hostIndex + 1];
  if (portArg.includes("-")) {
    const ports = portArg.split("-");
    const startPort = parseInt(ports[0], 10);
    const endPort = parseInt(ports[1], 10);
    scanPorts(host, startPort, endPort);
  } else {
    const port = parseInt(portArg, 10);
    checkPort(host, port, (err, success) => {
      if (!success) {
        console.log(`Connection to ${host} port ${port} [tcp] failed!`);
      }
    });
  }
} else {
  console.log(
    "Usage: ccnc -l -p <port> [-u] [-e <command>] [-x] | -z <host> <port> or <port-range>",
  );
}
