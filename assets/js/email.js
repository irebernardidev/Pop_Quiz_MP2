/* global emailjs */
// tutorial used [Medium- Jeffrey Martinez](https://martinezjf2.medium.com/how-to-setup-emailjs-33809350f0f8) - setting up EmailJS.
// Initialize EmailJS with your user ID
emailjs.init('zn6LDYixJTe5o00_B');

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Send the main contact message to the intended recipient
    emailjs.sendForm('service_opj28eh', 'contact_form', this, 'zn6LDYixJTe5o00_B')
        .then(() => {
            console.log('Email successfully sent to recipient!');
            // Auto-reply to the user
            sendAutoReply();
        }, (error) => {
            console.log('There has been an error sending to recipient: ', error);
            alert('There was an error sending your email.');
        });
});

function sendAutoReply() {
    const userEmail = document.getElementById('email').value;
    const userName = document.getElementById('name').value;

    // Create the auto-reply data including the user's name
    const autoReplyData = {
        user_email: userEmail,
        user_name: userName,  
        subject: "Thank you for contacting us!",
        message: `Hello ${userName}! Thank you for reaching out to us. We've received your message and will get back to you shortly.`
    };

    // Use the 'auto_reply_template' for sending the auto-reply
    emailjs.send('service_opj28eh', 'template_jmmhph8', autoReplyData, 'zn6LDYixJTe5o00_B')
        .then(() => {
            console.log('Auto-reply successfully sent!');
            alert('Email successfully sent!');
            // Clear the input fields
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
        }, (error) => {
            console.log('There has been an error sending auto-reply: ', error);
            alert('There was an error sending the auto-reply email.');
        });
}
