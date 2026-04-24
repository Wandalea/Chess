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
        this.moveTo(this.coords, this.x, this.y)
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
        // document.getElementById(this.coords).textContent = null;
        this.position = document.getElementById("0");
    };
};


class Pawn extends ChessPiece{
    constructor(board, symbol, side, type, x, y){
        super(board, symbol, side, type, x, y)
        this.validMoves = []
    }

    calculateValidMoves = (event) => {     
        this.validMoves = []

        if (this.side === "Black"){ 
            if (this.coords === this.initialCoords){
                let target = (this.x + (this.y + 2).toString())
                if (!board.getBoard().find(piece => piece.coords === target && piece.side === this.side)){
                    this.validMoves.push(target)
                } 
            }
            if (this.y + 1 < 9){
                let target = this.x + (this.y + 1).toString()
                if (!board.getBoard().find(piece => piece.coords === target && piece.side === this.side)){
                    this.validMoves.push(target)
                }       
            }
        } else {
            if (this.y - 1 > 0){
                let target = this.x + (this.y - 1).toString()
                if (!board.getBoard().find(piece => piece.coords === target && piece.side === this.side)){
                    this.validMoves.push(target)
                }     
            }
        }
    }
}


class Rook extends ChessPiece{
    constructor(board, symbol, side, type, x, y){
        super(board, symbol, side, type, x, y)
        this.validMoves = []
    }

    calculateValidMoves = (event) => {     
        this.validMoves = []

        // Up
        for (let i = this.y; i > 0; i--){
            console.log(this.y - i)
            if (this.y - i > 0){
                let target = (this.x) + (this.y - i).toString()
                if (!board.getBoard().find(piece => piece.coords === target && piece.side === this.side)){
                    this.validMoves.push(target)
                } else {
                    break
                }   
            } 
        }

        // Down
        for (let i = this.y; i < 9; i++){
            console.log(this.y + i)
            if (this.y + i < 9){
                let target = (this.x) + (this.y + i).toString()
                if (!board.getBoard().find(piece => piece.coords === target && piece.side === this.side)){
                    this.validMoves.push(target)
                } else {
                    break
                }  
            }  
        }

        // Left

        for (let i = this.x; i > 0; i--){
            console.log(this.x - i)
            if (this.x - i > 0){
                let target = (this.x - i) + (this.y).toString()
                if (!board.getBoard().find(piece => piece.coords === target && piece.side === this.side)){
                    this.validMoves.push(target)
                } else {
                    break
                }
            }
        }

        // Right

        for (let i = this.x; i < 9; i++){
            console.log(this.x + i)
            if (this.x + i < 9){
                let target = (this.x + i) + (this.y).toString()
                if (!board.getBoard().find(piece => piece.coords === target && piece.side === this.side)){
                    this.validMoves.push(target)
                } else {
                    break
                }    
            }
        }
    }
}



class Knight extends ChessPiece{
     constructor(board, symbol, side, type, x, y){
        super(board, symbol, side, type, x, y)
        this.validMoves = []
    }   
    
    calculateValidMoves = (event) => {     
        if (this.validMoves){
            this.validMoves = []
        }

        // Up
        if (this.x + 1 < 9 && this.y + 2 < 9){
            let target = (this.x + 1) + (this.y + 2).toString()
            if (!board.getBoard().find(piece => piece.coords === target && piece.side === this.side)){
                this.validMoves.push(target)
            }       
        }

        if (this.x - 1 > 0 && this.y + 2 < 9){
            let target = (this.x - 1) + (this.y + 2).toString()
            if (!board.getBoard().find(piece => piece.coords === target && piece.side === this.side)){
                this.validMoves.push(target)
            }       
        }
        
        // Down
        if (this.x + 1 < 9 && this.y - 2 > 0){
            let target = (this.x + 1) + (this.y - 2).toString()
            if (!board.getBoard().find(piece => piece.coords === target && piece.side === this.side)){
                this.validMoves.push(target)
            }       
        }
        if (this.x - 1 > 0 && this.y - 2 > 0){
            let target = (this.x - 1) + (this.y - 2).toString()
            if (!board.getBoard().find(piece => piece.coords === target && piece.side === this.side)){
                this.validMoves.push(target)
            }       
        }
        
        // Left
        if (this.x - 2 > 0 && this.y + 1 < 9){
            let target = (this.x - 2) + (this.y + 1).toString()
            if (!board.getBoard().find(piece => piece.coords === target && piece.side === this.side)){
                this.validMoves.push(target)
            }       
        }
        if (this.x - 2 > 0 && this.y - 1 > 0){
            let target = (this.x - 2) + (this.y - 1).toString()
            if (!board.getBoard().find(piece => piece.coords === target && piece.side === this.side)){
                this.validMoves.push(target)
            }       
        }
        
        //Right
        if (this.x + 2 < 9 && this.y + 1 < 9){
            let target = (this.x + 2) + (this.y + 1).toString()
            if (!board.getBoard().find(piece => piece.coords === target && piece.side === this.side)){
                this.validMoves.push(target)
            }
        }
        if (this.x + 2 < 9 && this.y - 1 > 0){
            let target = (this.x + 2) + (this.y - 1).toString()
            if (!board.getBoard().find(piece => piece.coords === target && piece.side === this.side)){
                this.validMoves.push(target)
            }     
        }
    }
}


class Bishop extends ChessPiece{
    constructor(board, symbol, side, type, x, y){
        super(board, symbol, side, type, x, y)
        this.validMoves = []
    }  
    
    calculateValidMoves = (event) => {     
        if (this.validMoves){
            this.validMoves = []
        }
    }
}


