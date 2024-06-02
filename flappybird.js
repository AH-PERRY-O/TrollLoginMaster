let flappyBirdGame;
function initializeFlappyBird() {
    const canvas = document.getElementById('flappyBirdCanvas');
    const context = canvas.getContext('2d');
    
    let bird = {
        x: 50,
        y: 150,
        width: 20,
        height: 20,
        gravity: 0.4,
        lift: -10,
        velocity: 0
    };

    let pipes = [];
    let frame = 0;
    let score = 0;
    let isPaused = false;

    function drawBird() {
        context.fillStyle = 'yellow';
        context.fillRect(bird.x, bird.y, bird.width, bird.height);
    }

    function drawPipes() {
        context.fillStyle = 'green';
        for (let pipe of pipes) {
            context.fillRect(pipe.x, 0, pipe.width, pipe.height);
            context.fillRect(pipe.x, pipe.height + pipe.gap, pipe.width, canvas.height - pipe.height - pipe.gap);
        }
    }

    function updateBird() {
        bird.velocity += bird.gravity;
        bird.y += bird.velocity;
        if (bird.y + bird.height > canvas.height || bird.y < 0) {
            gameOver();
        }
    }

    function updatePipes() {
        for (let pipe of pipes) {
            pipe.x -= 2;
            if (pipe.x + pipe.width < 0) {
                pipes.shift();
                score++;
            }
            if (
                (bird.x + bird.width > pipe.x && bird.x < pipe.x + pipe.width &&
                 (bird.y < pipe.height || bird.y + bird.height > pipe.height + pipe.gap))
            ) {
                gameOver();
            }
        }
        if (frame % 120 === 0) {
            let pipeHeight = Math.floor(Math.random() * (canvas.height / 2)) + 20;
            pipes.push({ x: canvas.width, width: 20, height: pipeHeight, gap: 150 });
        }
    }

    function resetGame() {
        bird.y = 150;
        bird.velocity = 0;
        pipes = [];
        frame = 0;
        score = 0;
    }

    function gameLoop() {
        if (!isPaused) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            drawBird();
            drawPipes();
            updateBird();
            updatePipes();
            frame++;
        }
        requestAnimationFrame(gameLoop);
    }

    function gameOver() {
        isPaused = true;
        document.getElementById('gameOverScreen').style.display = 'flex';
    }

    document.addEventListener('keydown', function(event) {
        if (event.key === ' ') {
            bird.velocity = bird.lift;
        }
    });

    document.getElementById('pauseButton').addEventListener('click', function() {
        isPaused = true;
        document.getElementById('pauseScreen').style.display = 'flex';
    });

    document.getElementById('resumeButton').addEventListener('click', function() {
        isPaused = false;
        document.getElementById('pauseScreen').style.display = 'none';
        setTimeout(function() {
            // Resume after 3 seconds delay
        }, 3000);
    });

    document.getElementById('restartButton').addEventListener('click', function() {
        resetGame();
        document.getElementById('gameOverScreen').style.display = 'none';
        isPaused = false;
    });

    flappyBirdGame = gameLoop;
    resetGame();
    gameLoop();
}
