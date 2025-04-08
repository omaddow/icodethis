// Toggle Password Visibility
const togglePassword = document.querySelector('.toggle-password');
const passwordInput = document.querySelector('#password');
const eyeIcon = togglePassword.querySelector('i');

togglePassword.addEventListener('click', function() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    eyeIcon.classList.toggle('fa-eye');
    eyeIcon.classList.toggle('fa-eye-slash');
});

// Password Strength Meter
const strengthText = document.querySelector('.strength-text');
const strengthBar = document.querySelector('.strength-bar');

passwordInput.addEventListener('input', function() {
    const password = passwordInput.value;
    let strength = 0;

    // Check length
    if (password.length >= 8) strength += 1;
    if (password.length >= 12) strength += 1;

    // Check for numbers, lowercase, uppercase, and special characters
    if (/[a-z]/.test(password)) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/\d/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;

    // Update strength bar and text based on strength
    switch (strength) {
        case 0:
        case 1:
            strengthBar.style.width = '20%';
            strengthText.textContent = 'Weak';
            strengthBar.style.backgroundColor = 'red';
            break;
        case 2:
            strengthBar.style.width = '40%';
            strengthText.textContent = 'Fair';
            strengthBar.style.backgroundColor = 'orange';
            break;
        case 3:
            strengthBar.style.width = '60%';
            strengthText.textContent = 'Good';
            strengthBar.style.backgroundColor = 'yellow';
            break;
        case 4:
            strengthBar.style.width = '80%';
            strengthText.textContent = 'Strong';
            strengthBar.style.backgroundColor = 'lightgreen';
            break;
        case 5:
            strengthBar.style.width = '100%';
            strengthText.textContent = 'Very Strong';
            strengthBar.style.backgroundColor = 'green';
            break;
    }
});

