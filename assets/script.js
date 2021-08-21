var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainer = document.getElementById('question-container')

var questionElement = document.getElementById('question')
var answerBtnElement = document.getElementById('answer-btn')

let shuffleQuestions, currentQuestion

startButton.addEventListener('click', startGame)

function startGame() {
    console.log("started")
    startButton.classList.add('hide')
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    currentQuestion = 0
    questionContainer.classList.remove('hide')
    nextQuestion()
    
}

function nextQuestion() {
    resetQuestion()
    showQuestion(shuffleQuestions[currentQuestion])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerBtnElement.appendChild(button)
    })
}

function resetQuestion() {
    nextButton.classList.add('hide')
    while (answerBtnElement.firstChild) {
        answerBtnElement.removeChild(answerBtnElement.firstChild)
    }
}

function selectAnswer() {

}

var questions = [
    {
        question: 'What is 2 + 2',
        answers: [
            {text: '4', correct: true},
            {text: '22', correct: false}
        ]
    }
]