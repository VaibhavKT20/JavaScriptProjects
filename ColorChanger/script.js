document.addEventListener("DOMContentLoaded", function () {
    const colorBox = document.getElementById("color-box");
    const changeColorButton = document.getElementById("change-color");

    // Define an array of predefined colors
    const colors = ["#3498db", "#e74c3c", "#2ecc71", "#f1c40f", "#9b59b6", "#e67e22", "#1abc9c"];
    
    const getRandomColor = () => {
        // Get a random color from the predefined list
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    };

    changeColorButton.addEventListener("click", function () {
        const randomColor = getRandomColor();
        colorBox.style.backgroundColor = randomColor;
    });
});
