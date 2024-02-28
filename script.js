let count = 0; // Count the number of turns
let grid = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]; 


function hasWon(lastPlayer) {
    // Check rows and columns
    for (let i = 0; i < 3; i++) {
        if (grid[i][0] === lastPlayer && grid[i][1] === lastPlayer && grid[i][2] === lastPlayer ||
            grid[0][i] === lastPlayer && grid[1][i] === lastPlayer && grid[2][i] === lastPlayer) {
            return true;
        }
    }
    // Check diagonals
    if (grid[0][0] === lastPlayer && grid[1][1] === lastPlayer && grid[2][2] === lastPlayer ||
        grid[0][2] === lastPlayer && grid[1][1] === lastPlayer && grid[2][0] === lastPlayer) {
        return true;
    }
    return false;
}

// Function to handle the click event on boxes
function handleClick(event) {
    const id = event.target.id;
    const [x, y] = id.substring(3).split('').map(Number);

    if (grid[x][y] === 0) {
        const currentPlayer = count % 2 === 0 ? 1 : 2;
        grid[x][y] = currentPlayer;
        event.target.textContent = currentPlayer === 1 ? 'X' : 'O';

        if (hasWon(currentPlayer)) {
            alert(`Player ${currentPlayer} wins!`);
            resetGame();
        } else {
            count++;
            if (count === 9) {
                alert("It's a draw!");
                resetGame();
            }
        }
    } else {
        alert("This box is already filled!");
    }
}

// Function to reset the game
function resetGame() {
    count = 0;
    grid = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.textContent = '';
    });
}

// Add click event listener to all boxes
const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.addEventListener('click', handleClick);
});

// reset button
let reset = document.querySelector(".reset");

reset.addEventListener("click",function(){
    resetGame();
});
