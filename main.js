const alert = document.getElementById("timingalert");
const nextBtn = document.getElementById("next");
nextBtn.addEventListener("click", next);
const prevBtn = document.getElementById("prev");
prevBtn.addEventListener("click", prev);
const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", submit);

//Create a Quiz class

class Quiz{
    constructor(questions){
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    getQuestionIndex(){
        return this.questions[this.questionIndex];
    }

    guess(answer){
        if(this.getQuestionIndex().isCorrectAnswer(answer)){
            this.score++;
        }
        //this.questionIndex++;
        
    }

    isEnded(){
        return this.questionIndex === this.questions.length;
    }
}

//Create a question class
class Question{
    constructor(text,choices, answer){
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    isCorrectAnswer(choice){
        return this.answer === choice;
    }
}

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
//next
function next(){
    quiz.questionIndex++;
    if(quiz.questionIndex == questions.length - 1){
        nextBtn.classList.add("hide");
    }
    displayQuestion();

}
//prev
function prev(){
    quiz.questionIndex--;
    displayQuestion();
}
//submit
function submit(){
    showScores();
}
//Guess fxn
function guess(id,guess){
    let button = document.getElementById(id);
    button.onclick = function(){
       quiz.guess(guess);
       displayQuestion(); 
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
//an array of questions from a Database
const data = [
    {
        que: "Which is the backend of Python?",
        arr: ["Nodejs","Django","Ruby","Asp.Net"],
        ans:"Ruby"
    },
    {
        que: "What is the full Meaning of PHP?",
        arr: ["javascript","Cascade style","Ruby","Python"],
        ans:"javascript"
    },
    {
        que: "Which language is built on React?",
        arr: ["javascript","Cascade style","Ruby","Python"],
        ans:"javascript"
    },
    {
        que: "What is the full Meaning of PHP?",
        arr: ["javascript","Cascade style","Ruby","Python"],
        ans:"javascript"
    },
]
//Create quiz questions

let questions = data.map(item => new Question(item.que,item.arr,item.ans));

let quiz = new Quiz(questions);

//display questions
displayQuestion();

//Add a Countdown
let time = 1;
let quizTimeInMinutes = time * 60 ;
let quizTime = quizTimeInMinutes ;

let counting = document.getElementById("timer_status");

function startCountdown(){
    let quizTimer = setInterval(
        function(){
            if(quizTime <= 0){
                clearInterval(quizTimer);
                showScores();
            }else{
                quizTime--;
                let sec = Math.floor(quizTime % 60);
                let min = Math.floor(quizTime / 60) % 60;
                counting.innerHTML = `Time Left:${min} : ${sec}`;

                if(quizTime < 30 ){
                    alert.innerText = `You have ${quizTime} seconds to go!!!`;
                }
            }
        }, 1000
    )
}

startCountdown();