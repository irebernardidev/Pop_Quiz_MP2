# Quiz Pro Quo
![Quiz Pro Quo]()
Find the final project here: [Quiz Pro Quo]()

## Table of Contents
- [Introduction](#introduction)
- [UX](#ux)
   * [User Stories](#user-stories)
- [Design](#design)
  * [Colour Scheme](#colour-scheme)
  * [Typography](#typography)
  * [Imagery](#imagery)
  * [Wireframes](#wireframes)
  * [Features](#features)
    * [Existing Features](#existing-features)
    * [Features to Implement in the Future](#features-to-implement-in-the-future)
  * [Accessibility](#accessibility)  
- [Issues and Bugs](#issues-and-bugs)
- [Technologies Used](#technologies-used)
  * [Main Languages Used](#main-languages-used)
  * [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)
- [Testing](#testing)
  * [TESTING.md](#TESTING.md)
- [Deployment](#deployment)
  * [Deploying on GitHub Pages](#deploying-on-github-pages)
  * [Cloning the repository](#cloning-the-repository)
  * [Forking the repository](#forking-the-repository)
- [Credits](#credits)
  * [Content](#content)
  * [Media](#media)
  * [Code](#code)
- [Acknowledgements](#acknowledgements)

## Introduction
Welcome to the Quiz Pro Quo repository! Dive into an interactive quiz experience that tests your knowledge on pop culture, from trending music hits to iconic movies throughout the decades. Built with the pillars of web development - HTML, CSS, and JavaScript - this project offers a seamless and engaging quiz interface fit for both casual pub goers and trivia enthusiasts alike.
Whether you're looking to host a fun evening with friends, or simply challenge your own knowledge on pop culture, the Pop Pub Quiz is the perfect web-based trivia game for you. Dive in, have fun, and may the best pop culture aficionado win!

This website was made for the second of four Milestone projects required to complete the Diploma in Software development program at The Code Institute.
## User Experience
### User Stories

#### First Time Visitor Goals
- When I land on the Quiz Pro Quo homepage, I want to take part in a trivia quiz online and improve my general knowledge. I want to be able to play at any time, anywhere.
- I want the site to be responsive to my device.
- I want the site to be easy to navigate.

#### Returning Visitor Goals
- I want to be able to choose a level of difficulty that I feel is appropriate for me, based on my experience from my first visit to the site.

#### Frequent User Goals
- I want to be able to adjust the difficulty level to keep improving my knowledge.
- I want to be able to log my high scores to see how I am performing.

# Design
Quiz Pro Quo is designed to be visually engaging, intuitive, and user-friendly, ensuring a seamless and immersive gaming experience. The design is centered around an aesthetic that's appealing and enjoyable, while also aiding the functionality of the quiz game.
The following design elements were used in the website:

- ## Colour Scheme
The color scheme adopted for this application provides a balance between attractiveness and functionality.

- Primary Color (#a881af): This muted purple tone is used extensively throughout the application to provide a calming effect and to maintain a consistent visual identity. It is used in areas such as headers, footers, buttons, and borders.

- Accent Color (#5adbb5): This light teal color is utilized for accenting and highlighting certain elements of the UI such as button hover effects and correct choices, providing a lively contrast to the primary color.

- Background Color (rgba(255, 255, 255, 0.5)): A slightly transparent white is used as the background color for containers, ensuring readability while maintaining a light and airy aesthetic.

- Error Color (#FFCDD2): A soft red color is utilized to signify incorrect choices, offering an intuitive visual cue to the user.

- Success Color (#C8E6C9): A light green color is used to indicate correct answers, signaling success in an intuitive manner.

## Colour Palette
Using the [Adobe Color](https://color.adobe.com/create/color-wheel) colour wheel

![Colour Palette](documentation/features/colour-palette.png)

- ## Typography

• Primary Font: [Roboto](https://fonts.google.com/specimen/Roboto) - The Roboto font is used for all text on the website. This font has been chosen for its readability and modern look.
![Typography](documentation/features/roboto-400.png)
![Typography](documentation/features/roboto-700.png)

• Secondary Font: [Font Awesome](https://fontawesome.com/) - Font Awesome icons are used throughout the website to enhance the user interface.

- ## Imagery
The Quiz Pro Quo website primarily relies on a text-based interface to create a distraction-free quiz environment. However, some key images and icons are used:
  * Logo: The Quiz Pro Quo logo from [Flaming Text](https://flamingtext.com/) is displayed prominently on the top of each page. It has been designed to reflect the fun and exciting nature of the quizzes.

  * Icons: [Font Awesome](https://fontawesome.com/) icons are used to visually communicate functions like social media links and volume control. They are displayed in the website's primary color for consistency.

  * [Favicon](https://www.favicon.cc/): A unique favicon is provided that is representative of the brand identity. It's visible in the browser tab for easy site identification.

## Wireframes
Wireframes were created for mobile, tablet and desktop using [Balsamiq](https://balsamiq.com/).

[Wireframes](documentation/wireframes)


# Features
## Existing Features

The website is comprised of a home page, a games page, a leaderboard page, a contact form page a 404 error page & a 500 error page.

All Pages on the website are responsive and have:
- A [favicon](https://www.favicon.cc/) in the browser tab.
![Favicon](documentation/features/browser-favicon.png)

- The title of the site at the top of every page. This title also acts as a link back to the home page.
![Ttle](documentation/features/title.png)
## Social Media Icons
Appearing on every page, the icons are appropriate representations of the Social Media platforms, linking users to the various platforms. The icons appear in the centre of the footer. Please refer to [Social media links](#socialmedia-links)


### Contact Form
The Contact Form is located in the right column and is designed to allow users to get in touch with the wine bar easily. The form consists of the following input fields:

1. Name (required): A text input field for users to enter their name.
2. Email (required): An email input field for users to enter their email address. This field includes email validation to ensure a valid email address is provided.
3. Message (required): A textarea input field for users to enter their message.

Additionally, there is a submit button with the label "Send message". When the user clicks this button, the form is submitted, and a script (form-handler.js) processes the form submission. It checks for any validation errors and displays them to the user if necessary. If the form submission is successful, the user receives a response message.

This feature allows the Wine Time website to provide an interactive and user-friendly way for visitors to locate the wine bar and get in touch with any questions, comments, or reservations.

## Customer Review Section
The Customer Reviews section displays three reviews from customers who have visited the wine bar. Each review includes the customer's image, name, and a quote. This section helps to showcase positive feedback from satisfied customers.

![Screenshot of Customer Review Section](assets/readme-files/customers-reviews.png)

![Screenshot of Customer Review Section](assets/readme-files/customers-reviews-iPhone.png)

## Form Submission Success Page
The Form Submission Success Page is designed to provide feedback to users after they have successfully submitted the contact form on the Wine Time website. This page consists of the following elements:

1. Background Image: A full-screen background image (background-image.jpg) is displayed on this page. It serves as a visual backdrop for the content and adds aesthetic appeal.

2. Text Container: A container element holds the text and button. It is positioned over the background image and contains the following elements:

* Heading: A large heading (h2) with the text "Form Submission Successful" informs the user that their form submission was successful.

* Subheading: A subheading provides additional information to the user, stating, "Thank you for contacting us. We will get back to you shortly." This message reassures the user that their inquiry has been received and that they can expect a response from the Wine Time team.

* Back to Contact Page Button: A button is placed below the subheading. When clicked, it redirects the user back to the contact page. This button provides an easy way for users to return to the contact page if they wish to review their submission or submit another inquiry.

The Form Submission Success Page is designed with user experience in mind, as it provides clear feedback on the form submission's outcome and offers a seamless way to navigate back to the contact page. This page helps build trust and credibility with the user by promptly acknowledging their inquiry and assuring them of a timely response from the Wine Time team.

![Screenshot of Form Submission Success Page](assets/readme-files/successful.png)

![Screenshot of Form Submission Success Page](assets/readme-files/successful-iPhone.png)


## Write a Review Page
### Review Form
The review form allows users to submit a review about their experience at Wine Time. The form contains fields for the user's name, email address, and review text. Form validation is performed using custom JavaScript.

![Screenshot of Write a Review Page](assets/readme-files/review-form.png)

![Screenshot of Write a Review Page](assets/readme-files/review-form-iPhone.png)

### Background Image
The background image features an assortment of wine bottles, adding visual interest and reinforcing the theme of the website.

## Thank You Page
The Thank You page is displayed when a user submits a review. Its purpose is to acknowledge the user's input, express gratitude for their feedback, and provide an option to return to the home page.

![Screenshot of Thank You Page](assets/readme-files/return.png)

## Features to Implement in the future
- Additional features that could be added to the website in the future include:
   * Give users the option to select the amount of questions in their quiz.
   * Look into making the quiz a multiplayer game, so that it could be played by teams, which would make the quiz even more like a pub quiz.
   * Create a back end database to enable me to store scores which would then allow you to see how you scored against other players.
   * Look further into the accessibility for people with colour blindness, perhaps by adding symbols such as a tick or cross next to the answer when they are checked.

[Back to top](#)


## Issues and Bugs
The developer ran into several issues during the development of the website, with the noteworthy ones listed below:


## Technologies Used

The following technologies were used in the development of the website:

### Main Languages Used
- HTML5
- CSS3
- JS 

### Frameworks, Libraries & Programs Used
- [Bootstrap 5.3.0](https://getbootstrap.com/) was used multiple times during the development of the project.
- [Balsamiq](https://balsamiq.com/) was used to create the wireframes during the design phase of the project.
- [GitHub](https://github.com/) was used to store the project after pushing.
- [Google Fonts](https://fonts.google.com/) was used to import the fonts "Lobster", "Josefin Sans" and "Lato" into the style.css file. These fonts were used throughout the project.
- [Font Awesome 6.3.0](https://fontawesome.com/) was used on almost all pages throughout the website to import icons (e.g. social media icons) for UX purposes.
- [jQuery](https://jquery.com/) A JavaScript library.
- [Open Trivia DataBase](https://opentdb.com/) API used for the trivia questions.
- [Am I Responsive?](https://ui.dev/amiresponsive) was used in order to see responsive design throughout the process and to generate mockup imagery to be used.
- [Miro](https://miro.com/app/dashboard/) was used to create the [Site map](assets/wireframes/Site-map.jpg)
- [XConverter](https://www.xconvert.com/convert-mp4-to-gif) was used to compress and convert the mp4 videos to GIFs.
- [Tinypng](https://tinypng.com/) was used to compress the images.
- [Favicon](https://www.favicon.cc/) was used to create a favicon to help users quickly identify a website when multiple tabs are open or when searching through bookmarks.
- [Illustrator](https://www.adobe.com/products/illustrator.html) was used to create the [Logo image](asssets/images/bar-logo.png)
- [Visual Studio Code](https://code.visualstudio.com/download) was used to create files pages and produce the code for the project.
- [Google Chrome Dev Tools](https://developer.chrome.com/docs/devtools/) was used during the testing phase to test the responsiveness of the site and to check for any bugs.


# Testing
The website was tested thoroughly to ensure it is fully functional and user-friendly. The testing phase involved manual testing on different devices and browsers.

Testing information can be found in a separate testing [file](TESTING.md)

## Deployment
The website was deployed on GitHub pages.

### Deploying on GitHub Pages
To deploy the website on GitHub Pages, the following steps were followed:
1. Create a new repository on GitHub
2. Add the necessary files to the repository
3. Go to the settings page of the repository and scroll down to the GitHub Pages section
4. Select the main branch and the root folder, then click save
5. The website will now be live at the URL provided in the GitHub Pages section

### Cloning the repository
You can clone the repository by following these steps:
1. Go to the  repository on GitHub.
2. Click the "Code" button to the right of the screen, click HTTPs and copy the link there.
3. Open a GitBash terminal and navigate to the directory where you want to locate the clone.
4. On the command line, type "git clone" then paste in the copied url and press the Enter key to begin the clone process.

### Forking the repository
By forking the GitHub Repository, we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original owner's repository.
You can fork this repository by using the following steps:
1. Go to the repository on GitHub.
2. Click on the 'Fork' option towards the top left of the page.
3. Click the dropdown button and click 'create a new fork'.
4. This will bring up a page with details of the repository, fill in boxes as required.
Click 'create fork'.

## Credits
The website was built by the developer. The webpages use images from [Freepik](https://www.freepik.com/), [Pixabay](https://pixabay.com/) Activedia, crowd-1056764.jpg [Adobe Stock](https://www.stock.adobe.com/) and [Canva](https://www.canva.com/) free licence libreries, and icons from [Font Awesome](https://fontawesome.com/) and [Favicon](https://www.favicon.cc/).

### Content

- Some of the text used in the the various pages were borrowed and adapted from various sites, listed below.

  * 
  * 

### Media

- All images and videos were sourced from the various artists from [Adobe Stock](https://stock.adobe.com/uk/), [Freepik](https://www.freepik.com/) and [Pixabay](https://pixabay.com/videos/)background image by Activedia, crowd-1056764.jpg __free licenced__.


### Code

The developer consulted multiple sites in order to better understand the code they were trying to implement. For code that was copied and edited, the developer made sure to reference this with the code. The following sites were used on a more regular basis:

- [Stack Overflow](https://stackoverflow.com/)
- [W3Schools](https://www.w3schools.com/)
- [Geeks for Geeks](https://www.geeksforgeeks.org/)
- [Map -Google Maps API](https://developers.google.com/maps/documentation/javascript/adding-a-google-map#javascript)

[Back to top](#top)

## Acknowledgements

I would like to thank my tutor, Peter, and my mentor, Seun, for their invaluable help and guidance throughout the process.

[Back to top](#top)


 

 
