//Display question
function displayQuestion(){
  if(quiz.questionIndex < questions.length){
      submitBtn.classList.add("hide");
  }
  if(quiz.questionIndex == 0) {
      prevBtn.classList.add("hide");
  }
  if(quiz.questionIndex >= 1){
      prevBtn.classList.remove("hide");
  }
  if(quiz.questionIndex == questions.length - 1){
      submitBtn.classList.remove("hide");
  }
  if(quiz.isEnded()){
      showScores();
  }else{
      let questionElement = document.getElementById("question_text");
      questionElement.innerHTML = quiz.getQuestionIndex().text;

      //show options
      let choices = quiz.getQuestionIndex().choices;
      for(let i = 0; i < choices.length; i++){
          let choiceElement = document.getElementById("choice" + i);
          choiceElement.innerHTML = choices[i];
          guess("btn" + i, choices[i]);
      }

      showProgress();
  }
}

//show progress
function showProgress(){
  let currentQuestionNumber = quiz.questionIndex + 1;
  let progressElement = document.getElementById("question_status");
  progressElement.innerHTML = `
      Question ${currentQuestionNumber} of ${quiz.questions.length}
  `;
}

//show score
function showScores(){
  alert.innerText = "";
  let quizEndHTML = `
      <h1>Quiz Completed</h1>
      <h2 id="score">You Scored: ${quiz.score} of ${quiz.questions.length} </h2>
      <div class="quiz-repeat">
          <a href="index.html">Take Quiz Again</a>
      </div>
      `;
      let quizElement = document.getElementById("contentt");
      quizElement.innerHTML = quizEndHTML;
}

//Highlights selected answer
function highlightAnswer(answerButton){
  let parentDiv = answerButton.parentElement
  for(let child of parentDiv.children){
    child.classList.remove("highlight")
  }
  answerButton.classList.add("highlight")
}

//Resets all answers to unghighlighted
function resetHighlight(button){
  button.classList.remove("highlight")
}