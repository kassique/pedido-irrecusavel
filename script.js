document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("n");
    const getRandomPosition = () => {
        const screenWidth = window.innerWidth - btn.clientWidth;
        const screenHeight = window.innerHeight - btn.clientHeight;
        const randomX = Math.floor(Math.random() * screenWidth);
        const randomY = Math.floor(Math.random() * screenHeight);

        return {x: randomX, y: randomY};
    };

    btn.addEventListener("mouseenter", function () {
        const randomPosition = getRandomPosition();

        btn.style.position = "absolute";
        btn.style.top = `${randomPosition.y}px`;
        btn.style.left = `${randomPosition.x}px`;
    });
});