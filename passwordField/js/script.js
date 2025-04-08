// Toggle Password Visibility
// Selecting the toggle password button, the password input field, and the eye icon inside the toggle button
const togglePassword = document.querySelector('.toggle-password');
const passwordInput = document.querySelector('#password');
const eyeIcon = togglePassword.querySelector('i');

// Adding an event listener to the toggle button for a click event
togglePassword.addEventListener('click', function() {
    // Check the current type of the password field. If it's 'password', change it to 'text' (to show password).
    // If it's already 'text', change it back to 'password' (to hide the password).
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    // Toggle the eye icon class between 'fa-eye' (eye open) and 'fa-eye-slash' (eye closed) to indicate visibility change
    eyeIcon.classList.toggle('fa-eye');
    eyeIcon.classList.toggle('fa-eye-slash');
});

// Password Strength Meter
// Selecting the elements that display password strength text and the strength meter (bar)
const strengthText = document.querySelector('.strength-text');
const strengthBar = document.querySelector('.strength-bar');

// Adding an event listener to the password input field to track user input
passwordInput.addEventListener('input', function() {
    // Get the current value (password entered by the user)
    const password = passwordInput.value;
    
    // Variable to track the strength of the password (starts at 0)
    let strength = 0;

    // Check the password length and increment strength score if it meets certain criteria
    if (password.length >= 8) strength += 1;  // Password is at least 8 characters
    if (password.length >= 12) strength += 1; // Password is at least 12 characters

    // Check for the presence of lowercase letters, uppercase letters, digits, and special characters in the password
    if (/[a-z]/.test(password)) strength += 1;  // Contains at least one lowercase letter
    if (/[A-Z]/.test(password)) strength += 1;  // Contains at least one uppercase letter
    if (/\d/.test(password)) strength += 1;     // Contains at least one digit
    if (/[^A-Za-z0-9]/.test(password)) strength += 1; // Contains at least one special character

    // Update the strength bar and strength text based on the password's strength score
    switch (strength) {
        case 0:
        case 1:
            // For weak passwords, set bar to 20%, text to "Weak", and background to red
            strengthBar.style.width = '20%';
            strengthText.textContent = 'Weak';
            strengthBar.style.backgroundColor = 'red';
            break;
        case 2:
            // For fair passwords, set bar to 40%, text to "Fair", and background to orange
            strengthBar.style.width = '40%';
            strengthText.textContent = 'Fair';
            strengthBar.style.backgroundColor = 'orange';
            break;
        case 3:
            // For good passwords, set bar to 60%, text to "Good", and background to yellow
            strengthBar.style.width = '60%';
            strengthText.textContent = 'Good';
            strengthBar.style.backgroundColor = 'yellow';
            break;
        case 4:
            // For strong passwords, set bar to 80%, text to "Strong", and background to light green
            strengthBar.style.width = '80%';
            strengthText.textContent = 'Strong';
            strengthBar.style.backgroundColor = 'lightgreen';
            break;
        case 5:
            // For very strong passwords, set bar to 100%, text to "Very Strong", and background to green
            strengthBar.style.width = '100%';
            strengthText.textContent = 'Very Strong';
            strengthBar.style.backgroundColor = 'green';
            break;
    }
});
