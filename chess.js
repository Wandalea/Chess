class ChessPiece{
    constructor(symbol, side, type, position){
        this.symbol = symbol;
        this.side = side;
        this.type = type;
        this.position = position;
        this.isCaptured = false;
    };

    moveTo(newPosition){
        document.getElementById(this.position).textContent = null
        this.position = newPosition;
        document.getElementById(newPosition).textContent = this.symbol
    };

    capture(){
        this.isCaptured = true;
        this.position = this.moveTo("0");
    };
};

class ChessBoard{
    constructor(){
        this.board = []
    }

    addToBoard(piece){
        this.board.push(piece)
    }
}

function createPiece(symbol, side, type, position){
    new_piece = new ChessPiece(symbol, side, type, position)
    board_letters = ['A','B','C','D','E','F','G','H']
    board_numbers = [1,2,3,4,5,6,7,8]
    random_position = (
        board_letters[Math.floor(Math.random()*8)] + 
        board_numbers[Math.floor(Math.random()*8)]
    )
    console.log(random_position);
    new_piece.moveTo(random_position)
    return new_piece
};


function populateBoard(board){
    let k = 'Pawn';
    let i = 0;

    // Create White Pawns
    for (i = 1; i < 9; i++) {
        piece = eval('let ' + k + i + '= ' + 'createPiece("♙", "White", "Pawn", "B" + i)')
    }
    // Create White Rooks
    let Rook1 = createPiece("♖", "White", "Rook", "A1")
    let Rook2 = createPiece("♖", "White", "Rook", "A8")
    // Create White Knights
    let Knight1 = createPiece("♘", "White", "Knight", "A2")
    let Knight2 = createPiece("♘", "White", "Knight", "A7")
    // Create White Bishops
    let Bishop1 = createPiece("♗", "White", "Bishop", "A3")
    let Bishop2 = createPiece("♗", "White", "Bishop", "A6")
    // Create White Queen
    let Queen1 = createPiece("♕", "White", "Queen", "A4")
    // Create White King
    let King1 = createPiece("♔", "White", "King", "A5")


    // Create Black Pawns
    for (i = 1; i < 9; i++) {
        piece = eval('let ' + k + i + '= ' + 'createPiece("♟", "Black", "Pawn", "G" + i)')
    }
    // Create Black Rooks
    let Rook3 = createPiece("♜", "Black", "Rook", "H1")
    let Rook4 = createPiece("♜", "Black", "Rook", "H8")
    // Create Black Knights
    let Knight3 = createPiece("♞", "Black", "Knight", "H2")
    let Knight4 = createPiece("♞", "Black", "Knight", "H7")
    // Create Black Bishops
    let Bishop3 = createPiece("♝", "Black", "Bishop", "H3")
    let Bishop4 = createPiece("♝", "Black", "Bishop", "H6")
    // Create Black Queen
    let Queen2 = createPiece("♛", "Black", "Queen", "H4")
    // Create Black King
    let King2  = createPiece("♚", "Black", "King", "H5")
    
};



document.addEventListener("DOMContentLoaded", () => {
    let previousPiece
    let previousTarget
    let previousColor
    const chessSquare = document.querySelectorAll('.chess-square');
    
    chessSquare.forEach(square => {
        square.addEventListener('click', function(event) {
            const textContent = event.currentTarget.textContent; 
            const clickedId = event.currentTarget.id; 
            console.log(`Clicked Square: ${clickedId}`);
          
            if (event.currentTarget === event.previousTarget){
                console.log("Invalid move");
                
            }

            else if(!textContent && previousPiece){
                event.currentTarget.textContent = previousPiece;
                previousPiece = "";

                previousTarget.style.background = previousColor;
                previousColor = getComputedStyle(event.currentTarget).getPropertyValue("background-color");
                previousTarget.textContent = "";
            }
            
            else {
                previousColor = getComputedStyle(event.currentTarget).getPropertyValue("background-color");
                square.style.background = "green";

                previousPiece = textContent;
                previousTarget = event.currentTarget;
            };
        });
  });

  board = new ChessBoard
  populateBoard(board)

});
