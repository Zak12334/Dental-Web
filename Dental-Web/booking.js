function bookAppointment() {
    var name = document.getElementById('booking-name').value;
    var email = document.getElementById('booking-email').value;
    var dob = document.getElementById('dob').value;
    var ppsn = document.getElementById('ppsn').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;

    // First, check if all fields are filled
    if (!name || !email || !dob || !ppsn || !date || !time) {
        alert('Please fill in all fields to book an appointment.');
        return; // Stop the function if any field is empty
    }

    // Next, check for valid patterns in the individual fields
    if (!/^[A-Za-z\s]+$/.test(name)) {
        alert('Name should only contain letters.');
        return; // Stop the function if validation fails
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Please enter a valid email address.');
        return; // Stop the function if validation fails
    }

    if (!/\d{7}[A-Za-z]{1,2}/.test(ppsn)) {
        alert('Please enter a valid PPSN.');
        return; // Stop the function if validation fails
    }

    // If all validations pass, continue with form submission logic
    var form = document.getElementById('appointment-form');
    var confirmationMessage = document.getElementById('booking-confirmation');
    var confirmationTick = document.getElementById('confirmation-tick');
    var confirmationText = document.getElementById('confirmation-text');

    form.style.display = 'none';
    confirmationText.textContent = "Your booking is confirmed!";
    confirmationTick.style.display = "block";
    confirmationMessage.style.visibility = 'visible';
    confirmationMessage.style.opacity = '1';
    confirmationMessage.style.pointerEvents = 'auto';
    confirmationMessage.style.zIndex = '999';
}
