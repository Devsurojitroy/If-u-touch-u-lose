document.addEventListener('DOMContentLoaded', function() {
    const gameArea = document.getElementById('gameArea');
    const youDied = document.getElementById('youDied');
    const timerDisplay = document.getElementById('timer');
    const randomEvent = document.getElementById('randomEvent');
    const restartButton = document.getElementById('restart');

    let timeSurvived = 0;
    let gameInterval;
    let randomEventInterval;
    let isTouching = false; // Track whether the user is touching

    function endGame() {
        clearInterval(gameInterval);
        clearInterval(randomEventInterval);
        gameArea.classList.add('hidden');
        youDied.classList.remove('hidden');
    }

    function updateTimer() {
        timeSurvived += 1;
        timerDisplay.textContent = timeSurvived;
    }

    function showRandomEvent() {
        randomEvent.classList.remove('hidden');
        setTimeout(() => {
            randomEvent.classList.add('hidden');
        }, 500); // Show the event for 0.5 seconds
    }

    function handleTouchStart(event) {
        if (!isTouching) {
            isTouching = true;
            startGame();
        }
    }

    function handleTouchEnd(event) {
        if (isTouching) {
            endGame();
            isTouching = false; // Reset touch state
        }
    }

    function handleMouseDown(event) {
        if (!isTouching) {
            isTouching = true;
            startGame();
        }
    }

    function handleMouseUp(event) {
        if (isTouching) {
            endGame();
            isTouching = false; // Reset touch state
        }
    }

    function startGame() {
        timeSurvived = 0;
        timerDisplay.textContent = timeSurvived;

        gameArea.classList.remove('hidden');
        youDied.classList.add('hidden');

        gameInterval = setInterval(updateTimer, 1000);
        randomEventInterval = setInterval(showRandomEvent, 2000);

        // Add event listeners for touch and mouse events
        document.addEventListener('touchstart', handleTouchStart, { passive: true });
        document.addEventListener('touchend', handleTouchEnd, { passive: true });
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);
    }

    restartButton.addEventListener('click', function() {
        // Reset game state and restart
        isTouching = false;
        startGame();
    });

    // Initialize game
    startGame();
});