class Queen extends ChessPiece{
    constructor(board, symbol, side, type, x, y){
        super(board, symbol, side, type, x, y)
        this.validMoves = []
    }

    calculateValidMoves = (event) => {     
        if (this.validMoves){
            this.validMoves = []
        }
    }
}


class King extends ChessPiece{
    constructor(board, symbol, side, type, x, y){
        super(board, symbol, side, type, x, y)
        this.validMoves = []
    } 
    
    calculateValidMoves = (event) => {     
        if (this.validMoves){
            this.validMoves = []
        }
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
    constructor(name, duration, timerId, toggleId){
        this.name = name;
        this.duration = duration;
        this.timerId = timerId;
        this.toggleId = toggleId;
        
        this.intervalId = null;
        this.countingDown = false;
        this.minutes = null;
        this.seconds = null;
        this.other = null;
        if (this.name === "p1Timer"){
            this.startTimer()
        }
        if (window.document.title === "Blitz Chess"){
            this.toggleId.addEventListener('click', this.handleClick)
        }
    };

    convertTime = (event) => {
        this.minutes = parseInt(this.duration / 60);
        this.seconds = parseInt(this.duration % 60);
        if (this.minutes < 10) {this.minutes = "0" + this.minutes;}
        if (this.seconds < 10) {this.seconds = "0" + this.seconds;}
    }

    updateDisplay = (event) => {
        this.timerId.textContent = this.minutes + ":" + this.seconds;
    }

    startTimer = (event) => {
        this.countingDown = true
        this.intervalId = setInterval(() => {  
            this.convertTime()
            --this.duration
            this.updateDisplay()
            this.toggleId.disabled = false
            this.toggleId.textContent = "End Turn"

            if (this.duration < 0) {
                const gameOver= document.getElementById("gameOver");
                const gameOverText = document.getElementById("gameOverText");
                gameOverText.textContent= "The other player won the game!";
                gameOver.classList.remove("hidden");
                clearInterval(this.intervalId)
                this.countingDown = false
            }
        }, 1000);
    };

    stopTimer = (event) => {
        clearInterval(this.intervalId)
        this.toggleId.disabled = true
        this.toggleId.textContent = "Waiting"
        this.countingDown = false
        this.other.startTimer()
    };

    addToTimer = (event) => {
        this.duration += 3
    }

    handleClick = (event, other) => {
        if(this.countingDown){
            this.stopTimer()
            this.addToTimer()
            this.convertTime()
            this.updateDisplay()
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


function resetGame(p1Timer = null, p2Timer = null) {
    document.querySelectorAll(".chess-square").forEach(cell => {
        cell.textContent ="";
        cell.style.background="";
    });

    pieceSelected = null;
    previousTarget = null;
    previousColor = null;
    
    board = new ChessBoard();
    populateBoard(board);
    if (window.document.title === "Blitz Chess"){
        p1Timer.stopTimer();
        p2Timer.stopTimer();
        p1Timer.duration = 300;
        p2Timer.duration = 300;
    }
 

    console.log("Game restarted");
};


function forfeitGame() {
    let confirmForfeit = confirm("Are you sure you want to forfeit the game?");

    if(!confirmForfeit){
        return
    } else {
        const gameOver= document.getElementById("gameOver");
        const gameOverText = document.getElementById("gameOverText");

        gameOverText.textContent= "The other player won the game!";
        gameOver.classList.remove("hidden");
    }
}


document.addEventListener("DOMContentLoaded", () => {
    if (window.document.title !== "Play chess"){
        board = new ChessBoard
        populateBoard(board)
        
        let pieceSelected = null;
        let previousTarget = null;
        let previousColor = null;
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
                    else if (pieceSelected && !clickedPiece){
                        if (pieceSelected.validMoves.includes(coords)){
                            pieceSelected.moveTo(currentCell.id, x, y)
                            console.log(`Move To: ${currentCell.id} Coords: ${coords}`)
                            previousTarget.textContent = ""
                            previousTarget.style.background = previousColor;
                            pieceSelected = null
                            previousTarget = null;
                        } else {
                            console.log("invalid move");
                        }
                    }

                    else if (pieceSelected && clickedPiece && pieceSelected.side !== clickedPiece.side){
                        clickedPiece.capture(clickedPiece)
                        pieceSelected.moveTo(currentCell.id, x, y)
                        console.log(`Move To: ${currentCell.id} Coords: ${coords}`)
                        previousTarget.textContent = ""
                        previousTarget.style.background = previousColor;
                        pieceSelected = null
                        previousTarget = null;
                    }

                    // If same square clicked back to back
                    else if (clickedPiece === pieceSelected){
                        pieceSelected = null
                        previousTarget.style.background = previousColor;
                    }
            });
        });


        document.getElementById("resetBtn").addEventListener("click", resetGame);
        document.getElementById("forfeitBtn").addEventListener("click", forfeitGame);
        if (window.document.title === "Chess"){
            document.getElementById("playAgainBtn").addEventListener("click", () => { 
                resetGame();
                document.getElementById("gameOver").classList.add("hidden");
            });
        } else {
            p1Timer = new Timer("p1Timer", 300, document.querySelector('#p1-timer'), document.querySelector('#p1-toggle'))
            p2Timer = new Timer("p2Timer", 300, document.querySelector('#p2-timer'), document.querySelector('#p2-toggle'))
            p1Timer.other = p2Timer
            p2Timer.other = p1Timer

            document.getElementById("playAgainBtn").addEventListener("click", () => { 
                resetGame(p1Timer, p2Timer);
                document.getElementById("gameOver").classList.add("hidden");
            });
        }


        document.getElementById("homeBtn").addEventListener("click", () => {
            window.location.href = "home.html";
        });
   }
});
