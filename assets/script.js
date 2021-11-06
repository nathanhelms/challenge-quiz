

//hide and show the question thing 

var startButton = document.querySelector('#startButton')
var timer = 75;
var timerText = document.getElementById("#timer")

var introContainerEl = document.getElementsByClassName("introContainer")[0]
var questionContainerEl = document.getElementsByClassName("questionContainer")[0]

var questionEl = document.getElementById("questionText")
var option1El = document.getElementById("option1")
var option2El = document.getElementById("option2")
var option3El = document.getElementById("option3")
var option4El = document.getElementById("option4")
var option5El = document.getElementById("option5")










var questionArray = [
  {
    question: "Hg is the chemical symbol of which element?",
    answers: ["Hydrogen", "Gold", "Silver", "Helium", "Mercury"],
    correctAnswer: "Mercury"
  },
  {
    question: "",
    answers: "",
    correctAnswer: ""
  }
]


function questionSwitcher(answer) {
};


//QUIZ

function startQuiz() {
  introContainerEl.style.visibility = "hidden";
  questionContainerEl.style.visibility = "visible";
  questionIndex(0);
  timeout();
}

function questionIndex(currentQuestionIndex) {
  var currentQuestion = questionArray[currentQuestionIndex].question

  questionEl.innerHTML = currentQuestion
  option1El.innerHTML = questionArray[currentQuestionIndex].answers[0]
  option2El.innerHTML = questionArray[currentQuestionIndex].answers[1]
  option3El.innerHTML = questionArray[currentQuestionIndex].answers[2]
  option4El.innerHTML = questionArray[currentQuestionIndex].answers[3]
  option5El.innerHTML = questionArray[currentQuestionIndex].answers[4]
  console.log(questionIndex)

  option1El.onclick = function() {questionSwitcher(questionArray[currentQuestionIndex].answers[0])};

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








//BUTTON

startButton.addEventListener("click", startQuiz);



