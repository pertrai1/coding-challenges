const generateOTPBtn = document.querySelector("#btn-generate-otp");
const emailInput = document.querySelector("#email-input");
const verificationCodeInput = document.querySelector("#verification-code");
const otpRequestContainer = document.querySelector("#otp-request");
const otpVerificationContainer = document.querySelector("#otp-verification");

const generateOTP = () => {
  fetch("/request-otp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: emailInput.value }),
  })
    .then((response) => response.text())
    .then((data) => {
      if (data === "OTP sent successfully") {
        otpRequestContainer.style.display = "none";
        otpVerificationContainer.style.display = "block";
      } else {
        alert("Error sending OTP");
      }
    });
};

const verifyOTP = () => {
  fetch("/verify-otp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, otp }),
  })
    .then((response) => response.text())
    .then((data) => {
      if (data === "OTP verified successfully") {
        alert("Login successful");
      } else {
        alert("Invalid OTP");
      }
    });
};
