// DOM Elements
const dashboard = document.getElementById('dashboard');
const attendanceLogs = document.getElementById('attendance-logs');
const leaveManagement = document.getElementById('leave-management');
const attendanceLogsBtn = document.getElementById('attendance-logs-btn');
const leaveManagementBtn = document.getElementById('leave-management-btn');
const backToDashboardBtns = document.querySelectorAll('#back-to-dashboard');

// Navigation Functions
attendanceLogsBtn.addEventListener('click', () => {
  dashboard.classList.remove('active');
  attendanceLogs.classList.add('active');
});

leaveManagementBtn.addEventListener('click', () => {
  dashboard.classList.remove('active');
  leaveManagement.classList.add('active');
});

backToDashboardBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    attendanceLogs.classList.remove('active');
    leaveManagement.classList.remove('active');
    dashboard.classList.add('active');
  });
});

// Clock In/Out
document.getElementById('clock-in').addEventListener('click', () => {
  alert('Clocked In at ' + new Date().toLocaleTimeString());
});

document.getElementById('clock-out').addEventListener('click', () => {
  alert('Clocked Out at ' + new Date().toLocaleTimeString());
});

// Leave Application
document.getElementById('leave-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Leave application submitted.');
});
