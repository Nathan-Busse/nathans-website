// Set target date (adjust this as needed)
export const countDownDate = new Date("June 14, 2025 15:59:59").getTime();
// Update countdown every second
const countdownFunction = setInterval(() => {
  const now = new Date().getTime();
  const distance = countDownDate - now;
  
  // Calculate time components
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Display the results with a leading zero if necessary
  document.getElementById("days").textContent = days < 10 ? "0" + days : days;
  document.getElementById("hours").textContent = hours < 10 ? "0" + hours : hours;
  document.getElementById("minutes").textContent = minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds").textContent = seconds < 10 ? "0" + seconds : seconds;
  // Add a flip animation to the number update for a dynamic effect
  const boxes = document.querySelectorAll('.countdown-box span');
  boxes.forEach(box => {
    box.classList.add('animate');
    setTimeout(() => {
      box.classList.remove('animate');
    }, 500);
  });
}, 1000);