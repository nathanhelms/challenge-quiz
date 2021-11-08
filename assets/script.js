var startButton = document.querySelector("#startButton")
var timer = 75;
var timerText = document.getElementById("timer")

var introContainerEl = document.getElementsByClassName("introContainer")[0]
var questionContainerEl = document.getElementsByClassName("questionContainer")[0]
var finalResultsContainerEl = document.getElementsByClassName("finalResults")[0]
var finalScore = document.getElementsByClassName("final-score")[0]
var currentQuestionIndex = 0

var questionEl = document.getElementById("questionText")
var option1El = document.getElementById("option1")
var option2El = document.getElementById("option2")
var option3El = document.getElementById("option3")
var option4El = document.getElementById("option4")
var option5El = document.getElementById("option5")

var initialsSubmit = document.getElementById("initials-submit")

var correctIncorrectTextEl = document.getElementsByClassName("correct-incorrect-text")[0]

//QUESTIONS

var questionArray = [
  {
    question: "Hg is the chemical symbol of which element?",
    answers: ["Hydrogen", "Gold", "Silver", "Helium", "Mercury"],
    correctAnswer: "Mercury"
  },
  {
    question: "Which country produces the most coffee in the world?",
    answers: ["Venezuela", "Australia", "Brazil", "Mexico", "India"],
    correctAnswer: "Brazil"
  },
  {
    question: "What is the painting “La Gioconda” more usually known as?",
    answers: ["The Mona Lisa", "La Guernica", "The Kiss", "Starry Night", "The Scream"],
    correctAnswer: "The Mona Lisa"
  },
  {
    question: "How much did the original Chewbacca costume weigh?",
    answers: ["5 lbs", "12 lbs", "16 lbs", "20 lbs", "8 lbs"],
    correctAnswer: "8 lbs"
  },
  {
    question: "What language has the most words? ",
    answers: ["French", "English", "Spanish", "Latin", "Chinese"],
    correctAnswer: "English" 
  }
]

//LEADERBOARD

function finalResults() {
  questionContainerEl.style.visibility = "hidden";
  finalResultsContainerEl.style.visibility = "visible";
  finalScore.innerHTML = timer
  onclick.initialsSubmit = /////////////
  console.log("did this work?")
}

//STORE LEADERBOARD STUFF



//QUESTION SWITCHER

function questionSwitcher(answer) {

if (answer === questionArray[currentQuestionIndex].correctAnswer) { 
  console.log("else if test")
  correctIncorrectTextEl.innerHTML = "Correct!"
} else {
  correctIncorrectTextEl.innerHTML = "Wrong!"
  timer -= 10
}

  currentQuestionIndex++

  if (currentQuestionIndex >= 5) {
    finalResults();
  };

  
  
  questionIndex() 


};

//QUIZ

function startQuiz() {
  introContainerEl.style.visibility = "hidden";
  questionContainerEl.style.visibility = "visible";
  questionIndex();
  timeout();
}

function questionIndex() {
  var currentQuestion = questionArray[currentQuestionIndex].question

  questionEl.innerHTML = currentQuestion
  option1El.innerHTML = questionArray[currentQuestionIndex].answers[0]
  option2El.innerHTML = questionArray[currentQuestionIndex].answers[1]
  option3El.innerHTML = questionArray[currentQuestionIndex].answers[2]
  option4El.innerHTML = questionArray[currentQuestionIndex].answers[3]
  option5El.innerHTML = questionArray[currentQuestionIndex].answers[4]
  console.log(questionIndex)

  option1El.onclick = function() {
    questionSwitcher(questionArray[currentQuestionIndex].answers[0])
  };
  option2El.onclick = function() {
    questionSwitcher(questionArray[currentQuestionIndex].answers[1])
  };
  option3El.onclick = function() {
    questionSwitcher(questionArray[currentQuestionIndex].answers[2])
  };
  option4El.onclick = function() {
    questionSwitcher(questionArray[currentQuestionIndex].answers[3])
  };
  option5El.onclick = function() {
    questionSwitcher(questionArray[currentQuestionIndex].answers[4])
  };  
}

//TIMER

document.getElementById("timer").innerHTML = timer;

function timeout() {
  console.log(timer);
  document.getElementById("timer").innerHTML = timer;
  timer--;
  if (timer >= 0) {
    setTimeout(timeout, 1000);
  }
}


var data = {
  score: timer,
  initials: ""
}

/*

localStorage.setItem("score", JSON.stringify(data))

var scoreData = localStorage.getItem('score')
var parsedScoreData = JSON.parse(scoreData)
onsole.log(parsedScoreData.initials + ' ' + parsedScoreData.score)

*/

//BUTTON

startButton.addEventListener("click", startQuiz);



