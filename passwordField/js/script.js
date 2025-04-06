// Toggle Password Visibility
const togglePassword = document.querySelector('.toggle-password');
const passwordInput = document.querySelector('#password');

togglePassword.addEventListener('click', function() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.textContent = type === 'password' ? '👁️' : '👁️‍🗨️';
});

// Password Strength Checker
passwordInput.addEventListener('input', function() {
    const strengthMeter = document.querySelector('.strength-meter');
    const strengthText = document.querySelector('.strength-text');
    const password = this.value;
    let strength = 0;
    
    // Check for length
    if (password.length >= 8) strength += 1;
    // Check for uppercase
    if (/[A-Z]/.test(password)) strength += 1;
    // Check for numbers
    if (/[0-9]/.test(password)) strength += 1;
    // Check for special chars
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    
    // Update UI
    const width = strength * 25;
    let color = '#ff4d4d'; // Weak (red)
    let text = 'Weak';
    
    if (strength >= 3) {
        color = '#ffcc00'; // Medium (yellow)
        text = 'Medium';
    }
    if (strength >= 4) {
        color = '#4CAF50'; // Strong (green)
        text = 'Strong';
    }
    
    strengthMeter.style.setProperty('--strength-color', color);
    strengthMeter.querySelector('::after').style.width = `${width}%`;
    strengthText.textContent = text;
    strengthText.style.color = color;
});