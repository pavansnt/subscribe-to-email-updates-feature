document.getElementById("subscribeForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the email input value
    var emailInput = document.getElementById("email");
    var email = emailInput.value;

    // Check if the email is valid (you may want to use a more sophisticated validation)
    if (isValidEmail(email)) {
        // Save the email to local storage
        saveEmail(email);

        // Display confirmation message
        document.getElementById("confirmationMessage").innerText = "Subscription successful! Thank you!";
        
        // Clear the email input
        emailInput.value = "";
    } else {
        // Display error message for invalid email
        document.getElementById("confirmationMessage").innerText = "Please enter a valid email address.";
    }
});

// Function to validate email format (simple validation)
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to save email to local storage
function saveEmail(email) {
    // Get the existing emails from local storage
    var existingEmails = JSON.parse(localStorage.getItem("subscribedEmails")) || [];

    // Check if the email is not already in the list
    if (!existingEmails.includes(email)) {
        // Add the new email to the list
        existingEmails.push(email);

        // Save the updated list to local storage
        localStorage.setItem("subscribedEmails", JSON.stringify(existingEmails));
    }
}
