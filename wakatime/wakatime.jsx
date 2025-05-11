document.addEventListener("DOMContentLoaded", function () {
    const charts = document.querySelectorAll(".wakatime-chart");

    charts.forEach(chart => {
        chart.onload = function () {
            const loader = this.previousElementSibling; // Find the skeleton loader
            if (loader) loader.style.display = "none"; // Hide loader
            this.style.opacity = "1"; // Fade in chart
            this.style.transform = "scale(1)"; // Restore size
        };
    });
});