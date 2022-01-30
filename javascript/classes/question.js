class Question{
  constructor(text,choices, answer){
      this.text = text;
      this.choices = choices;
      this.answer = answer;
      this.answered =  false;
      this.previousAnswerWasCorrect =  false;
  }

  isCorrectAnswer(choice){
    //Sets 'answered' to true. Happens once a question gets answered 
    this.answered = true;

    //Stores correctness of an answer for future answers to refer to
    this.previousAnswerWasCorrect = this.answer === choice;

    //Returns correctness of answer
    return this.answer === choice;
  }
}