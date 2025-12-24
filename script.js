var rows = 3;
var columns = 3;
var curTile;
var otherTile;
var turns =0;
//var imgOrder = ["1","2","3","4","5","6","7","8","9"];
var imgOrder = ["4","2","8","5","1","6","7","9","3"];


window.onload = function() {
    for (let r=0; r < rows; r++) {
        for (let c=0; c < columns; c++) {

            //<img>
            let tile = document.createElement("img");
            debugger;
            tile.id = r.toString() + "-" + c.toString();
            tile.src = "grid-tiles/" + imgOrder.shift() + ".jpg";

            // drag function
            tile.addEventListener("dragstart", dragStart); //click an image to drag
            tile.addEventListener("dragover", dragOver); //moving image around while clicked
            tile.addEventListener("dragenter", dragEnter); //dragging image onto another one
            tile.addEventListener("dragleave", dragLeave); //dragged image leaving another image
            tile.addEventListener("drop", dragDrop); //drag an image over another image, drop the image
            tile.addEventListener("dragend", dragEnd); //after drag drop, swap the two tiles

            document.getElementById("board").append(tile);
        }
    }
}

