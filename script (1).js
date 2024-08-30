document.addEventListener('DOMContentLoaded', function() {
    const gameArea = document.getElementById('gameArea');
    const youDied = document.getElementById('youDied');

    function endGame() {
        gameArea.classList.add('hidden');
        youDied.classList.remove('hidden');
    }

    document.addEventListener('touchstart', endGame);
    document.addEventListener('mousedown', endGame); // For desktop users
});