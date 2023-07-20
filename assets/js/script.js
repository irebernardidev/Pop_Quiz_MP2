let score = 0;
let currentQuestionIndex = 0;
let questions = [];
let timer;

const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const choiceContainerElement = document.getElementById('choice-container');
const scoreElement = document.getElementById('score');
const nextButton = document.getElementById('next-btn');
const timerCountdownElement = document.getElementById('timer-countdown');

const categoryElement = document.getElementById('category');
const difficultyElement = document.getElementById('difficulty');
const timerElement = document.getElementById('timer');
const startButton = document.getElementById('start-btn');

// Fetch quiz categories
fetch('https://opentdb.com/api_category.php')
    .then(response => response.json())
    .then(data => {
        data.trivia_categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category.id;
            option.text = category.name;
            categoryElement.appendChild(option);
        });
    });

startButton.addEventListener('click', () => {
    // Fetch questions from API
    fetch(`https://opentdb.com/api.php?amount=10&category=${categoryElement.value}&difficulty=${difficultyElement.value}&type=multiple`)
        .then(response => response.json())
        .then(data => {
            questions = data.results;
            startQuiz();
        });
});

function startQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    startButton.hidden = true;
    questionContainerElement.hidden = false;
    showQuestion();
}

function showQuestion() {
    startTimer();
    questionElement.innerText = decodeHTML(questions[currentQuestionIndex].question);
    const choices = [...questions[currentQuestionIndex].incorrect_answers, questions[currentQuestionIndex].correct_answer];
    choices.sort(() => Math.random() - 0.5); // Shuffle choices
    choiceContainerElement.innerHTML = '';
    choices.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = decodeHTML(answer);
        button.classList.add('choice');
        button.addEventListener('click', selectAnswer);
        choiceContainerElement.appendChild(button);
    });
}

function selectAnswer(e) {
    clearInterval(timer);
    const selectedButton = e.target;
    const correctAnswer = questions[currentQuestionIndex].correct_answer;
    if (selectedButton.innerText === correctAnswer) {
        selectedButton.classList.add('correct');
        score++;
    } else {
        selectedButton.classList.add('wrong');
    }
    Array.from(choiceContainerElement.children).forEach(button => {
        button.disabled = true;
    });
    nextButton.disabled = false;
    scoreElement.innerText = score;
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        nextButton.disabled = true;
        showQuestion();
    } else {
        endQuiz();
    }
});

function endQuiz() {
    questionContainerElement.innerHTML = '<h2>You finished the quiz!</h2>';
    startButton.innerText = 'Restart Quiz';
    startButton.hidden = false;
}

function startTimer() {
    let timeLeft = parseInt(timerElement.value);
    timerCountdownElement.innerText = `Time left: ${timeLeft}s`;
    timer = setInterval(() => {
        timeLeft--;
        timerCountdownElement.innerText = `Time left: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            timeUp();
        }
    }, 1000);
}

function timeUp() {
    Array.from(choiceContainerElement.children).forEach(button => {
        button.disabled = true;
    });
    nextButton.disabled = false;
    timerCountdownElement.innerText = 'Time is up!';
}

// Function to decode HTML special characters
function decodeHTML(html) {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
}
