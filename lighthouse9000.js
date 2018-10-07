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
    
function countRows(){
  return GRID.length;
}

function countColumns(){
  return GRID[0].length;
}

function gridSize(){
  return countColumns() + ' x ' + countRows();
}

function totalCells(){
  return countRows() * countColumns();
}

function convertColumn(coordinate){
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return letters.indexOf(coordinate.charAt(0));
}

function lightCell(coordinate){
  return GRID[coordinate.charAt(1)-1][convertColumn(coordinate)];
}

function isRock(coordinate){
  return lightCell(coordinate) == '^';
}