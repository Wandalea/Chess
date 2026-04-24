class ChessPiece{
    constructor(board, symbol, side, type, x, y){
        this.symbol = symbol;
        this.side = side;
        this.type = type;
        this.x = x;
        this.y = y;
        this.coords = x.toString() + this.y
        this.initialCoords = this.coords
        this.isCaptured = false;
        board.addToBoard(this);
    };

    moveTo(newCoords, x, y){
        document.getElementById(this.coords).textContent = null;
        this.coords = newCoords;
        this.x = x;
        this.y = y;
        document.getElementById(this.coords).textContent = this.symbol;
    };

    capture(){
        this.isCaptured = true;
        document.getElementById(this.coords).textContent = null;
        this.position = null;
    };
};


class Pawn extends ChessPiece{
    constructor(board, symbol, side, type, x, y){
        super(board, symbol, side, type, x, y)
        this.validMoves = []
    }

    calculateValidMoves = (event) => {     
        if (this.validMoves){
            this.validMoves = []
        }   
        if (this.coords === this.initialCoords){
            if (this.side === "Black"){    
                this.validMoves.push(this.x + (this.y + 2).toString())
            }
        }
        this.validMoves.push(this.x + (this.y + 1).toString())
    }
}


class Rook extends ChessPiece{
    constructor(board, symbol, side, type, x, y){
        super(board, symbol, side, type, x, y)
        this.validMoves = []
    }
}


class Knight extends ChessPiece{
     constructor(board, symbol, side, type, x, y){
        super(board, symbol, side, type, x, y)
        this.validMoves = []
    }   
}


class Bishop extends ChessPiece{
    constructor(board, symbol, side, type, x, y){
        super(board, symbol, side, type, x, y)
        this.validMoves = []
    }    
}


class Queen extends ChessPiece{
    constructor(board, symbol, side, type, x, y){
        super(board, symbol, side, type, x, y)
        this.validMoves = []
    }    
}


class King extends ChessPiece{
    constructor(board, symbol, side, type, x, y){
        super(board, symbol, side, type, x, y)
        this.validMoves = []
    }    
}


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

    getBoard = () => {
        return this.#board
    }
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


function populateBoard(board){
    // Create all pieces and add them to board
    new Pawn(board, "♙", "White", "Pawn", 1, 7);
    new Pawn(board, "♙", "White", "Pawn", 2, 7);
    new Pawn(board, "♙", "White", "Pawn", 3, 7);
    new Pawn(board, "♙", "White", "Pawn", 4, 7);
    new Pawn(board, "♙", "White", "Pawn", 5, 7);
    new Pawn(board, "♙", "White", "Pawn", 6, 7);
    new Pawn(board, "♙", "White", "Pawn", 7, 7);
    new Pawn(board, "♙", "White", "Pawn", 8, 7);
    new Pawn(board, "♟", "Black", "Pawn", 1, 2);
    new Pawn(board, "♟", "Black", "Pawn", 2, 2);
    new Pawn(board, "♟", "Black", "Pawn", 3, 2);
    new Pawn(board, "♟", "Black", "Pawn", 4, 2);
    new Pawn(board, "♟", "Black", "Pawn", 5, 2);
    new Pawn(board, "♟", "Black", "Pawn", 6, 2);
    new Pawn(board, "♟", "Black", "Pawn", 7, 2);
    new Pawn(board, "♟", "Black", "Pawn", 8, 2);
    new Rook(board, "♖", "White", "Rook", 1, 8);
    new Rook(board, "♖", "White", "Rook", 8, 8);
    new Rook(board, "♜", "Black", "Rook", 1, 1);
    new Rook(board, "♜", "Black", "Rook", 8, 1);
    new Knight(board, "♘", "White", "Knight", 2, 8);
    new Knight(board, "♘", "White", "Knight", 7, 8);
    new Knight(board, "♞", "Black", "Knight", 2, 1);
    new Knight(board, "♞", "Black", "Knight", 7, 1);
    new Bishop(board, "♗", "White", "Bishop", 3, 8);
    new Bishop(board, "♗", "White", "Bishop", 6, 8);
    new Bishop(board, "♝", "Black", "Bishop", 3, 1);
    new Bishop(board, "♝", "Black", "Bishop", 6, 1);
    new Queen(board, "♕", "White", "Queen", 4, 8);
    new Queen(board, "♛", "Black", "Queen", 4, 1);
    new King(board, "♔", "White", "King", 5, 8);
    new King(board, "♚", "Black", "King", 5, 1);
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
    board = new ChessBoard
    populateBoard(board)
    
    let pieceSelected;
    let previousTarget;
    let previousColor;
    document.querySelectorAll('td').forEach(cell => {
        cell.addEventListener('click', function(event) {
            const x = cell.cellIndex;
            const y = cell.parentNode.rowIndex;
            const coords = x.toString()+y;
            const currentCell = event.currentTarget;
            const clickedPiece = board.getBoard().find(piece => piece.coords === coords);

                if (clickedPiece && !pieceSelected){
                    pieceSelected = clickedPiece;
                    previousTarget = currentCell;
                    previousColor = getComputedStyle(currentCell).getPropertyValue("background-color");
                    currentCell.style.background = "green";
                    pieceSelected.calculateValidMoves();
                    console.log(`Valid Moves: ${pieceSelected.validMoves}`);
                    console.log(`Selected Cell: ${coords}`);
                }

                // If empty square is clicked and a piece is selected
                if (pieceSelected && !clickedPiece){
                    if (pieceSelected.validMoves.includes(coords)){
                        pieceSelected.moveTo(currentCell.id, x, y)
                        console.log(`Move To: ${currentCell.id} Coords: ${coords}`)
                        previousTarget.textContent = ""
                        previousTarget.style.background = previousColor;
                        pieceSelected = null
                        previousTarget = null;
                    }
                }

                // If same square clicked back to back
                if (clickedPiece === pieceSelected){
                    pieceSelected = null
                    previousTarget.style.background = previousColor;
                }
        });
    });

    p1Timer = new Timer(300, document.querySelector('#p1-timer'), document.querySelector('#p1-toggle'))
    p2Timer = new Timer(120, document.querySelector('#p2-timer'), document.querySelector('#p2-toggle'))
});
