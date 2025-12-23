var rows = 3;
var columns = 3;
var curTile;
var otherTile;
var turns =0;
var imgOrder = ["1","2","3","4","5","6","7","8","9"];

window.onload = function() {
    for (let r=0; r < rows; r++) {
        for (let c=0; c < columns; c++) {

            //<img>
            let tile = document.createElement("img");
            debugger;
            tile.id = r.toString() + "-" + c.toString();
            tile.src = "grid-tiles/" + imgOrder.shift() + ".jpg";

            document.getElementById("board").append(tile);
        }
    }
}