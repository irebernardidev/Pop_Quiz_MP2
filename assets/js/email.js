// Initialize EmailJS with your user ID
emailjs.init('zn6LDYixJTe5o00_B'); 

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Send email via EmailJS
  emailjs.sendForm('service_opj28eh', 'contact_form', this, 'zn6LDYixJTe5o00_B') 
    .then(function() {
      console.log('Email successfully sent!');
      alert('Email successfully sent!');
   // Clear the input fields
   document.getElementById('name').value = '';
   document.getElementById('email').value = '';
   document.getElementById('message').value = '';
 }, function(error) {
   console.log('There has been an error: ', error);
   alert('There was an error sending your email.');
 });
});