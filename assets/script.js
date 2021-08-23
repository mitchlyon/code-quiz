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
var correctAmount = 0
var incorrectAmount = 0

var storage 

let shuffleQuestions, currentQuestion


highscoresButton.addEventListener('click', highScores)
function highScores() {
    var points = JSON.parse(localStorage.getItem('scores'))
   
    alert(points.name + ' ' + points.score);
}

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestion++
    nextQuestion()
})

function startGame() {
    correctAmount = 0
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
    
    if(correct) {
        correctAmount++
        console.clear
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

function endGame() {
    
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
    
    enterButton.classList.remove('hide')
    
    
    enterButton.addEventListener('click', enterName)
}

function enterName() {
    let playerName = prompt('Your score is ' + correctAmount + ' enter name to save')
     //get current highscore
     var currentHighScore = JSON.parse(localStorage.getItem('scores'));
    
     //compare player score with high score
    if (correctAmount > currentHighScore.score) {
        var objectToStore = JSON.stringify({name: playerName, score: correctAmount});
        localStorage.setItem('scores',  objectToStore);
        alert('Good job! you got the new high score')

    } else {
        alert('You did not beat the high score of' + ' ' + currentHighScore.score)
    }
    //if current high score is higher, show message you didnt beat high score 

    //if beat high score, save current score as new high score

//show message you beat high score
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
