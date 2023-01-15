// Do you know me? - A fun CLI App
let readlineSync = require('readline-sync');
let score = 0;

// data of High scores
let highScores = [
  {
    name: "Manas",
    score: 5
  },
  {
    name: "Vishal",
    score: 4
  },
];

// array of objects - questions set
let questions = [
  {
    question: "In which state do I live? ",
    answer: "Odisha"
  },
  {
    question: "Where do I study? ",
    answer: "IIITA"
  },
  {
    question: "Do I like Horror-Thriller movie?(Yes/No) ",
    answer: "Yes"
  },
  {
    question: "My favorite superhero would be? ",
    answer: "IronMan"
  },
  {
    question: "What is my favourite game? ",
    answer: "Football"
  },
];

// welcome funtion
function welcome() {
  let userName = readlineSync.question("What's your name? ");
  console.log("Welcome " + userName + " to 'Do you know Manas Quiz Game.'");
}

// play function
function play(question, answer) {
  let userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right!");
    score = score + 1;
  } else {
    console.log("wrong!");
  }
  console.log("Your Current Score is: ", score);
  console.log("_________________")
}

// game function
function game() {
  for (let i = 0; i < questions.length; i++) {
    let currentQues = questions[i];
    play(currentQues.question, currentQues.answer);
  }
}

// highscore function
function showScores() {
  console.log("YAY! You SCORED: ", score);
  console.log("Check out the high scores, if you want to be there ping me and I'll update it");
  highScores.map(score => console.log(score.name, " : ", score.score));
}

welcome();
game();
showScores();