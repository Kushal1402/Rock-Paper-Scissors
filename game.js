// Variable declaration
let winMsg = "victory";
let loseMsg = "Crushing defeat";
let tieMsg = "Its a tie !!";

let statusDisplay = document.querySelector('#status-head');
let moveDisplays = document.querySelectorAll('.move-display h2');
let buttons = document.querySelectorAll('button');

let moveList =['Rock','Paper','Scissors'];


//  Computes result of the game. returns victory message if move 1 wins.
//  @param  {Number}   move1  move 1
//  @param  {Number}   move2  move 2
//  @return {String}   result result of the game
function calcResult(move1, move2) {
    // if ( move1.moveList[0] && move2.moveList[1]) {
    //     moveDisplays.innerHTML="move2 wins";
    // } else if (move1.moveList[0] && move2.moveList[2]) {
    //     moveDisplays.innerHTML="move1 wins";
    // } else {
    //     moveDisplays.innerHTML="its a tie";
    // } 
    var result = move1 - move2;
    if (result == 1 || result + 3 == 1) {
        return winMsg;
    } else if (result == 2 || result + 3 == 2) {
        return loseMsg;
    } else {
        return tieMsg;
    }
}

//  return {Number}   random number between 0 and 2
function randomMove() {
 return Math.floor(Math.random() * 3);
}

//  Displays start state of game
function startGame() {
    statusDisplay.textContent = 'Choose!';
    buttons.forEach((button, index) => {
        button.textContent = moveList[index];
        button.style.display = "inline-block";

        buttons[index].removeEventListener("click", startGame);
        buttons[index].addEventListener("click", endGame);
    });
}

//  Displays end state of game
//  @param {Event} event event containing information of users input.
function endGame(event) {
    let playerMove = moveList.indexOf(event.target.textContent);
    let computerMove = randomMove();
    
    statusDisplay.textContent = calcResult(playerMove, computerMove);

    moveDisplays[0].textContent = `You played ${moveList[playerMove]}`;
    moveDisplays[1].textContent = `Computer played ${moveList[computerMove]}`;
    buttons.forEach((button, index) => {
        if (index == 1) {
            button.textContent = "Play Again";
            button.removeEventListener("click", endGame);
            button.addEventListener("click", startGame);
        } else {
            button.style.display = "none";
        }
    });
}

startGame();