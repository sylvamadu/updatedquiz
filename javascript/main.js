//Next button
const nextBtn = document.getElementById("next");
nextBtn.addEventListener("click", (event) => {
    quiz.questionIndex++;
    if(quiz.questionIndex == questions.length - 1){
        nextBtn.classList.add("hide");
    }
    displayQuestion();
});

//Previous button
const prevBtn = document.getElementById("prev");
prevBtn.addEventListener("click", (event)=>{
    quiz.questionIndex--;
    displayQuestion();
});

//Submit button
const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", (event) => {
    showScores();
});

//Guess fxn
function guess(id, answer){
    let button = document.getElementById(id);
    resetHighlight(button)
    // let parent = button.parentElement
    button.onclick = function(){
        highlightAnswer(button)
        quiz.guess(answer);
        // displayQuestion();
    }
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

//Create new quiz class instance
let quiz = new Quiz(questions);

//display questions
displayQuestion();

//Start countdown
startCountdown();