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
const progressBar = document.getElementById('progress-bar');
const questionsLeftElement = document.getElementById('questions-left');

const categoryElement = document.getElementById('category');
const difficultyElement = document.getElementById('difficulty');
const timerElement = document.getElementById('timer');
const questionsElement = document.getElementById('questions');
const startButton = document.getElementById('start-btn');

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
    fetch(`https://opentdb.com/api.php?amount=${questionsElement.value}&category=${categoryElement.value}&difficulty=${difficultyElement.value}&type=multiple`)
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
    nextButton.hidden = false;
    questionContainerElement.hidden = false;
    showQuestion();
}


function showQuestion() {
    startTimer();
    questionElement.innerText = decodeHTML(questions[currentQuestionIndex].question);
    const choices = [...questions[currentQuestionIndex].incorrect_answers, questions[currentQuestionIndex].correct_answer];
    choices.sort(() => Math.random() - 0.5);
    choiceContainerElement.innerHTML = '';
    choices.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = decodeHTML(answer);
        button.classList.add('choice');
        button.addEventListener('click', selectAnswer);
        choiceContainerElement.appendChild(button);
    });
    questionsLeftElement.innerText = `Questions left: ${questions.length - currentQuestionIndex}`;
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
    const results = document.createElement('div');
    const percentageScore = (score / questionsElement.value) * 100;

    let message;
    if (percentageScore === 100) {
        message = "Incredible! You've answered every question correctly.";
    } else if (percentageScore >= 75) {
        message = "Well done! You've scored highly.";
    } else if (percentageScore >= 50) {
        message = "Good job! You've got more than half the answers right.";
    } else if (percentageScore >= 25) {
        message = "Don't worry, keep practicing!";
    } else {
        message = "Tough quiz, better luck next time!";
    }

    results.innerHTML = `
        <h2>You finished the quiz!</h2>
        <p>Your score: ${score} out of ${questionsElement.value}</p>
        <p>${percentageScore.toFixed(2)}% correct</p>
        <p>${message}</p>
    `;

    questionContainerElement.innerHTML = '';
    questionContainerElement.appendChild(results);
    startButton.innerText = 'Restart Quiz';
    startButton.hidden = false;

    startButton.addEventListener('click', function() {
        location.reload();
    });

    let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    const playerName = prompt("Enter your name for the leaderboard:");
    leaderboard.push({
        name: playerName,
        score: score,
        date: new Date()
    });
    leaderboard.sort((a, b) => b.score - a.score);
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));

    // Redirect to leaderboard
    window.location.href = "leaderboard.html";
}

function startTimer() {
    let timeLeft = parseInt(timerElement.value);
    timerCountdownElement.innerText = `Time left: ${timeLeft}s`;
    progressBar.style.width = '100%';
    timer = setInterval(() => {
        timeLeft--;
        timerCountdownElement.innerText = `Time left: ${timeLeft}s`;
        progressBar.style.width = `${(timeLeft / parseInt(timerElement.value)) * 100}%`;
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

function decodeHTML(html) {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
}
