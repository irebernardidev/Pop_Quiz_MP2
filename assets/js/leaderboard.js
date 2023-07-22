// Get the leaderboard list and back button
const leaderboardList = document.getElementById('leaderboard-list');
const backButton = document.getElementById('back-to-game');

// Display leaderboard immediately when the page loads
displayLeaderboard();

// Set up event listener for back button
backButton.addEventListener('click', backToGame);

function displayLeaderboard() {
  leaderboardList.innerHTML = ''; // Clear the leaderboard list

  // Get the leaderboard from localStorage or initialize as an empty array if not found
  const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
  leaderboard.sort((a, b) => b.score - a.score); // Sort scores in descending order
  
  // Append each leaderboard entry to the leaderboard list
  leaderboard.forEach((entry, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${index + 1}. ${entry.name} - ${entry.score}`;
    leaderboardList.appendChild(li);
  });
}

function backToGame() {
  // Redirect to the game page
  window.location.href = 'index.html';
}
