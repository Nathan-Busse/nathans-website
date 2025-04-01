function showChart() {
    const loader = document.querySelector('.skeleton-loader');
    const chart = document.getElementById('wakatime-chart');
    

    if (loader && chart) {
        loader.style.display = 'none'; // Hide skeleton loader
        chart.style.opacity = '1';      // Fade in chart
        chart.style.transform = 'scale(1)'; // Restore original size
    }
}