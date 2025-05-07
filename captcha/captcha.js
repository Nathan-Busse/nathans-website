document.addEventListener("DOMContentLoaded", function () {
    // Create the CAPTCHA button
    const captchaButton = document.createElement("button");
    captchaButton.textContent = "I am not a robot";
    captchaButton.classList.add("captcha-button");

    // Click event to verify and open PDF
    captchaButton.addEventListener("click", function () {
        if (confirm("Please confirm you're human.")) {
            window.open("/../../Assets/CV/Resume.pdf", "_blank");
        }
    });

    // Append button to body
    document.body.appendChild(captchaButton);
});
