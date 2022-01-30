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
      if(this.getQuestionIndex().answered){         //Checks if that question has been answered before
        console.log("This question has been answered before")

        //Checks if the previous answer for that question was correct. If it was then score cant be incremented
        //Instead it gets taken down if new answer is wrong or stays the same if new answer is correct (Correct answer gets clicked on twice)
        if(this.getQuestionIndex().previousAnswerWasCorrect){
            console.log("The previous answer was correct")

            if(!this.getQuestionIndex().isCorrectAnswer(answer)){       //Checks if new answer is wrong in which case score reduces
                if(this.score !== 0) this.score--;
                console.log("This answer is wrong and score: " + this.score);
            } 
            else console.log("Correct answer got clicked on twice")

        }
        else{    //Previous answer was incorrect. If new one is correct score gets incremented, else it stays the same (wrong answer gets clicked on twice)

            if(this.getQuestionIndex().isCorrectAnswer(answer)){       //Checks if new answer is correct in which case score increases
                this.score++;
                console.log("This answer is right and score: " + this.score);
            } 
            else console.log("Wrong answer got clicked on twice")
        }
      }
      else {
        console.log("This question hasnt been answered before")
        if(this.getQuestionIndex().isCorrectAnswer(answer)){     //Question hasnt been answered before and gets processed as a newly answered question
            this.score++;
            console.log("score:" + this.score);
        } else console.log("Wrong answer got clicked and score: " + this.score)
    }
  }

  isEnded(){
      return this.questionIndex === this.questions.length;
  }
}