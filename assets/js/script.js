const generateBtn = document.querySelector("#generate");

const randomLowercase = () => {
  const lowercase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  return lowercase[Math.floor(Math.random() * lowercase.length)];
};

const randomUppercase = () => {
  const uppercase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  return uppercase[Math.floor(Math.random() * uppercase.length)];
};

const randomNumber = () => {
  const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return num[Math.floor(Math.random() * num.length)];
};

const randomSpecial = () => {
  const symbol = [
    "!",
    "@",
    "#",
    "$",
    "^",
    "%",
    "&",
    "*",
    "(",
    ")",
    "{",
    "}",
    "[",
    "]",
    "=",
    "<",
    ">",
    "/",
    "?",
    ",",
    ".",
  ];

  return symbol[Math.floor(Math.random() * symbol.length)];
};

const getPasswordLength = () => {
  const passwordLengthString = prompt(
    "What is the length of the password? (should be greater than or equal to 8 and less than or equal to 128)"
  );

  return parseInt(passwordLengthString, 10);
};

const validatePasswordLength = (passwordLength) => {
  // check if number
  if (Number.isNaN(passwordLength)) {
    alert("Password length should be a number");
    return false;
  } else {
    if (passwordLength >= 8 && passwordLength <= 128) {
      return true;
    } else {
      alert(
        "Password length should be greater than or equal to 8 and less than or equal to 128"
      );
      return false;
    }
  }
};

const choicesToAsk = [
  {
    key: "isLowercase",
    question: "Do you want to include lowercase characters?",
    execute: randomLowercase,
  },
  {
    key: "isUppercase",
    question: "Do you want to include uppercase characters?",
    execute: randomUppercase,
  },
  {
    key: "isNumber",
    question: "Do you want to include number characters?",
    execute: randomNumber,
  },
  {
    key: "isSpecial",
    question: "Do you want to include special characters?",
    execute: randomSpecial,
  },
];

const getChoices = () => {
  const choices = {};
  const askUser = (choiceObject) => {
    const confirmedChoice = confirm(choiceObject.question);
    choices[choiceObject.key] = confirmedChoice;
  };

  choicesToAsk.forEach(askUser);

  return choices;
};

const validateChoices = (choices) => {
  const choicesArray = Object.entries(choices);

  const checkIfFalse = (choice) => {
    return !choice[1];
  };

  return !choicesArray.every(checkIfFalse);
};

const generatePassword = () => {
  // ask the user for the password length
  const passwordLength = getPasswordLength();

  // validate the password length
  const isValidPasswordLength = validatePasswordLength(passwordLength);

  if (isValidPasswordLength) {
    // get all 4 choices using confirm
    const choices = getChoices();

    // validate if at least one choice is true
    const isValidChoices = validateChoices(choices);

    if (isValidChoices) {
      //
    } else {
      alert("Please select at least one choice");
    }

    // console.log(choices);
  }
};

const writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

generateBtn.addEventListener("click", writePassword);
