let cardRowOne = [];
let cardRowTwo = [];
let cardRowThree = [];
let cardBingo = [cardRowOne, cardRowTwo, cardRowThree];
let bomboArray = [];
let randomNumber;
let roundsToBingo;
let punctuation;
let line = false;
let user;
let counter = 0;

const askName = () => {
  user = prompt("Welcome, what is your name?");
  alert(`Welcome ${user}. Let's PLAY!!`);

  return user;
};
askName();

const bingoCard = () => {
  cardRowOne = [];
  cardRowTwo = [];
  cardRowThree = [];
  cardBingo = [cardRowOne, cardRowTwo, cardRowThree];

  while (cardRowOne.length < 5) {
    let numRandomCard = Math.floor(Math.random() * 25) + 1;
    if (!cardRowOne.includes(numRandomCard)) {
      cardRowOne.push(numRandomCard);
    }
  }
  while (cardRowTwo.length < 5) {
    numRandomCard = Math.floor(Math.random() * 25) + 1;
    if (
      !cardRowTwo.includes(numRandomCard) &&
      !cardRowOne.includes(numRandomCard)
    ) {
      cardRowTwo.push(numRandomCard);
    }
  }
  while (cardRowThree.length < 5) {
    numRandomCard = Math.floor(Math.random() * 25) + 1;
    if (
      !cardRowThree.includes(numRandomCard) &&
      !cardRowTwo.includes(numRandomCard) &&
      !cardRowOne.includes(numRandomCard)
    ) {
      cardRowThree.push(numRandomCard);
    }
  }
  console.table(cardBingo);
  console.log("This is your card: ");
};

const askForNewNumbersCard = () => {
  let question;
  do {
    question = confirm(
      "Do you want another numbers card? Press ACEPTAR to change your card."
    );
    if (question === true) {
      bingoCard();
    }
  } while (question !== false);
};

const askForContinue = () => {
  let questionForContinue = confirm("Do you want to continue playing?");
  if (questionForContinue === true) {
    randomBombo();
  } else {
    alert(`Thanks for play with us!`);
  }
};

const playAgain = () => {
  let answerPlayAgain = prompt("Do you want to play a gain? Write YES or NO.");
  answerPlayAgain = answerPlayAgain.toUpperCase();

  switch (answerPlayAgain) {
    case "YES":
      showPlayersRanking();
      resetgame();
      main();
      break;
    case "NO":
      showPlayersRanking();
      byeFunction();
      break;
  }
};

const byeFunction = () => {
  alert("Thanks for playing with us!");
  throw "Game over";
};

const checkLine = () => {
  if (line === false) {
    if (cardBingo[0].every((number) => number === "X")) {
      alert("Line!");
      return (line = true);
    }
    if (cardBingo[1].every((number) => number === "X")) {
      alert("Line!");
      return (line = true);
    }
    if (cardBingo[2].every((number) => number === "X")) {
      alert("Line!");
      return (line = true);
    }
  } else if (
    cardBingo[0].every((number) => number === "X") &&
    cardBingo[1].every((number) => number === "X") &&
    cardBingo[2].every((number) => number === "X")
  ) {
    alert("BINGOOOO!!");
    playAgain();
  }
};

const checkNumber = (condition, number) => {
  if (condition === true) {
    alert("There's a coincidence!.");
    checkLine();
  } else {
    alert(` The generated number is : ${number}`);
  }
  askForContinue();
};

const randomBombo = () => {
  let numberOfTheBombo;
  do {
    numberOfTheBombo = Math.floor(Math.random() * 25) + 1;
  } while (bomboArray.includes(numberOfTheBombo));
  bomboArray.push(numberOfTheBombo);
  counter++;
  console.log(`Current turn: ${counter}`);
  console.log(`These are the numbers you've passed: ${bomboArray}`);

  for (let i = 0; i < cardBingo.length; i++) {
    for (let j = 0; j < cardBingo[i].length; j++) {
      if (numberOfTheBombo === cardBingo[i][j]) {
        cardBingo[i][j] = "X";
        console.table(cardBingo);
        return checkNumber(true, numberOfTheBombo);
      }
    }
  }
  return checkNumber(false, numberOfTheBombo);
};

const showPlayersRanking = () => {
  const ranking = [
    { name: "Berta", punctuation: 40 },
    { name: "Manuela", punctuation: 50 },
    { name: "Natalia", punctuation: 60 },
    { name: "Cristian", punctuation: 55 },
    { name: user, punctuation: 40 + counter },
  ];
  ranking.sort((a, b) => b.punctuation - a.punctuation);
  console.log("ISDI ranking: ");
  console.table(ranking);
};

const resetgame = () => {
  counter = 0;
  line = false;
  bomboArray = [];
};

const main = () => {
  bingoCard();
  askForNewNumbersCard();
  randomBombo();
};
main();
