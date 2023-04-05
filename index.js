function Quiz(questions) {

    this.score = 0;
    this.questions = questions;
    this.questionNo = 0;
}

Quiz.prototype.isEnded = function () {
    return this.questionNo === this.questions.length;
}

Quiz.prototype.getQuestionIndex = function () {
    return this.questions[this.questionNo]
}

Quiz.prototype.checkAnswer = function (option) {
    if (this.getQuestionIndex().isCorrect()) {
        this.quiz.score++
        
    }
   
    this.questionNo++
}

Question.prototype.isCorrect = function (option) {
    return this.answer === this.option
}


function Question(title, options, answer) {

    this.title = title;
    this.options = options;
    this.answer = answer;
}




function showScores() {
    let res;
    res = "<h1>Results</h1>"
    res+="<h2> Your Score is "+ quiz.score+" Marks and Percentage "+(quiz.score/quiz.questions.length*100) +"%</h2>"
   let quizElement= document.getElementById('quiz')
  quizElement.innerHTML=res

} 

try {
    function showProgress() {
        let queNo;
       queNo= quiz.questionNo;
      curr= queNo+1;
        
        let elem = document.getElementById('progress')
        elem.innerHTML = 'Question '+ curr +' of '+ quiz.questions.length;
    }
} catch (error) {
    console.log("here is the problem")
}



function loadquestions() {

    if (quiz.isEnded()) {
        showScores()
    } else {
        let questionTitle = document.getElementById('question')
        questionTitle.innerHTML = quiz.getQuestionIndex().title
        let options = quiz.getQuestionIndex().options

        for (let i = 0; i < options.length; i++) {
            let optbtn = document.getElementById('choice' + i)
            optbtn.innerHTML = options[i]

            handleoptionclicked("btn" + i, options[i])
            
        }
       
        
    }
    showProgress();
    

}

function handleoptionclicked(btnnumber, option) {
    let btn = document.getElementById(btnnumber)
    btn.onclick = function () {
        quiz.checkAnswer()
        loadquestions()
    }

}

let questions = [

    new Question("Java Script Supports", ["Functions", "XHTML", "CSS", "HTML"], "Functions"),
    new Question("Which in used for Styling", ["CSS", "JavaScript", "JQuery", "XML"], "CSS"),
    new Question("Which is not a JavaScript Framework", ["ReactJS", "Angular", "Vue", "SpringBoot"], "SpringBoot"),
    new Question("Which is used to connect to database", ["PHP", "JS", "CSS", "HTML"], "PHP"),
    new Question("Java Script is a", ["Programming Language", "Framework", "IDE", "Language"], "FPragramming Language"),
]

let quiz = new Quiz(questions)

loadquestions()


