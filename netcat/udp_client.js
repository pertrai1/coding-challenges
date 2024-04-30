import dgram from "dgram";
const message = Buffer.from("Hello UDP");
const client = dgram.createSocket("udp4");

client.send(message, 0, message.length, 8888, "localhost", function (err) {
  if (err) throw err;
  console.log("UDP message sent");
  client.close();
});
