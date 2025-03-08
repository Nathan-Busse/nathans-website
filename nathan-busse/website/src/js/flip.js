document.addEventListener("DOMContentLoaded", function () {
    // Select all portfolio items
    const portfolioItems = document.querySelectorAll(".folio-item");

    // Add click event to each portfolio item to toggle the flip effect
    portfolioItems.forEach((item) => {
        const link = item.querySelector(".overlay");
        if (link) {
            link.addEventListener("click", function () {
                item.classList.add("flipped");
            });
        }
    });

    // Add event listener for closing modals
    const closeButtons = document.querySelectorAll(".popup-modal-dismiss");
    closeButtons.forEach((button) => {
        button.addEventListener("click", function () {
            // Find the currently flipped item and remove the class
            document.querySelectorAll(".folio-item.flipped").forEach((flippedItem) => {
                flippedItem.classList.remove("flipped");
            });
        });
    });
});