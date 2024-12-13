// JavaScript for Sign In Form

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const signInButton = document.querySelector('.sign-in-button');
    const forgotPasswordLink = document.querySelector('.forgot-password');
    const successMessage = document.createElement('div');
    const errorMessage = document.createElement('div');
  
    // Function to show a success message
    function showSuccessMessage(message) {
      successMessage.textContent = message;
      successMessage.style.color = 'green';
      form.appendChild(successMessage);
    }
  
    // Function to show an error message
    function showErrorMessage(message) {
      errorMessage.textContent = message;
      errorMessage.style.color = 'red';
      form.appendChild(errorMessage);
    }
  
    // Function to simulate form submission (replace with your actual logic)
    function simulateFormSubmission(event) {
      event.preventDefault();
  
      // Show loading state on the button
      signInButton.textContent = 'Signing In...';
      signInButton.disabled = true;
  
      // Basic validation
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
  
      if (!email || !password) {
        showErrorMessage('Both email and password are required.');
        signInButton.textContent = 'Sign In';
        signInButton.disabled = false;
        return;
      }
  
      // Simulating form submission with a delay (replace this with actual server interaction)
      setTimeout(() => {
        if (email === 'test@example.com' && password === 'password123') {
          // Simulate successful login
          showSuccessMessage('Successfully signed in! Redirecting...');
          // Redirect after a short delay
          setTimeout(() => {
            window.location.href = 'dashboard.html'; // Replace with your actual URL
          }, 2000);
        } else {
          // Simulate failure
          showErrorMessage('Invalid email or password.');
          signInButton.textContent = 'Sign In';
          signInButton.disabled = false;
        }
      }, 2000);
    }
  
    // Attach form submit event
    form.addEventListener('submit', simulateFormSubmission);
  
    // Optional: Add event listener for 'forgot password' link if you want to handle it via JavaScript
    forgotPasswordLink.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Redirecting to Forgot Password Page...');
      window.location.href = 'forgot-password.html'; // Replace with actual URL
    });
  });  