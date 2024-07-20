import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import speakeasy from "speakeasy";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static("public"));

// temporary storage for OTPs
let otps = {};

app.post("/request-otp", (req, res, next) => {
  const email = req.body.email;
  const otp = speakeasy.totp({ secret: "secret", encoding: "base32" });

  otps[email] = otp;

  // Send OTP via email
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  let mailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: "OTP for Notion Clone",
    text: `Your OTP is ${otp}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending OTP:", error);
      return next(error);
    } else {
      res.status(200).send("OTP sent successfully");
    }
  });
});

app.post("/verify-otp", (req, res) => {
  const email = req.body.email;
  const otp = req.body.otp;

  if (otps[email] === otp) {
    res.status(200).send("OTP verified successfully");
  } else {
    res.status(400).send("Invalid OTP");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
