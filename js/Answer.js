class Quiz {
    constructor(questions) {
        this.questions = questions;
        this.currentQuestion = 0;
        this.total = 0;
        this.isSelect = false;
        this.Init()
    }

    Init() {
        const $buttons = document.querySelectorAll('.answer-btn');

        $buttons.forEach(button => {
            button.addEventListener("click", () => {
                if(!this.isSelect){
                    button.classList.add("check")
                    this.checkAnswer(button)
                    this.isSelect = true
                }
            })
        })
        
        this.Update()
    }

    Update() {
        const $buttons = document.querySelectorAll('.answer-btn');
        const $question = document.querySelector('.title');
        var $score = document.querySelector('.userscore')

        $score.innerText = this.total;

        this.isSelect = false

        this.rightAnswer = this.questions[this.currentQuestion].indexAnswer;
        $question.innerText = this.questions[this.currentQuestion].question;
        $score.innerText =+ this.total;

        $buttons.forEach(button => {
            button.classList.remove('right')
            button.classList.remove('error')
        })

        for (let x = 0; x < this.questions[this.currentQuestion].answer.length; x++) {
            $buttons[x].value = this.questions[this.currentQuestion].answer[x]["answer"]
        }
    }

    checkAnswer(checkButton) {

        if(Number(checkButton.dataset.index) === this.rightAnswer){
            checkButton.classList.remove("check")
            checkButton.classList.add("right")
            this.total += 1
        } else {
            checkButton.classList.remove("check")
            checkButton.classList.add("error")
        }

        if (this.questions.length - 1 === this.currentQuestion) {
            setTimeout(() => this.finish(), 1000);
        } if (this.questions.length - 1 > this.currentQuestion) {
            this.currentQuestion += 1
            setTimeout(() => this.Update(), 1000)
        } else return
    }

    finish() {
        const $questionWrapper = document.querySelector('.question')
        const $finish = document.querySelector('.finish');
        console.log(this.total);

        $finish.insertAdjacentHTML("beforeend", `<p class="stat">Ваш результат ${ this.total } из ${ this.questions.length }</p>`);

        $questionWrapper.style.display = "none"
        $finish.style.display = "block"
    }
}

class Answer {
    constructor (answer, score) {
        this.answer = answer
        this.score = score
    }
}

class Question {
    constructor(question, answers, indexAnswer) {
        this.question = question;
        this.answer = answers;
        this.indexAnswer = indexAnswer;
    }
}

const questions = [
    new Question("В каком году были Олимпийские игры в Сочи?",
    [
        new Answer("1999", 0),
        new Answer("2015", 0),
        new Answer("2014", 1),
        new Answer("2022", 0)
    ], 2),
    new Question("Начало Воторой Мировой Войны?",
    [
        new Answer("1914", 0),
        new Answer("1945", 0),
        new Answer("1941", 0),
        new Answer("1939", 2)
    ], 3),
    new Question("Когда был ЧМ мира В Росии",
    [
        new Answer("2017", 0),
        new Answer("2018", 1),
        new Answer("2007", 0),
        new Answer("2010", 0)
    ], 1)
]

new Quiz(questions)
