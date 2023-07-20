// Load leaderboard from local storage
let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];

// Sort the leaderboard by score
leaderboard.sort((a, b) => b.score - a.score);

// Display leaderboard
const leaderboardList = document.getElementById('leaderboard-list');
leaderboardList.innerHTML = ''; // Clear the leaderboard
leaderboard.forEach(entry => {
    const listItem = document.createElement('li');
    listItem.innerText = `${entry.name}: ${entry.score} points (${new Date(entry.date).toLocaleDateString()})`;
    leaderboardList.appendChild(listItem);
});
// Add event listener to Back to Game button
const backToGameButton = document.getElementById('back-to-game');
backToGameButton.addEventListener('click', function() {
    window.location.href = "index.html";  // assuming your game page is "index.html"
});