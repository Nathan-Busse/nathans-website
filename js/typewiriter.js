const text = "Welcome to my portfolio...";
let i = 0;
const speed = 100; // Adjust the speed (milliseconds)

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
