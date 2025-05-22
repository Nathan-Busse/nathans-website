document.querySelectorAll('.tile').forEach(tile => {
    tile.addEventListener('mouseover', () => {
        tile.style.boxShadow = "0 8px 20px rgba(0,0,0,0.9)";
    });
    tile.addEventListener('mouseout', () => {
        tile.style.boxShadow = "0 4px 10px rgba(0,0,0,0.5)";
    });
});
