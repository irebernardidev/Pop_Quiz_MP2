# Quiz Pro Quo - Testing
![Quiz Pro Quo](documentation/features/am-i-responsive.png)
Find the final project here: [Quiz Pro Quo](https://irebernardidev.github.io/Quiz-Pro-Quo/)

## Contents

- [Automated Testing](#automated-testing)
  * [W3C Validator](#w3c-validator)
  * [Javascript Validator](#javascript-validator)
  * [Lighthouse](#lighthouse)
- [Manual Testing](#manual-testing)
  * [Testing User Stories](#testing-user-stories)
  * [Full Testing](#full-testing)

Throughout the entire development process, I extensively used Chrome Developer Tools for real-time testing and troubleshooting. I leveraged its console feature to ensure JavaScript code functionality and identify any issues.

To verify adaptability, I employed Google Chrome Developer Tools and Firefox's Inspector tool to check the responsiveness of each page across various devices and screen sizes. This rigorous approach ensured a seamless user experience on multiple platforms.

## Automated Testing

### W3C Validator
[W3C](https://validator.w3.org/) was used to validate the HTML on all pages of the website. It was also used to validate the CSS.

* [index.html](index.html) - Passed.
  ![index.html](TESTING/W3C/index-w3.png)

* [game.html](game.html) - Passed.
  ![game.html](TESTING/W3C/game-w3.png)

* [leaderboard.html](leaderboard.html) - Passed.
  ![leaderboard.html](TESTING/W3C/leaderboard-w3.png)

* [contact-form.html](contact-form.html) - Passed.
  ![contact-form.html](TESTING/W3C/contact-w3.png)

* [404.html](404.html) - Passed.
 ![404.html](TESTING/W3C/404-w3.png)

* [500.html](500.html) - Passed.
  ![500.html](TESTING/W3C/500-w3.png)

* [style.css](assets/css/style.css) - Passed, no errors found.
  ![style.css](TESTING/W3C/style.css.png)

### JavaScript Validator
[jshint](https://jshint.com/) was used to validate the JavaScript.

* [script.js](assets/js/script.js) - Passed.
  ![script.js](TESTING/jshint/script-jshint.png)

* [game.js](assets/js/game.js) - Passed.
  ![game.js](TESTING/jshint/game-jshint.png)

* [leaderboards.js](assets/js/leaderboard.js) - Passed.
  ![leaderboard.js](TESTING/jshint/leaderboard-jshint.png)

* [email.js](assets/js/email.js) - Passed.
  ![email.js](TESTING/jshint/email-jshint.png)

### Lighthouse
I utilized Chrome's Lighthouse tool to evaluate the website's performance, accessibility, adherence to best practices, and SEO optimization.

### Desktop Results
Every page scores a perfect 100 in the final two categories. Meanwhile, three pages boast scores exceeding 90 in the performance category.
* [Home Page](TESTING/Lighthouse/home-desk.png)
* [Game Page](TESTING/Lighthouse/game-desk.png)
* [Leaderboard Page](TESTING/Lighthouse/leaderboard-desk.png)
* [Contact Page](TESTING/Lighthouse/contact-form-desk.png)

### Mobile Results
Every page scores a perfect 100 in the final two categories. Meanwhile, three pages boast scores exceeding 90 in the performance category.
* [Home Page](TESTING/Lighthouse/home-mob.png)
* [Game Page](TESTING/Lighthouse/game-mob.png)
* [Leaderboard Page](TESTING/Lighthouse/leaderboard-mob.png)
* [Contact Page](TESTING/Lighthouse/contact-form-mob.png)

## Manual Testing

### Testing User Stories
<mark>First Time Visitors</mark>

| Goals   | How are they achieved?  |
|------------|------------|
| When I land on the Quiz Pro Quo homepage, I want to take part in a trivia quiz online and improve my general knowledge. I want to be able to play at any time, anywhere.   | Quiz Pro Quo sources general knowledge quiz questions from a broad spectrum of topics, akin to what a quiz app would offer. The platform is accessible for users at any time that suits their convenience.  |
| I want the site to be responsive to my device.    | I have developed the site with responsiveness in mind.  |
| I want the site to be easy to navigate.    | Buttons are used throughout the site for navigation, much like a mobile app. As the site is like a mobile app - Buttons are prevalent across the site, providing an experience akin to a mobile app. In aiming for an app-like feel, I opted against making it resemble a conventional webpage. Additionally, the page title serves as a link to the home page.   |

<mark>Returning Visitors</mark>

| Goals   | How are they achieved?  |
|------------|------------|
| I want to be able to choose a level of difficulty that I feel is appropriate for me, based on my experience from my first visit to the site.   | Users can choose their preferred level of difficulty and timer length, as well as the topic before starting the game. After completing a round, they have the flexibility to select a different level of difficulty, timer duration, or topic for their subsequent games.  |

<mark>Frequent Visitors</mark>

| Goals   | How are they achieved?  |
|------------|------------|
| I want to be able to adjust the difficulty level to keep improving my knowledge.   | Before starting the game, users can choose their desired level of difficulty. After completing a round, they have the option to adjust the difficulty for future games.  |
| I want to be able to log my high scores to see how I am performing.    | Users can record their top scores on the leaderboard page, which also showcases the scores of other players.  |

### Full Testing
Full testing was performed on the following devices:

* Laptop:
  * MacBook Air (13-inch, 2017)
* Mobile Devices:
  * iPhone 14 pro.
  * iPhone 13 pro.
  * iPhone 8.

Each device tested the site using the following browsers:
* Google Chrome
* Safari
* Firefox
* Edge
* Opera

Friends and family conducted further testing across various devices and screen sizes, and they encountered no issues during gameplay.

<mark>Home Page</mark>
| Feature | Expected Outcome | Testing Performed      | Result | Pass/Fail      |
|---------|-----------|------------|--------|--------------|
| The Sites title     | Link directs the user back to the home page   | Clicked title| 	Home page reloads  | Pass    |
| Game Rules button    | Displays the modal with the instructions on how to play the game   | Clicked on button| Modal with instructions on how to play opens  | Pass  |
| Modal close button    | Closes the modal |	Clicked on close button	| Modal closed |	Pass |
| Play Button	| Directs the user to the game page |	Clicked on button |	Game page opens to display the difficulty selections |	Pass          |
| Leaderboard button    | Directs the user to Leaderboard page   | Clicked on button | Directs to the Leaderboard page   | Pass   |
| All buttons - hover effect   | All light purple buttons with white text and teal color border should change to light teal with white text and purple color border when hovered over.   | Hover over each button on the page | Each button displayed the correct styling when hovered over  | Pass  |
| Reach Out button     | Directs the user to the Contact page, the page opens in a new tab    | Clicked on button | Contact page opens in separate tab | Pass |

<mark>Game Page - Difficulty, Topic, Time Selection</mark>
| Feature | Expected Outcome | Testing Performed      | Result | Pass/Fail      |
|---------|-----------|------------|--------|--------------|
| 001     | Test A    | 2023-08-08 | Pass   | No issues    |
| 002     | Test B    | 2023-08-09 | Fail   | Some issues  |
| 003     | Test C    | 2023-08-10 | Pass   | Minor issues |
| ...     | ...       | ...        | ...    | ...          |



<mark>Game Page - Quiz Area</mark>
| Feature | Expected Outcome | Testing Performed      | Result | Pass/Fail      |
|---------|-----------|------------|--------|--------------|
| 001     | Test A    | 2023-08-08 | Pass   | No issues    |
| 002     | Test B    | 2023-08-09 | Fail   | Some issues  |
| 003     | Test C    | 2023-08-10 | Pass   | Minor issues |
| ...     | ...       | ...        | ...    | ...          |



<mark>Game Page - End of Quiz</mark>
| Feature | Expected Outcome | Testing Performed      | Result | Pass/Fail      |
|---------|-----------|------------|--------|--------------|
| 001     | Test A    | 2023-08-08 | Pass   | No issues    |
| 002     | Test B    | 2023-08-09 | Fail   | Some issues  |
| 003     | Test C    | 2023-08-10 | Pass   | Minor issues |
| ...     | ...       | ...        | ...    | ...          |


<mark>404 Error Page</mark>
| Feature | Expected Outcome | Testing Performed      | Result | Pass/Fail      |
|---------|-----------|------------|--------|--------------|
| 001     | Test A    | 2023-08-08 | Pass   | No issues    |
| 002     | Test B    | 2023-08-09 | Fail   | Some issues  |
| 003     | Test C    | 2023-08-10 | Pass   | Minor issues |
| ...     | ...       | ...        | ...    | ...          |


<mark>500 Error Page</mark>
| Feature | Expected Outcome | Testing Performed      | Result | Pass/Fail      |
|---------|-----------|------------|--------|--------------|
| 001     | Test A    | 2023-08-08 | Pass   | No issues    |
| 002     | Test B    | 2023-08-09 | Fail   | Some issues  |
| 003     | Test C    | 2023-08-10 | Pass   | Minor issues |
| ...     | ...       | ...        | ...    | ...          |
