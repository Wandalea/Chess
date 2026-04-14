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


function createPiece(board, symbol, side, type, position){
    piece = new ChessPiece(symbol, side, type, position)
    // Random Position
    // board_letters = ['A','B','C','D','E','F','G','H']
    // board_numbers = [1,2,3,4,5,6,7,8]
    // piece.moveTo(
    //       board_letters[Math.floor(Math.random()*8)]
    //     + board_numbers[Math.floor(Math.random()*8)]
    // );
    board.addToBoard(piece);
    return piece;
};


function populateBoard(board){
    // Create all pieces and add them to board
    let Pawn1 = createPiece(board, "♙", "White", "Pawn", "B1");
    let Pawn2 = createPiece(board, "♙", "White", "Pawn", "B2");
    let Pawn3 = createPiece(board, "♙", "White", "Pawn", "B3");
    let Pawn4 = createPiece(board, "♙", "White", "Pawn", "B4");
    let Pawn5 = createPiece(board, "♙", "White", "Pawn", "B5");
    let Pawn6 = createPiece(board, "♙", "White", "Pawn", "B6");
    let Pawn7 = createPiece(board, "♙", "White", "Pawn", "B7");
    let Pawn8 = createPiece(board, "♙", "White", "Pawn", "B8");
    let Pawn9 = createPiece(board, "♟", "Black", "Pawn", "G1");
    let Pawn10 = createPiece(board, "♟", "Black", "Pawn", "G2");
    let Pawn11 = createPiece(board, "♟", "Black", "Pawn", "G3");
    let Pawn12 = createPiece(board, "♟", "Black", "Pawn", "G4");
    let Pawn13 = createPiece(board, "♟", "Black", "Pawn", "G5");
    let Pawn14 = createPiece(board, "♟", "Black", "Pawn", "G6");
    let Pawn15 = createPiece(board, "♟", "Black", "Pawn", "G7");
    let Pawn16 = createPiece(board, "♟", "Black", "Pawn", "G8");
    let Rook1 = createPiece(board, "♖", "White", "Rook", "A1");
    let Rook2 = createPiece(board, "♖", "White", "Rook", "A8");
    let Rook3 = createPiece(board, "♜", "Black", "Rook", "H1");
    let Rook4 = createPiece(board, "♜", "Black", "Rook", "H8");
    let Knight1 = createPiece(board, "♘", "White", "Knight", "A2");
    let Knight2 = createPiece(board, "♘", "White", "Knight", "A7");
    let Knight3 = createPiece(board, "♞", "Black", "Knight", "H2");
    let Knight4 = createPiece(board, "♞", "Black", "Knight", "H7");
    let Bishop1 = createPiece(board, "♗", "White", "Bishop", "A3");
    let Bishop2 = createPiece(board, "♗", "White", "Bishop", "A6");
    let Bishop3 = createPiece(board, "♝", "Black", "Bishop", "H3");
    let Bishop4 = createPiece(board, "♝", "Black", "Bishop", "H6");
    let Queen1 = createPiece(board, "♕", "White", "Queen", "A4");
    let Queen2 = createPiece(board, "♛", "Black", "Queen", "H4");
    let King1 = createPiece(board, "♔", "White", "King", "A5");
    let King2 = createPiece(board, "♚", "Black", "King", "H5");
};


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

    board = new ChessBoard
    populateBoard(board)
    console.log(board);
});