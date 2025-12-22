var rows = 5;
var columns = 5;

var currTile;
var otherTile;

var turns = 0; // keeps track of the number of turns

window.onload = function() {
    // initialize the 5x5 game board
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
        // img tag
            let tile = document.createElement("img");
            tile.src = ".avocado.jpg";

            document.getElementById("board").append(tile);
        }
    }

    //pieces
    let pieces = [];
    for (let i=1; i <= rows*columns; i ++) {
        pieces.push(i.toString()); // put 1 to 25 into the array (puzzle image names)
    }

    for (let i =0; i < pieces.length; i++) {
        let tile = document.createElement("img");
        tile.src = "avocado" + pieces[i] + ".jpg";
        document.getElementById("pieces").append(tile);
    }
}