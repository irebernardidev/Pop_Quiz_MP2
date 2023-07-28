// MODAL
// Modal created using tutorial - https://www.youtube.com/watch?v=XH5OW46yO8I

const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");
const modalContainer = document.getElementById("modal-container");

// Open Modal
openModal.addEventListener("click", () => {
  modalContainer.classList.add("show");
});

// Close Modal
closeModal.addEventListener("click", () => {
  modalContainer.classList.remove("show");
});

var modal = document.getElementById("modal-container");
var mainContainer = document.getElementById("outer-container");

document.getElementById("open-modal").addEventListener("click", function() {
    modal.classList.add('show');
    mainContainer.classList.add('blur-effect');
});

document.getElementById("close-modal").addEventListener("click", function() {
    modal.classList.remove('show');
    mainContainer.classList.remove('blur-effect');
});

// Initialize EmailJS with your user ID
emailjs.init('zn6LDYixJTe5o00_B'); 

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Send email via EmailJS
  emailjs.sendForm('service_opj28eh', 'contact_form', this, 'zn6LDYixJTe5o00_B') 
    .then(function() {
      console.log('Email successfully sent!');
      alert('Email successfully sent!');
    }, function(error) {
      console.log('There has been an error: ', error);
      alert('There was an error sending your email.');
    });
});