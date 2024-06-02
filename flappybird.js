function initializeFlappyBird() {
    const canvas = document.getElementById('flappyBirdCanvas');
    const context = canvas.getContext('2d');
    
    let bird = {
        x: 50,
        y: 150,
        width: 20,
        height: 20,
        gravity: 0.6,
        lift: -15,
        velocity: 0
    };

    let pipes = [];
    let frame = 0;

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
            resetGame();
        }
    }

    function updatePipes() {
        for (let pipe of pipes) {
            pipe.x -= 2;
            if (pipe.x + pipe.width < 0) {
                pipes.shift();
            }
        }
        if (frame % 90 === 0) {
            let pipeHeight = Math.floor(Math.random() * (canvas.height / 2)) + 20;
            pipes.push({ x: canvas.width, width: 20, height: pipeHeight, gap: 100 });
        }
    }

    function resetGame() {
        bird.y = 150;
        bird.velocity = 0;
        pipes = [];
        frame = 0;
    }

    function gameLoop() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawBird();
        drawPipes();
        updateBird();
        updatePipes();
        frame++;
        requestAnimationFrame(gameLoop);
    }

    document.addEventListener('keydown', function() {
        bird.velocity = bird.lift;
    });

    resetGame();
    gameLoop();
}
