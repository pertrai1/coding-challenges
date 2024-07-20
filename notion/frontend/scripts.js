const generateOTPBtn = document.querySelector("#btn-generate-otp");
const emailInput = document.querySelector("#email-input");

const generateOTP = () => {
  generateOTPBtn.disabled = true;
  validateEmailInput();
  console.dir(generateOTPBtn);
};

const validateEmailInput = () => {
  const emailInputValue = emailInput.value;
  if (emailInputValue === "") {
    emailInput.classList.add("error");
  } else {
    emailInput.classList.remove("error");
  }
};
