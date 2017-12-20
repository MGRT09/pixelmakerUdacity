//Global variables
var colorValue = "";
// When size is submitted by the user, call makeGrid()
function makeGrid() {
//console.log("Test" + input_height + input_width);
var x, y;
var tableGrid = "";
cols = document.getElementById("input_height").value;
rows = document.getElementById("input_width").value;
//console.log(cols, rows);
//Create the grid
    
    for (x = 0; x < cols; x++){
        tableGrid += "<tr>";
        for (y = 0; y < rows; y++){
            tableGrid += "<td class=gridSquare>&nbsp;</td>";
        }
        tableGrid += "</tr>";
    }
   $("#drawGrid").html(tableGrid);
    pickCell();
}

// Color selection
function colorSelect() {
    colorValue = document.getElementById('colorPicker').value;
    }


//Function to allow user to select a cell within the grid
function pickCell(){
  var table = document.getElementById('drawGrid');
    if (table != null) {
        for (var i = 0; i < table.rows.length; i++) {
            for (var j = 0; j < table.rows[i].cells.length; j++)
            table.rows[i].cells[j].onclick = function() {
                tableText(this);
            };
        }
    }

    function tableText(tableCell) {
        
        tableCell.setAttribute("BGCOLOR", colorValue);
    }
}


