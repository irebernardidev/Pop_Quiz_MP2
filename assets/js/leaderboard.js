// Get the leaderboard list and back button
const leaderboardList = document.getElementById('leaderboard-list');
const backButton = document.getElementById('play-again');

function displayLeaderboard() {
  leaderboardList.innerHTML = '';

  let leaderboard = JSON.parse(localStorage.getItem('scores')) || [];

  leaderboard.sort((a, b) => b.score - a.score || new Date(a.time) - new Date(b.time));

  leaderboard.forEach((entry, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${index + 1}. ${entry.name} - ${entry.score} (on ${entry.time})`;
    leaderboardList.appendChild(li);
  });

  backButton.addEventListener('click', playAgain);
}

displayLeaderboard();

function playAgain() {
  // Redirect to the game page
  window.location.href = 'index.html';
}