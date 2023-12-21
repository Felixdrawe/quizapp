const questions = [
    {
        "question": "Who invented HTML?",
        "answer1": "Tim Berners-Lee",
        "answer2": "Brendan Eich",
        "answer3": "Douglas Crockford",
        "answer4": "Sheryl Sandberg",
        "correct": "answer1"
    },
    {
        "question": "What does CSS stand for?",
        "answer1": "Cascading Style Sheets",
        "answer2": "Computer Science Society",
        "answer3": "Creative Style Solutions",
        "answer4": "Coding Style Standards",
        "correct": "answer1"
    },
    {
        "question": "Which programming language is known as the 'mother of all languages'?",
        "answer1": "Java",
        "answer2": "C++",
        "answer3": "Python",
        "answer4": "Assembly",
        "correct": "answer4"
    },
    {
        "question": "What is the capital of France?",
        "answer1": "Paris",
        "answer2": "London",
        "answer3": "Berlin",
        "answer4": "Rome",
        "correct": "answer1"
    },
    {
        "question": "What is the largest planet in our solar system?",
        "answer1": "Mars",
        "answer2": "Jupiter",
        "answer3": "Saturn",
        "answer4": "Neptune",
        "correct": "answer2"
    },
    {
        "question": "Who is the CEO of Tesla?",
        "answer1": "Elon Musk",
        "answer2": "Jeff Bezos",
        "answer3": "Mark Zuckerberg",
        "answer4": "Tim Cook",
        "correct": "answer1"
    },
    {
        "question": "What is the chemical symbol for gold?",
        "answer1": "Au",
        "answer2": "Ag",
        "answer3": "Cu",
        "answer4": "Fe",
        "correct": "answer1"
    },
    {
        "question": "Which country won the FIFA World Cup in 2018?",
        "answer1": "Germany",
        "answer2": "Brazil",
        "answer3": "France",
        "answer4": "Argentina",
        "correct": "answer3"
    }
];

const currentQuestion = 0;

function init(){
    document.getElementById("question-number").innerHTML = questions.length
    showQuestion();

}


function showQuestion(){
    const question = questions[currentQuestion];
    document.getElementById("question").innerHTML = question.question;
    document.getElementById("answer1").innerHTML = question.answer1;
    document.getElementById("answer2").innerHTML = question.answer2;
    document.getElementById("answer3").innerHTML = question.answer3;
    document.getElementById("answer4").innerHTML = question.answer4;
}