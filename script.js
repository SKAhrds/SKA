// DOM Elements
const loginScreen = document.getElementById('login-screen');
const dashboard = document.getElementById('dashboard');
const loginForm = document.getElementById('login-form');
const biometricLogin = document.getElementById('biometric-login');
const clockInButton = document.getElementById('clock-in');
const clockOutButton = document.getElementById('clock-out');
const logoutBtn = document.getElementById('logout-btn');

// Show Dashboard on Login
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  loginScreen.classList.remove('active');
  dashboard.classList.add('active');
});

// Biometric Login
biometricLogin.addEventListener('click', () => {
  alert('Biometric login not implemented yet.');
});

// Clock In/Out
clockInButton.addEventListener('click', () => {
  alert('Clocked In at ' + new Date().toLocaleTimeString());
});

clockOutButton.addEventListener('click', () => {
  alert('Clocked Out at ' + new Date().toLocaleTimeString());
});

// Logout
logoutBtn.addEventListener('click', () => {
  dashboard.classList.remove('active');
  loginScreen.classList.add('active');
});