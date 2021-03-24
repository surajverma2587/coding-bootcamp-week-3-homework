const generateBtn = document.querySelector("#generate");

const writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

generateBtn.addEventListener("click", writePassword);
