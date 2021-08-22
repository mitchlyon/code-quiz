var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainer = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerBtnElement = document.getElementById('answer-btn')
var saveButton = document.getElementById('save-btn')
var enterButton = document.getElementById('enter-btn')
var enterScore = document.getElementById('enterscore')
var highscoresButton = document.getElementById('highscores-btn')

var startTime = 1
let time = startTime * 60
var countdownEl = document.getElementById('countdown')

var score = 0

let shuffleQuestions, currentQuestion

//setInterval(updateCountdown, 1000)

highscoresButton.addEventListener('click', highScores)
function highScores() {
    
}

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestion++
    nextQuestion()
})

function startGame() {

    enterButton.classList.add('hide')
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
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerBtnElement.firstChild) {
        answerBtnElement.removeChild(answerBtnElement.firstChild)
    }
}

function selectAnswer(e) {
    
    var selectedBtn = e.target
    var correct = selectedBtn.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerBtnElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct) 
    })

    if (shuffleQuestions.length > currentQuestion + 1){
        nextButton.classList.remove('hide')
    } else {
        endGame()
    }
    //score code goes above
    var correctAmount = 0
    var incorrectAmount = 0
    if(correct) {
        correctAmount++
        console.log(correctAmount)
    } else  {
        incorrectAmount++
        updateAmount = 
        console.log(incorrectAmount)
    }
}

function setStatusClass(element, correct) {
    
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
        
    } else {
        element.classList.add('wrong')
        
    }
   
}
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}



//function updateCountdown() {
    //var minutes = Math.floor(time / 60)
    //let seconds = time % 60

    //seconds = seconds < 10 ? '0' + seconds : seconds

    //countdownEl.innerHTML = `${minutes}:${seconds}`
    //time--
//}
function endGame() {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
    
    enterButton.classList.remove('hide')
    
    
    enterButton.addEventListener('click', enterName)
}

function enterName() {
    let name = prompt('Your score is ' + score + ' enter name to save')
    var storage= name + " " + score
    
    localStorage.setItem('scores',  storage)

    console.log(localStorage)


}





var questions = [
    {
        question: 'What does HTML stand for?',
        answers: [
            {text: 'Hyper Text Markup Language', correct: true},
            {text: 'Hyperlinks And Text Markup Language', correct: false},
            {text: 'Home Tool Markup Language', correct: false},
            {text: 'Cascading style sheets', correct: false}
        ]
    },
    {
        question: 'What deos CSS stand for?',
        answers: [
            {text: 'Cascade style sheets', correct: false},
            {text: 'Color and style sheets', correct: false},
            {text: 'Cascading style sheets', correct: true},
            {text: 'Hyper Text Markup Language', correct: false}
            
        ]
    },
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        answers: [
            {text: '<head>', correct: false},
            {text: '<meta>', correct: false},
            {text: '<script>', correct: true},
            {text: '<style>', correct: false}
        ]
    },
    {
        question: 'Which of the following is NOT JavaScript Data Types?',
        answers: [
            {text: 'Undefined', correct: false},
            {text: 'Number', correct: false},
            {text: 'Boolean', correct: false},
            {text: 'Float', correct: true}
        ]
    },
    {
        question: 'What are the types of Pop up boxes available in JavaScript?',
        answers: [
            {text: 'Alert', correct: false},
            {text: 'All of the above', correct: true},
            {text: 'Prompt', correct: false},
            {text: 'Confirm', correct: false}
        ]
    },
]
