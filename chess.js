let board;
let pieceSelected;
let previousTarget;
let previousColor;

class ChessPiece{
    constructor(symbol, side, type, position){
        this.symbol = symbol;
        this.side = side;
        this.type = type;
        this.position = position;
        this.isCaptured = false;
    };

    moveTo(newPosition){
        document.getElementById(this.position).textContent = null;
        this.position = newPosition;
        document.getElementById(this.position).textContent = this.symbol;
    };

    capture(){
        this.isCaptured = true;
        document.getElementById(this.position).textContent = null;
        this.position = null;
    };
};


class ChessBoard{
    #board; // Declare private attribute

    constructor(){
        this.#board = [];
    };

    addToBoard(piece){
        if (!(piece instanceof ChessPiece)) {
            console.log("Cannot add non ChessPiece to board");
            return;
        };
        this.#board.push(piece);
    };
};


class Timer{
    constructor(duration, timerId, toggleId){
        this.duration = duration;
        this.timerId = timerId
        this.toggleId = toggleId
        this.toggleId.addEventListener('click', this.handleClick)
        this.intervalId = null
        this.countingDown = false
        this.minutes = null
        this.seconds = null
    };

    convertTime = (event) => {
        this.minutes = parseInt(this.duration / 60);
        this.seconds = parseInt(this.duration % 60);
        if (this.minutes < 10) {this.minutes = "0" + this.minutes;}
        if (this.seconds < 10) {this.seconds = "0" + this.seconds;}
    }

    startTimer = (event) => {
        this.countingDown = true
        this.intervalId = setInterval(() => {  
            this.convertTime()
            --this.duration
            this.timerId.textContent = this.minutes + ":" + this.seconds;
            if (this.duration < 0) {
                console.log("Times up!");
                clearInterval(this.intervalId)
                this.countingDown = false
            }
        }, 1000);
    };

    stopTimer = (event) => {
        clearInterval(this.intervalId)
        this.toggleId.textContent = "Play"
        this.countingDown = false
    };

    addToTimer = (event) => {
        this.duration += 20
        console.log(this.duration);
    }

    handleClick = (event) => {
        if(this.countingDown){
            this.stopTimer()
            this.addToTimer()
            this.convertTime()
            this.timerId.textContent = this.minutes + ":" + this.seconds;
        } else {
            this.startTimer()
        }
    }
};


function createPiece(board, symbol, side, type, position){
   let piece = new ChessPiece(symbol, side, type, position);
    // Random Position
    // board_letters = ['A','B','C','D','E','F','G','H']
    // board_numbers = [1,2,3,4,5,6,7,8]
    // piece.moveTo(
    //       board_letters[Math.floor(Math.random()*8)]
    //     + board_numbers[Math.floor(Math.random()*8)]
    // );
    board.addToBoard(piece);
    document.getElementById(position).textContent =symbol;
    return piece;
};


function populateBoard(board){
    // Create all pieces and add them to board
    createPiece(board, "♙", "White", "Pawn", "B1");
    createPiece(board, "♙", "White", "Pawn", "B2");
    createPiece(board, "♙", "White", "Pawn", "B3");
    createPiece(board, "♙", "White", "Pawn", "B4");
    createPiece(board, "♙", "White", "Pawn", "B5");
    createPiece(board, "♙", "White", "Pawn", "B6");
    createPiece(board, "♙", "White", "Pawn", "B7");
    createPiece(board, "♙", "White", "Pawn", "B8");
    createPiece(board, "♟", "Black", "Pawn", "G1");
    createPiece(board, "♟", "Black", "Pawn", "G2");
    createPiece(board, "♟", "Black", "Pawn", "G3");
    createPiece(board, "♟", "Black", "Pawn", "G4");
    createPiece(board, "♟", "Black", "Pawn", "G5");
    createPiece(board, "♟", "Black", "Pawn", "G6");
    createPiece(board, "♟", "Black", "Pawn", "G7");
    createPiece(board, "♟", "Black", "Pawn", "G8");
    createPiece(board, "♖", "White", "Rook", "A1");
    createPiece(board, "♖", "White", "Rook", "A8");
    createPiece(board, "♜", "Black", "Rook", "H1");
    createPiece(board, "♜", "Black", "Rook", "H8");
    createPiece(board, "♘", "White", "Knight", "A2");
    createPiece(board, "♘", "White", "Knight", "A7");
    createPiece(board, "♞", "Black", "Knight", "H2");
    createPiece(board, "♞", "Black", "Knight", "H7");
    createPiece(board, "♗", "White", "Bishop", "A3");
    createPiece(board, "♗", "White", "Bishop", "A6");
    createPiece(board, "♝", "Black", "Bishop", "H3");
    createPiece(board, "♝", "Black", "Bishop", "H6");
    createPiece(board, "♕", "White", "Queen", "A4");
    createPiece(board, "♛", "Black", "Queen", "H4");
    createPiece(board, "♔", "White", "King", "A5");
    createPiece(board, "♚", "Black", "King", "H5");
};


function resetGame() {
    const chessSquare = document.querySelectorAll(".chess-square");

    chessSquare.forEach(square => {
        square.textContent ="";
        square.style.background="";
    });

    pieceSelected = null;
    previousTarget = null;
    previousColor = null;
    board = new ChessBoard();
    populateBoard(board);
    console.log("Game restarted");
};

document.addEventListener("DOMContentLoaded", () => {
        const resetBtn = document.getElementById("resetBtn");
    resetBtn.addEventListener("click", resetGame);
});


document.addEventListener("DOMContentLoaded", () => {
    let pieceSelected;
    let previousTarget;
    let previousColor;
    const chessSquare = document.querySelectorAll('.chess-square');

    chessSquare.forEach(square => {
        square.addEventListener('click', function(event) {
            // If same square clicked back to back
            if (event.currentTarget === previousTarget){
                console.log("Invalid move");
            }

            // If empty square is clicked and a piece is selected
            else if (!event.currentTarget.textContent && pieceSelected) {
                console.log(`Move To: ${event.currentTarget.id}`);

                event.currentTarget.textContent = pieceSelected;
                pieceSelected = null;

                previousTarget.style.background = previousColor;
                previousColor = getComputedStyle(event.currentTarget).getPropertyValue("background-color");
                previousTarget.textContent = null;
            }

            // If occupied square is clicked and a piece is selected
            else if (event.currentTarget.textContent && pieceSelected) {

            }

            // If occupied square is clicked
            else if (event.currentTarget.textContent) {


                previousColor = getComputedStyle(event.currentTarget).getPropertyValue("background-color");
                square.style.background = "green";

                pieceSelected = event.currentTarget.textContent;
                previousTarget = event.currentTarget;
                console.log(`Square Selected: ${event.currentTarget.id}`);
            }

            else {
                console.log("Empty square");
            };
        });
    });

    board = new ChessBoard();
    populateBoard(board)
    console.log(board);

    p1Timer = new Timer(300, document.querySelector('#p1-timer'), document.querySelector('#p1-toggle'))
    p2Timer = new Timer(120, document.querySelector('#p2-timer'), document.querySelector('#p2-toggle'))
    console.log(p1Timer);
    console.log(p2Timer);
});

