function sendMessage() {
    var name = document.getElementById('contact-name').value;
    if (!/^[A-Za-z\s]+$/.test(name)) {
        alert('Name should only contain letters.');
        return; // Stop the function if validation fails
    }

    var email = document.getElementById('contact-email').value;
    if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Please enter a valid email address.');
        return; // Stop the function if validation fails
    }

    var message = document.getElementById('message').value;
    if (!message.trim()) {
        alert('Please enter your message.');
        return; // Stop the function if validation fails
    }

    // If all validations pass, continue with form submission logic
    var form = document.getElementById('contact-form');
    var contactInfo = document.querySelector('.contact-info'); 
    var confirmationMessage = document.getElementById('contact-confirmation');
    var confirmationTick = document.getElementById('contact-confirmation-tick');
    var confirmationText = document.getElementById('contact-confirmation-text');

    // Assuming form submission logic is correct
    form.style.display = 'none';
    contactInfo.style.display = 'none';
    confirmationText.textContent = "Your message has been sent!";
    confirmationTick.style.display = "block";
    confirmationMessage.style.display = 'block';
    confirmationMessage.style.visibility = 'visible';
    confirmationMessage.style.opacity = '1';
    confirmationMessage.style.pointerEvents = 'auto';
    confirmationMessage.style.zIndex = '999';
}
