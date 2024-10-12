document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous messages
    clearMessages();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate fields
    if (!validateForm(name, email, message)) return;

    // Send Email using EmailJS (you need to configure your EmailJS account)
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_name: name,
        from_email: email,
        message: message
    })
    .then(function(response) {
        displaySuccessMessage("Your message has been sent successfully!");
    }, function(error) {
        displayErrorMessage("There was an error sending your message. Please try again.");
    });

    // Clear the form
    document.getElementById('contactForm').reset();
});

function validateForm(name, email, message) {
    let isValid = true;

    if (name === "") {
        showError('name-error', "Name is required.");
        isValid = false;
    }

    if (email === "") {
        showError('email-error', "Email is required.");
        isValid = false;
    } else if (!validateEmail(email)) {
        showError('email-error', "Please enter a valid email address.");
        isValid = false;
    }

    if (message === "") {
        showError('message-error', "Message is required.");
        isValid = false;
    }

    return isValid;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = "block";
}

function clearMessages() {
    document.querySelectorAll('.error-message').forEach(function(el) {
        el.style.display = "none";
    });
    document.getElementById('success-message').style.display = "none";
}

function displaySuccessMessage(message) {
    const successMessage = document.getElementById('success-message');
    successMessage.textContent = message;
    successMessage.style.display = "block";
}

function displayErrorMessage(message) {
    const errorMessage = document.getElementById('success-message');
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
    errorMessage.style.color = "red";
}

