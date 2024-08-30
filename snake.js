document.addEventListener('DOMContentLoaded', (event) => {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    const scoreElement = document.getElementById('score');

    if (!ctx) {
        console.error('Oops, falló la inicialitzación del canvas :C');
        return;
    }

    // coordenadas iniciales de la serpiente
    let snake = [
        { x: 150, y: 150 },
        { x: 140, y: 150 },
        { x: 130, y: 150 },
        { x: 120, y: 150 },
        { x: 110, y: 150 },
        { x: 100, y: 150 }
    ];

    // Movimiento de la serpiente
    let dx = 10; 
    let dy = 0; 

    let food = { x: 0, y: 0 };
    let score = 0;
    let speed = 100;

    // Fondo
    function drawBackground() {
        ctx.fillStyle = 'lightgray';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // Funcion para dibujar la serpiente
    function drawSnakePart(snakePart, isHead) {
        ctx.fillStyle = 'lightgreen';
        ctx.strokeStyle = 'darkgreen';
        ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
        ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);

        if (isHead) {
            drawSnakeHead(snakePart);
        }
    }

    // Funcion para dibujar la cabeza de la serpiente
    function drawSnakeHead(head) {
        //ojos
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(head.x + 3, head.y + 3, 3, 0, 2 * Math.PI);
        ctx.arc(head.x + 7, head.y + 3, 3, 0, 2 * Math.PI);
        ctx.fill();

        // pupilas
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(head.x + 3, head.y + 3, 1.5, 0, 2 * Math.PI); // izq
        ctx.arc(head.x + 7, head.y + 3, 1.5, 0, 2 * Math.PI); 
        ctx.fill();

        // lengua
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.moveTo(head.x + 5, head.y + 10);
        ctx.lineTo(head.x + 8, head.y + 15);
        ctx.lineTo(head.x + 5, head.y + 15);
        ctx.closePath();
        ctx.fill();
    }

    // Dibujar comida
    function drawFood() {
        ctx.fillStyle = 'darkred';
        ctx.fillRect(food.x, food.y, 10, 10);
        ctx.strokeRect(food.x, food.y, 10, 10);
    }

    // Funcion para actualizar el puntaje
    function updateScore() {
        scoreElement.textContent = `Puntaje: ${score}`;
    }

    function generateFood() {
        food.x = Math.floor(Math.random() * (canvas.width / 10)) * 10;
        food.y = Math.floor(Math.random() * (canvas.height / 10)) * 10;
    }

    // dibujar serpiente completa
    function drawSnake() {
        drawBackground();
        snake.forEach((part, index) => drawSnakePart(part, index === 0));
        drawFood();
        updateScore();
    }

    // Avance de la serpiente
    function advanceSnake() {
        const head = { x: snake[0].x + dx, y: snake[0].y + dy };

        // choques con borde
        if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
            resetGame();
            return;
        }

        // choque de la serpiente
        if (snake.some(part => part.x === head.x && part.y === head.y)) {
            resetGame();
            return;
        }

        snake.unshift(head);

        // cuando come la comida:
        if (head.x === food.x && head.y === food.y) {
            score++;
            increaseSpeed();
            generateFood();
        } else {
            snake.pop();
        }
    }

    //aumentar la velocidad
    function increaseSpeed() {
        speed = Math.max(50, speed - 5);
        clearInterval(updateInterval);
        updateInterval = setInterval(update, speed);
    }

    // Reiniciar el juego
    function resetGame() {
        snake = [
            { x: 150, y: 150 },
            { x: 140, y: 150 },
            { x: 130, y: 150 },
            { x: 120, y: 150 },
            { x: 110, y: 150 },
            { x: 100, y: 150 }
        ];
        dx = 10;
        dy = 0;
        score = 0;
        speed = 100;
        generateFood();
        clearInterval(updateInterval);
        updateInterval = setInterval(update, speed);
    }

    //mobile stuff

    let startX, startY;

    document.addEventListener('touchstart', (e) => {
        const touch = e.touches[0];
        startX = touch.clientX;
        startY = touch.clientY;
    });
    
    document.addEventListener('touchend', (e) => {
        const touch = e.changedTouches[0];
        const endX = touch.clientX;
        const endY = touch.clientY;
    
        const deltaX = endX - startX;
        const deltaY = endY - startY;
    
        // Determine the direction of the swipe
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            // Horizontal swipe
            if (deltaX > 30 && dx === 0) { 
                dx = 10; 
                dy = 0; 
            }
            if (deltaX < -30 && dx === 0) { 
                dx = -10; 
                dy = 0; 
            }
        } else {
            // Vertical swipe
            if (deltaY > 30 && dy === 0) { 
                dx = 0; 
                dy = 10; 
            }
            if (deltaY < -30 && dy === 0) { 
                dx = 0; 
                dy = -10; 
            }
        }
    });


    // Funcion para actualizar la serpiente
    function update() {
        advanceSnake();
        drawSnake();
    }

    let updateInterval = setInterval(update, speed);

    //movimiento a través de teclas
    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowUp':
                if (dy === 0) { dx = 0; dy = -10; } 
                break;
            case 'ArrowDown':
                if (dy === 0) { dx = 0; dy = 10; } 
                break;
            case 'ArrowLeft':
                if (dx === 0) { dx = -10; dy = 0; } 
                break;
            case 'ArrowRight':
                if (dx === 0) { dx = 10; dy = 0; } 
                break;
        }
    });

    generateFood();
});
