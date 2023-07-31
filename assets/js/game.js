// Initialize score, currentQuestionIndex and questions as variables
let score = 0;
let currentQuestionIndex = 0;
let questions = [];
let timer;

// Define HTML elements
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const choiceContainerElement = document.getElementById('choice-container');
const scoreElement = document.getElementById('score');
const nextButton = document.getElementById('next-btn');
const quitButton = document.getElementById('quit-btn');
const timerCountdownElement = document.getElementById('timer-countdown');
const progressBar = document.getElementById('progress-bar');
const questionsLeftElement = document.getElementById('questions-left');
const categoryElement = document.getElementById('category');
const difficultyElement = document.getElementById('difficulty');
const timerElement = document.getElementById('timer');
const questionsElement = document.getElementById('questions');
const startButton = document.getElementById('start-btn');
const correctSound = document.getElementById('correct-sound');
const wrongSound = document.getElementById('wrong-sound');
const congratsMusic = document.getElementById('congrats-music');
const muteButton = document.getElementById('mute-btn');
const settingsContainerElement = document.getElementById('settings-container');
// Define the play again and home buttons
const playAgainButton = document.querySelector(".btn-group a[href='game.html']"); 
const homeButton = document.querySelector(".btn-group a[href='index.html']"); 

muteButton.classList.add('pointer-cursor');

// Mute and Unmute audio functionality
let isMuted = false;

muteButton.addEventListener('click', () => {
  if (isMuted) {
    // If the audio is currently muted, unmute it
    correctSound.muted = false;
    wrongSound.muted = false;
    congratsMusic.muted = false;
    muteButton.classList.remove('fa-volume-mute');
    muteButton.classList.add('fa-volume-up');
  } else {
    // If the audio is currently playing, mute it
    correctSound.muted = true;
    wrongSound.muted = true;
    congratsMusic.muted = true;
    muteButton.classList.remove('fa-volume-up');
    muteButton.classList.add('fa-volume-mute');
  }
  // Flip the isMuted boolean to its opposite value
  isMuted = !isMuted;
});

// Fetch and populate categories from API
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

// Event listener for start button click
startButton.addEventListener('click', () => {
  // Fetch quiz questions from API based on user's choices of category, difficulty and number of questions
  fetch(`https://opentdb.com/api.php?amount=${questionsElement.value}&category=${categoryElement.value}&difficulty=${difficultyElement.value}&type=multiple`)
    .then(response => response.json())
    .then(data => {
      questions = data.results;
      settingsContainerElement.style.display = "none";  
      playAgainButton.style.pointerEvents = "none"; // Disable Play Again button  // NEW
      homeButton.style.pointerEvents = "none"; // Disable Home button  // NEW
      startQuiz(); // Start the quiz
    });
});

// Function to start the quiz
function startQuiz() {
  score = 0;
  currentQuestionIndex = 0;
  startButton.hidden = true;
  nextButton.hidden = false;
  quitButton.hidden = false;
  questionContainerElement.hidden = false;
  showQuestion(); // Show the first question
}

// Function to show a question
function showQuestion() {
  startTimer(); // Start the timer

  // Display the question
  questionElement.innerText = decodeHTML(questions[currentQuestionIndex].question);

  // Clear previous question's choices and create new ones
  choiceContainerElement.innerHTML = '';
  const choices = [...questions[currentQuestionIndex].incorrect_answers, questions[currentQuestionIndex].correct_answer];
  choices.sort(() => Math.random() - 0.5);
  choices.forEach(choice => {
    const button = document.createElement('button');
    button.innerText = decodeHTML(choice);
    button.classList.add('choice');
    button.addEventListener('click', selectAnswer);
    choiceContainerElement.appendChild(button);
  });

  // Display remaining questions count
  questionsLeftElement.innerText = `Questions left: ${questions.length - currentQuestionIndex}`;
}

