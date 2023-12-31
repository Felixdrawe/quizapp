const questions = [
  {
    question:
      'Wie viele Schafe gibt es in Neuseeland im Verhältnis zu Einwohnern?',
    answer1: '1 zu 1',
    answer2: '2 zu 1',
    answer3: '5 zu 1',
    answer4: '10 zu 1',
    correct: 'answer3',
    img: './img/sheeps.jpg',
    bgColor: 'linear-gradient(0deg, #647A6A, #DAEDF0) ',
  },

  {
    question:
      'In welchem Land gibt es einen Wettbewerb, bei dem Käserollen den Hügel hinuntergerollt werden?',
    answer1: 'Schweiz',
    answer2: 'Niederlande',
    answer3: 'England',
    answer4: 'Frankreich',
    correct: 'answer3',
    img: './img/cheese.jpg',
    bgColor: 'linear-gradient(0deg, #938630, #4C6728)',
  },
  {
    question:
      'In welchem Land dürfen Meerschweinchen nicht alleine gehalten werden?',
    answer1: 'Deutschland',
    answer2: 'Schweiz',
    answer3: 'Australien',
    answer4: 'Kanada',
    correct: 'answer2',
    img: './img/guineapig.jpg',
    bgColor: 'linear-gradient(0deg, #DDBC94, #E8EDED)',
  },

  {
    question: 'Welches Land hat die meisten Zeitzonen?',
    answer1: 'Russland',
    answer2: 'USA',
    answer3: 'Frankreich',
    answer4: 'China',
    correct: 'answer3',
    img: './img/timezones.jpg',
    bgColor: 'linear-gradient(-180deg, #9DC3CF, #052B50)',
  },

  {
    question:
      'In welchem Land gibt es einen Wettbewerb, bei dem Menschen Frau Holle spielen und Betten ausschütteln?',
    answer1: 'Deutschland',
    answer2: 'Österreich',
    answer3: 'Schweiz',
    answer4: 'Schweden',
    correct: 'answer1',
    img: './img/holle.jpg',
    bgColor: 'linear-gradient(-180deg, #FFF6D3, #BC7536)',
  },

  {
    question: 'Welches Land hat eine Nationalmannschaft für Quidditch?',
    answer1: 'Australien',
    answer2: 'Großbritannien',
    answer3: 'USA',
    answer4: 'Alle genannten',
    correct: 'answer4',
    img: './img/quidditch.jpg',
    bgColor: 'linear-gradient(-180deg, #73B5D3, #559F5F)',
  },
];

let currentQuestion = 0;
let correctCounter = 0;
let success = new Audio('./audio/success.wav');
let fail = new Audio('./audio/fail.wav');
let applause = new Audio('./audio/cheer.wav');
let answeredCurrentQuestion = false; // Variable to track if user has answered the current question

function init() {
  document.getElementById('question-number').innerHTML = questions.length;
  updateProgressBar();
  showQuestion();
}

function showQuestion() {
  if (gameIsOver()) {
    showEndScreen();
    updateProgressBar();
  } else {
    showNextQuestion();
    updateProgressBar();
  }
}

function gameIsOver() {
  return currentQuestion >= questions.length;
}

function showEndScreen() {
  document.body.style.background = ''; // Set it to the default background color
  document.getElementById('endScreen').style = '';
  document.getElementById('end-image').style = '';
  document.getElementById('questionBody').style = 'display: none';
  document.getElementById('game-image').style = 'display: none';
  document.getElementById('correct-counter').innerHTML = correctCounter;
  document.getElementById('question-number-end').innerHTML = questions.length;
  applause.play();
}

function updateProgressBar() {
  let percentage = (currentQuestion / questions.length) * 100;
  percentage = Math.min(100, Math.round(percentage));
  document.getElementById('progress-bar').innerHTML = `${percentage}%`;
  document.getElementById('progress-bar').style.width = `${percentage}%`;

  if (gameIsOver()) {
    document.getElementById('progress-bar').innerHTML = '100%';
  }
}

function showNextQuestion() {
  let question = questions[currentQuestion];
  document.getElementById('question-counter').innerHTML = currentQuestion + 1;
  document.querySelector('.card-img-top').src = question.img;
  document.getElementById('question').innerHTML = question.question;
  document.getElementById('answer1').innerHTML = question.answer1;
  document.getElementById('answer2').innerHTML = question.answer2;
  document.getElementById('answer3').innerHTML = question.answer3;
  document.getElementById('answer4').innerHTML = question.answer4;
  document.body.style.background = question.bgColor;
}

function answer(answer_selection) {
  const question = questions[currentQuestion];
  const rightanswer = question.correct;
  if (answeredCurrentQuestion) {
    return;
  } else {
    checkAnswer(answer_selection, rightanswer);
  }
}

function checkAnswer(answer_selection, rightanswer) {
  if (rightanswer === answer_selection) {
    document
      .getElementById(answer_selection)
      .parentNode.classList.add('bg-success');
    success.play();
    correctCounter++;
  } else {
    document
      .getElementById(answer_selection)
      .parentNode.classList.add('bg-danger');
    fail.play();
    document.getElementById(rightanswer).parentNode.classList.add('bg-success');
  }
  answeredCurrentQuestion = true;
  document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
  currentQuestion++;
  answeredCurrentQuestion = false;
  document.getElementById('next-btn').disabled = true;
  for (let i = 1; i <= 4; i++) {
    document
      .getElementById('answer' + i)
      .parentNode.classList.remove('bg-success');
    document
      .getElementById('answer' + i)
      .parentNode.classList.remove('bg-danger');
  }
  showQuestion();
}

function restart() {
  currentQuestion = 0;
  correctCounter = 0;
  answeredCurrentQuestion = false;
  document.getElementById('endScreen').style = 'display: none';
  document.getElementById('end-image').style = 'display: none';
  document.getElementById('questionBody').style = '';
  document.getElementById('game-image').style = '';
  init();
}
