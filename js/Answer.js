class Quiz {
    constructor(questions) {
        this.questions = questions;
        this.currentQuestion = 0;
        this.total = 0;
        this.isSelect = false;
        this.imgPath = './images/';
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
        const $score = document.querySelector('.userscore')
        const $img = document.querySelector('.image img');

        $score.innerText = this.total;

        this.isSelect = false

        this.rightAnswer = this.questions[this.currentQuestion].indexAnswer;
        $img.src = this.imgPath + this.questions[this.currentQuestion].imgSrc;

        $question.innerText = this.questions[this.currentQuestion].question;
        $score.innerText = this.total;

        $buttons.forEach(button => {
            button.classList.remove('right')
            button.classList.remove('error')

            if (button.dataset.index == this.rightAnswer) {
                this.rightAnswerButton = button;
            }
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
            this.rightAnswerButton.classList.add("right")
        }
        this.next()
    }

    next() {
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
    constructor(question, imgSrc, answers, indexAnswer) {
        this.question = question;
        this.imgSrc = imgSrc;
        this.answer = answers;
        this.indexAnswer = indexAnswer;
    }
}