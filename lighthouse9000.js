const GRID = [
  ["", "", "", "^", "", "", "", "", "", ""],
  ["", "", "v", "", "~", "", "", "", "", ""],
  ["", "v", "", "", "^", "^", "", "", "", ""],
  ["", "", "", "", "^", "^", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "v", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "^", "~", "~", "", "", "", "^", "", ""],
  ["", "^", "", "~", "~", "", "", "", "", ""],
  ["", "^", "", "", "~", "~", "", "", "", ""],
];

// Returns the number of rows in GRID
function countRows(){
  return GRID.length;
}

// Returns the number of columns in GRID
function countColumns(){
  return GRID[0].length;
}

// Returns the dimensions of GRID
function gridSize(){
  return countColumns() + ' x ' + countRows();
}

// Returns the number of cells in GRID
function totalCells(){
  return countRows() * countColumns();
}

// Given the coordinate as an argument, 
// returns the number of the column
function convertColumn(coordinate){
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return letters.indexOf(coordinate.charAt(0));
}

// Returns the contents of a cell given its coordinate
function lightCell(coordinate){
  return GRID[coordinate.charAt(1)-1][convertColumn(coordinate)];
}

// Returns whether a cell is a rock ('^')
function isRock(coordinate){
  return lightCell(coordinate) == '^';
}

// Returns whether a cell is a currnet ('~')
function isCurrent(coordinate){
  return lightCell(coordinate) == '~';
}

// Returns whether a cell is a ship ('v')
function isShip(coordinate){
  return lightCell(coordinate) == 'v';
}

// Returns a row of the grid
function lightRow(row){
  return GRID[row-1];
}

// Returns a column of the grid as 
// a single array
function lightColumn(colName){
  const colIndex = convertColumn(colName);
  var col = [];
  
  GRID.forEach(function(element){
    col.push(element[colIndex]);
  })
  
  return col;
}