// Function to handle the selection of an answer
function selectAnswer(e) {
  clearInterval(timer); // Stop the timer

  const selectedButton = e.target;
  const correctAnswer = questions[currentQuestionIndex].correct_answer;

  // Disable all buttons and remove event listeners
  selectedButton.removeEventListener('click', selectAnswer);
  Array.from(choiceContainerElement.children).forEach(button => {
    button.disabled = true;
  });
  
  // Update score and styles based on whether the answer was correct or incorrect
  if (selectedButton.innerText === correctAnswer) {
    selectedButton.classList.add('correct');
    score++;
    correctSound.play();
  } else {
    selectedButton.classList.add('wrong');
    Array.from(choiceContainerElement.children).forEach(button => {
      if (button.innerText === correctAnswer) {
        button.classList.add('correct');
      }
    });
    wrongSound.play();
  }

  // Enable the next button and update the score display
  nextButton.disabled = false;
  scoreElement.innerText = score;
}

// Event listener for next button click
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;

  // Check if there are more questions, if not end the quiz
  if (currentQuestionIndex < questions.length) {
    nextButton.disabled = true;
    showQuestion();
  } else {
    endQuiz();
  }
});

// Event listener for quit button click
quitButton.addEventListener('click', () => {
  let isConfirmed = confirm('Are you sure you want to exit the game?');
  if (isConfirmed) {
    window.location.href = 'index.html'; // Navigate to the home page
  }
});

// Function to end the quiz
function endQuiz() {
  const userName = prompt('Kudos, quiz conqueror! Leave your name for the leaderboard:');
  playAgainButton.style.pointerEvents = "auto"; // Enable Play Again button  
  homeButton.style.pointerEvents = "auto"; // Enable Home button  

  // Retrieve previous scores from local storage or initialize if it doesn't exist
  let scores = JSON.parse(localStorage.getItem('scores')) || [];

  // Add current score to scores
  scores.push({
    name: userName,
    score: score,
    time: getDateTime() // Get current date and time
  });
  // Store updated scores in local storage
  localStorage.setItem('scores', JSON.stringify(scores));

// Show the quiz results
  const results = document.createElement('div');
  const percentageScore = (score / parseInt(questionsElement.value, 10)) * 100;


  let message;
  if (percentageScore === 100) {
    message = "You're a trivia whiz! Perfect score!";
    const congratsElement = document.getElementById('congratulation');
    congratsElement.style.display = 'block';
    congratsElement.classList.add('congrats');
    congratsMusic.play();
  
  } else if (percentageScore >= 75) {
    message = "You're a trivia shark! Super high score!";
  } else if (percentageScore >= 50) {
    message = "Great hustle! You answered over half correctly!";
  } else if (percentageScore >= 25) {
    message = "Not too shabby, keep practicing and you'll get there!";
  } else {
    message = "That was a brain-buster, wasn't it? Try again next time!";
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

  startButton.addEventListener('click', function () {
    location.reload();
  });
// Redirect to leaderboard after 10 seconds
  setTimeout(() => {
    window.location.href = 'leaderboard.html';
  }, 10000);
}

// Function to start a timer
function startTimer() {
  let timeLeft = parseInt(timerElement.value);
  timerCountdownElement.innerText = `Time left: ${timeLeft}s`;

// Change progress bar color based on remainig time percentage
  progressBar.style.width = '100%';
  progressBar.style.backgroundColor = '#4CAF50'; // set color to green at the start

  timer = setInterval(() => {
    timeLeft--;
    timerCountdownElement.innerText = `Time left: ${timeLeft}s`;

    let percentageLeft = (timeLeft / parseInt(timerElement.value)) * 100;
    progressBar.style.width = `${percentageLeft}%`;

    if (percentageLeft <= 50 && percentageLeft > 20) {
      progressBar.style.backgroundColor = '#FFDD00'; // set color to yellow if 50% < percentageLeft <= 20%
    } else if (percentageLeft <= 20) {
      progressBar.style.backgroundColor = '#FF5722'; // set color to red if percentageLeft <= 20%
    }

    if (timeLeft <= 0) {
      clearInterval(timer);
      timeUp();
    }
  }, 1000);
}
// Function to handle when time is up
function timeUp() {
  Array.from(choiceContainerElement.children).forEach(button => {
    button.disabled = true;
    if (button.innerText === questions[currentQuestionIndex].correct_answer) {
      button.classList.add('correct');
    }
  });

  nextButton.disabled = false;
}

function getDateTime() {
  const date = new Date();
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
}
// Function to decode HTML entities
function decodeHTML(html) {
  var txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
}