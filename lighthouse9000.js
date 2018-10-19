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

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

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
  return letters.indexOf(coordinate.charAt(0));
}

// Given the coordinate as an argument, 
// returns the index of the row
function convertRow(coordinate){
  return parseInt(coordinate.substring(1)) - 1;
}

// Returns the contents of a cell given its coordinate
function lightCell(coordinate){
  if (convertColumn(coordinate) > countColumns() - 1
      || convertRow(coordinate) > countRows() - 1){
    return false;
  }

  return GRID[convertRow(coordinate)][convertColumn(coordinate)];
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
  });
  
  return col;
}

// Returns a list of all coordinates in 
// the grid 
function allCoordinates(){
  var coordinates = [];

  for (let i=0; i<countColumns(); i++) {
    for (let j=0; j<countRows();j++){
      coordinates.push(letters.charAt(i) + (j+1));
    }
  }

  return coordinates;
}

// Returns a list of the coordinates 
// of all the rocks in the grid
function allRocks(){
  return allCoordinates().filter(function(coordinate){
    return isRock(coordinate);
  }).sort(function(a,b){
    if (convertRow(a) == convertRow(b)){
      return convertColumn(a) - convertColumn(b);
    }
    return convertRow(a) - convertRow(b);
  });
}

// Returns a list of the coordinates 
// of all the currents in the grid
function allCurrents(){
  return allCoordinates().filter(function(coordinate){
    return isCurrent(coordinate);
  }).sort(function(a,b){
    if (convertRow(a) == convertRow(b)){
      return convertColumn(a) - convertColumn(b);
    }
    return convertRow(a) - convertRow(b);
  });
}

// Returns a list of the coordinates 
// of all the ships in the grid
function allShips(){
  return allCoordinates().filter(function(coordinate){
    return isShip(coordinate);
  }).sort(function(a,b){
    if (convertRow(a) == convertRow(b)){
      return convertColumn(a) - convertColumn(b);
    }
    return convertRow(a) - convertRow(b);
  });
}

// Returns the coordinates of 
// the first rock in the grid
function firstRock(){
  return allRocks()[0];
}

// Returns the coordinates of 
// the first current in the grid
function firstCurrent(){
  return allCurrents()[0];
}

// Returns an array of the coordinates 
// of the ship furthest to the west (left) 
// and east (right) of the grid.
function shipReport(){
  return [allShips().sort().shift(), allShips().sort().pop()];
}

// Returns a number value for how
// dangerous the cell is
function howDangerous(coordinate){
  var dangerDict = {
    "^":100,
    "~":50,
    "v":0,
    "":0
  };
  
  return dangerDict[lightCell(coordinate)];
}

// Returns a pair of percentages:
// percentage of rocks in the grid,
// percentage of currents in the grid
function percentageReport(){
  return [Number(Math.round(allRocks().length / totalCells() * 100 +'e2')+'e-2'),
          Number(Math.round(allCurrents().length / totalCells() * 100+'e2')+'e-2')];
}