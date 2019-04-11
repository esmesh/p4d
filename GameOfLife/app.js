const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let rowSize,
  colSize = 0;

let rowOffset = 0;
let colOffset = 0;

let spawnSize = 3;
let Play = false; //Pause Button
let cyclic = true; //Whether or not edges wrap
let single = false; //Whether or not a single cell is added instead of 9
let rule = 0; //Which rule number (from the list of predefined customs)

//Array holding the list of predefined rules that use the > < == format for constraints
let RuleConstraints = [
  [3, 2, 3],
  [8, 3, 2],
  [8, 4, 3],  
  [8, 3, 1],
  [7, 3, 1],
  [7, 4, 1],
  [7, 2, 5]
];

let bCity = false; //Rule constraint that handles the city case
let bStatic = false; //Rule constraint that handles the static case

// Our 2D grid data
let cells, nextGen;

//colour palette for generation tracking
let colours = [
  "#E70000",
  "#FF8C00",
  "#FFEF00",
  "#00811f",
  "#0044FF",
  "#760089"
];

let w = window.innerWidth;
let h = window.innerHeight;
let cellWidth = 5;

// Function for creating Grid objects using Object Literal
let createGrid = (rows, cols) => {
  // create 2d array filled with 0's
  let data = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => 0)
  );
  //Hold the date for tracking how old the cell is
  let genNumber = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => 0)
  );
  let result = { rows, cols, data, genNumber };
  
  
  
  return result;
};

//Function for resizing the canvas and the grid based on screen size
function updateCanvasSize() {
  w = window.innerWidth;
  h = window.innerHeight;
  canvas.width = w;
  canvas.height = h;

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, w, h);

  let rows = Math.floor(h / cellWidth);
  let cols = Math.floor(w / cellWidth);
  
  

  //Store the row and column size so the screen can be wiped easily
  rowSize = rows;
  colSize = cols;
  
  rowOffset = Math.floor((rowSize / 2) - 10);
  colOffset = Math.floor((colSize / 2) - 16);
  
  cells = createGrid(rows, cols);
  nextGen = createGrid(rows, cols);

  for(let y = 0; y < cells.rows; y++) {
    let row = cells.data[y];
    for(let i = 0; i < row.length; i++) {
      row[i] = 0;
    }
  }
  // PRESS
      if(true)
        {
cells.data[rowOffset][colOffset + 0] = 1;
cells.data[rowOffset][colOffset + 1] = 1;
cells.data[rowOffset][colOffset + 2] = 1;
cells.data[rowOffset][colOffset + 3] = 1;
cells.data[rowOffset][colOffset + 4] = 1;


cells.data[rowOffset][colOffset + 7] = 1;
cells.data[rowOffset][colOffset + 8] = 1;
cells.data[rowOffset][colOffset + 9] = 1;
cells.data[rowOffset][colOffset + 10] = 1;
cells.data[rowOffset][colOffset + 11] = 1;


cells.data[rowOffset][colOffset + 14] = 1;
cells.data[rowOffset][colOffset + 15] = 1;
cells.data[rowOffset][colOffset + 16] = 1;
cells.data[rowOffset][colOffset + 17] = 1;
cells.data[rowOffset][colOffset + 18] = 1;


cells.data[rowOffset][colOffset + 21] = 1;
cells.data[rowOffset][colOffset + 22] = 1;
cells.data[rowOffset][colOffset + 23] = 1;
cells.data[rowOffset][colOffset + 24] = 1;
cells.data[rowOffset][colOffset + 25] = 1;


cells.data[rowOffset][colOffset + 28] = 1;
cells.data[rowOffset][colOffset + 29] = 1;
cells.data[rowOffset][colOffset + 30] = 1;
cells.data[rowOffset][colOffset + 31] = 1;
cells.data[rowOffset][colOffset + 32] = 1;

cells.data[rowOffset + 1][colOffset + 0] = 1;
cells.data[rowOffset +1][colOffset + 4] = 1;
cells.data[rowOffset +1][colOffset + 7] = 1;
cells.data[rowOffset +1][colOffset + 11] = 1;
cells.data[rowOffset +1][colOffset + 14] = 1;
cells.data[rowOffset +1][colOffset + 21] = 1;
cells.data[rowOffset +1][colOffset + 28] = 1;

cells.data[rowOffset +2][colOffset + 0] = 1;
cells.data[rowOffset +2][colOffset + 4] = 1;
cells.data[rowOffset +2][colOffset + 7] = 1;
cells.data[rowOffset +2][colOffset + 11] = 1;
cells.data[rowOffset +2][colOffset + 14] = 1;
cells.data[rowOffset +2][colOffset + 21] = 1;
cells.data[rowOffset +2][colOffset + 28] = 1;

cells.data[rowOffset +3][colOffset + 0] = 1;
cells.data[rowOffset +3][colOffset + 4] = 1;
cells.data[rowOffset +3][colOffset + 7] = 1;
cells.data[rowOffset +3][colOffset + 11] = 1;
cells.data[rowOffset +3][colOffset + 14] = 1;
cells.data[rowOffset +3][colOffset + 21] = 1;
cells.data[rowOffset +3][colOffset + 28] = 1;

cells.data[rowOffset +4][colOffset + 0] = 1;
cells.data[rowOffset +4][colOffset + 1] = 1;
cells.data[rowOffset +4][colOffset + 2] = 1;
cells.data[rowOffset +4][colOffset + 3] = 1;
cells.data[rowOffset +4][colOffset + 4] = 1;


cells.data[rowOffset +4][colOffset + 7] = 1;
cells.data[rowOffset +4][colOffset + 8] = 1;
cells.data[rowOffset +4][colOffset + 9] = 1;
cells.data[rowOffset +4][colOffset +10] = 1;
cells.data[rowOffset +4][colOffset +11] = 1;


cells.data[rowOffset +4][colOffset +14] = 1;
cells.data[rowOffset +4][colOffset +15] = 1;
cells.data[rowOffset +4][colOffset +16] = 1;
cells.data[rowOffset +4][colOffset +17] = 1;
cells.data[rowOffset +4][colOffset +18] = 1;


cells.data[rowOffset +4][colOffset +21] = 1;
cells.data[rowOffset +4][colOffset +22] = 1;
cells.data[rowOffset +4][colOffset +23] = 1;
cells.data[rowOffset +4][colOffset +24] = 1;
cells.data[rowOffset +4][colOffset +25] = 1;


cells.data[rowOffset +4][colOffset +28] = 1;
cells.data[rowOffset +4][colOffset +29] = 1;
cells.data[rowOffset +4][colOffset +30] = 1;
cells.data[rowOffset +4][colOffset +31] = 1;
cells.data[rowOffset +4][colOffset +32] = 1;

cells.data[rowOffset +5][colOffset +0] = 1;
cells.data[rowOffset +5][colOffset +7] = 1;
cells.data[rowOffset +5][colOffset +8] = 1;
cells.data[rowOffset +5][colOffset +14] = 1;
cells.data[rowOffset +5][colOffset +25] = 1;
cells.data[rowOffset +5][colOffset +32] = 1;

cells.data[rowOffset +6][colOffset +0] = 1;
cells.data[rowOffset +6][colOffset +7] = 1;
cells.data[rowOffset +6][colOffset +9] = 1;
cells.data[rowOffset +6][colOffset +14] = 1;
cells.data[rowOffset +6][colOffset +25] = 1;
cells.data[rowOffset +6][colOffset +32] = 1;

cells.data[rowOffset +7][colOffset +0] = 1;
cells.data[rowOffset +7][colOffset +7] = 1;
cells.data[rowOffset +7][colOffset +10] = 1;
cells.data[rowOffset +7][colOffset +14] = 1;
cells.data[rowOffset +7][colOffset +25] = 1;
cells.data[rowOffset +7][colOffset +32] = 1;

cells.data[rowOffset +8][colOffset +0] = 1; 
cells.data[rowOffset +8][colOffset +7] = 1;
cells.data[rowOffset +8][colOffset +11] = 1;
cells.data[rowOffset +8][colOffset +14] = 1;
cells.data[rowOffset +8][colOffset +15] = 1; 
cells.data[rowOffset +8][colOffset +16] = 1; 
cells.data[rowOffset +8][colOffset +17] = 1; 
cells.data[rowOffset +8][colOffset +18] = 1;
cells.data[rowOffset +8][colOffset +21] = 1;
cells.data[rowOffset +8][colOffset +22] = 1;
cells.data[rowOffset +8][colOffset +23] = 1;
cells.data[rowOffset +8][colOffset +24] = 1;
cells.data[rowOffset +8][colOffset +25] = 1;
cells.data[rowOffset +8][colOffset +28] = 1;
cells.data[rowOffset +8][colOffset +29] = 1;
cells.data[rowOffset +8][colOffset +30] = 1;
cells.data[rowOffset +8][colOffset +31] = 1;
cells.data[rowOffset +8][colOffset +32] = 1;
    
        }
  
  //START
  if(true)
    {
cells.data[rowOffset +12][colOffset +0] = 1;
cells.data[rowOffset +12][colOffset +1] = 1;
cells.data[rowOffset +12][colOffset +2] = 1;
cells.data[rowOffset +12][colOffset +3] = 1;
cells.data[rowOffset +12][colOffset +4] = 1;


cells.data[rowOffset +12][colOffset +7] = 1;
cells.data[rowOffset +12][colOffset +8] = 1;
cells.data[rowOffset +12][colOffset +9] = 1;
cells.data[rowOffset +12][colOffset +10] = 1;
cells.data[rowOffset +12][colOffset +11] = 1;


cells.data[rowOffset +12][colOffset +14] = 1;
cells.data[rowOffset +12][colOffset +15] = 1;
cells.data[rowOffset +12][colOffset +16] = 1;
cells.data[rowOffset +12][colOffset +17] = 1;
cells.data[rowOffset +12][colOffset +18] = 1;


cells.data[rowOffset +12][colOffset +21] = 1;
cells.data[rowOffset +12][colOffset +22] = 1;
cells.data[rowOffset +12][colOffset +23] = 1;
cells.data[rowOffset +12][colOffset +24] = 1;
cells.data[rowOffset +12][colOffset +25] = 1;


cells.data[rowOffset +12][colOffset +28] = 1;
cells.data[rowOffset +12][colOffset +29] = 1;
cells.data[rowOffset +12][colOffset +30] = 1;
cells.data[rowOffset +12][colOffset +31] = 1;
cells.data[rowOffset +12][colOffset +32] = 1;
      
cells.data[rowOffset +13][colOffset +0] = 1;
cells.data[rowOffset +13][colOffset +9] = 1;
cells.data[rowOffset +13][colOffset +14] = 1;
cells.data[rowOffset +13][colOffset +18] = 1;
cells.data[rowOffset +13][colOffset +21] = 1;
cells.data[rowOffset +13][colOffset +25] = 1;
cells.data[rowOffset +13][colOffset +30] = 1;
      
cells.data[rowOffset +14][colOffset +0] =1;
cells.data[rowOffset +14][colOffset +9] =1;
cells.data[rowOffset +14][colOffset +14] =1;
cells.data[rowOffset +14][colOffset +18] =1;
cells.data[rowOffset +14][colOffset +21] =1;
cells.data[rowOffset +14][colOffset +25] =1;
cells.data[rowOffset +14][colOffset +30] =1;
      
cells.data[rowOffset +15][colOffset +0] = 1;
cells.data[rowOffset +15][colOffset +9] = 1;
cells.data[rowOffset +15][colOffset +14] = 1;
cells.data[rowOffset +15][colOffset +18] = 1;
cells.data[rowOffset +15][colOffset +21] = 1;
cells.data[rowOffset +15][colOffset +25] = 1;
cells.data[rowOffset +15][colOffset +30] = 1;
      
cells.data[rowOffset +16][colOffset +0] = 1;
cells.data[rowOffset +16][colOffset +1] = 1;
cells.data[rowOffset +16][colOffset +2] = 1;
cells.data[rowOffset +16][colOffset +3] = 1;
cells.data[rowOffset +16][colOffset +4] = 1;
cells.data[rowOffset +16][colOffset +9] = 1;
      
cells.data[rowOffset +16][colOffset +14] = 1;
cells.data[rowOffset +16][colOffset +15] = 1;
cells.data[rowOffset +16][colOffset +16] = 1;
cells.data[rowOffset +16][colOffset +17] = 1;
cells.data[rowOffset +16][colOffset +18] = 1;
      
cells.data[rowOffset +16][colOffset +21] = 1;
cells.data[rowOffset +16][colOffset +22] = 1;
cells.data[rowOffset +16][colOffset +23] = 1;
cells.data[rowOffset +16][colOffset +24] = 1;
cells.data[rowOffset +16][colOffset +25] = 1;
cells.data[rowOffset +16][colOffset +30] = 1;

cells.data[rowOffset +17][colOffset +4] = 1;
cells.data[rowOffset +17][colOffset +9] = 1;
cells.data[rowOffset +17][colOffset +14] = 1;
cells.data[rowOffset +17][colOffset +18] = 1;
cells.data[rowOffset +17][colOffset +21] = 1;
cells.data[rowOffset +17][colOffset +22] = 1;
cells.data[rowOffset +17][colOffset +30] = 1;

cells.data[rowOffset +18][colOffset +4] = 1;
cells.data[rowOffset +18][colOffset +9] = 1;
cells.data[rowOffset +18][colOffset +14] = 1;
cells.data[rowOffset +18][colOffset +18] = 1;
cells.data[rowOffset +18][colOffset +21] = 1;
cells.data[rowOffset +18][colOffset +23] = 1;
cells.data[rowOffset +18][colOffset +30] = 1;
      
cells.data[rowOffset +19][colOffset +4] = 1;
cells.data[rowOffset +19][colOffset +9] = 1;
cells.data[rowOffset +19][colOffset +14] = 1;
cells.data[rowOffset +19][colOffset +18] = 1;
cells.data[rowOffset +19][colOffset +21] = 1;
cells.data[rowOffset +19][colOffset +24] = 1;
cells.data[rowOffset +19][colOffset +30] = 1;
      
cells.data[rowOffset +20][colOffset +0] = 1;
cells.data[rowOffset +20][colOffset +1] = 1;
cells.data[rowOffset +20][colOffset +2] = 1;
cells.data[rowOffset +20][colOffset +3] = 1;
cells.data[rowOffset +20][colOffset +4] = 1;
cells.data[rowOffset +20][colOffset +9] = 1;
cells.data[rowOffset +20][colOffset +14] = 1;
cells.data[rowOffset +20][colOffset +18] = 1;
cells.data[rowOffset +20][colOffset +21] = 1;
cells.data[rowOffset +20][colOffset +25] = 1;
cells.data[rowOffset +20][colOffset +30] = 1;
     
      
    }
  
}
updateCanvasSize();

/* Function for processing rule 
   3x3 Neighborhood of Cells */
function processRule(grid, row, col) {
  let currentCell = grid.data[row][col];
  let currentGen = grid.genNumber[row][col];
  let data = grid.data;

  // 1. Count neighbors
  let liveNeighbors = 0;

  //If cell is not on the borders of the map, use the standard set for data
  if (!cyclic) {
    if(row - 1 >= 0 && col - 1>= 0) 
    {
    liveNeighbors += data[row - 1][col - 1];
    liveNeighbors += data[row - 1][col];
    liveNeighbors += data[row - 1][col + 1];
    }
    
    if(col - 1 >= 0 && col + 1 <= colSize)
      {
    liveNeighbors += data[row][col - 1];
    liveNeighbors += data[row][col + 1];
      }
    if(row + 1  < rowSize && col +1 < colSize){
    liveNeighbors += data[row + 1][col - 1];
    liveNeighbors += data[row + 1][col];
    liveNeighbors += data[row + 1][col + 1];
    }
  } 
  
  //Cyclical Edge *clean* version code 
  //Provided by Dr. Steven Yi
  else{
  let row0 = row - 1, row1 = row + 1;
  let col0 = col - 1, col1 = col + 1;
  
  if(row0 < 0) {row0 = rowSize - 1;}
  if(row1 >= rowSize) {row1 = 0;}
  if(col0 < 0) {col0 = colSize - 1;}
  if(col1 >= colSize) {col1 = 0;}
  
  liveNeighbors += grid.data[row0][col0];
  liveNeighbors += grid.data[row0][col];
  liveNeighbors += grid.data[row0][col1];
  
  liveNeighbors += grid.data[row][col0];
  liveNeighbors += grid.data[row][col1];
  
  liveNeighbors += grid.data[row1][col0];
  liveNeighbors += grid.data[row1][col];
  liveNeighbors += grid.data[row1][col1];
  }
  let result = currentCell;

  // 2. Apply rules
  //a. >8 < 3 == 2 : circuit
  //b. >8 < 4 == 3 : coral
  //c. >4 <2 ==3 : life
  //d.0 ==1 : Mosaic
  //d.1 > 8 < 3 == 1 : mosaic
  // d.2. >7 <3 ==1 : mosaic alt
  //d.3 >7 <4 ==1 : mosaic stars
  //e. >7 <2 ==5 : blotter art

  //Only apply these rules for the  > < == format style sets
  //Colour swapping doesn't exactly follow the system you had us use, but rather kept it as a seperate field from the 0-1 range and applied it only to colour and not to actual life
  if (!bCity && !bStatic) {
    if (currentCell == 1) {
      if (
        liveNeighbors > RuleConstraints[rule][0] ||
        liveNeighbors < RuleConstraints[rule][1]
      ) {
        result = 0;
      } 
      else {
        currentGen++;
        if (currentGen > 5) currentGen = 5;
        cells.genNumber[row][col] = currentGen;
      } // cells move through the colour palette as they age
    } 
    else {
      if (liveNeighbors == RuleConstraints[rule][2]) {
        result = 1;

        cells.genNumber[row][col] = 0; //new born cells are reset to red
      }
    }
  }

  //f. ==7 ==2 ==3 : city
  //g. ==5 ==3 ==3 : static growth

  else
    {
      if (currentCell == 1) 
      {
        if ((liveNeighbors == 7 || liveNeighbors == 2) && bCity) 
        {
          result = 0;
          
        }
        else if((liveNeighbors == 5 || liveNeighbors == 3) && bStatic)
          {
            result = 0;
          }
        else
        {
          currentGen++;
          if (currentGen > 5) currentGen = 5;
          cells.genNumber[row][col] = currentGen;
        } 
      }
      
      else
        {
          if(liveNeighbors == 3)
            {
              result = 1;

             cells.genNumber[row][col] = 0; //new born cells are reset to red
            }
        }
    }

  return result;
}

function computeNextGeneration() {
  for (y = 0; y <= cells.rows - 1; y++) {
    for (x = 0; x <= cells.cols - 1; x++) {
      nextGen.data[y][x] = processRule(cells, y, x);
    }
  }

  // swap grid objects
  let temp = cells;
  cells = nextGen;
  nextGen = temp;
}

function draw(timeStamp) {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, w, h);

  // draw current generation of cells
  for (let y = 0; y < cells.rows - 1; y++) {
    for (let x = 0; x < cells.cols - 1; x++) {
      ctx.fillStyle = colours[cells.genNumber[y][x]];

      if (cells.data[y][x] == 1) {
        ctx.fillRect(x * cellWidth, y * cellWidth, cellWidth, cellWidth);
      }
    }
  }
  
  for(let i = 0; i < rowSize; i++)
    {
     ctx.fillStyle = "#DCDCDC";
     ctx.fillRect(0, i * 5, w, 1);
     
    }
  for(let j = 0; j < colSize; j++)
    {
     ctx.fillStyle = "#DCDCDC";
     ctx.fillRect(j * 5, 0, 1, h);
     
    }
  
  //Simple stopper that holds drawing when paused
  if (Play == true) {
    computeNextGeneration();
  }
}

//spawn a chunk of cells wherever a mouse click occurs
function SpawnCells(x, y) {
  let col = Math.floor(x / cellWidth);
  let row = Math.floor(y / cellWidth);
  
    
 if(!single)
 {
  for(let i = -spawnSize; i <= spawnSize; i++)
    for(let j = -spawnSize; j <= spawnSize; j++){cells.data[row - i][col-j] = (1 - cells.data[row- i][col - j]);}
    
 }
  else
    {cells.data[row][col] = (1-cells.data[row][col]);}
}

/* Code that handles throttling of animation */
let counter = 0;

function animate(t) {
  // use modulus and check to divide the frame rate
  if (counter % 2 == 0) {
    draw();
  }

  counter += 1;
  //check for cyclic
  cyclic = document.getElementById("Cyclical").checked;
  single = document.getElementById("Single").checked;
  requestAnimationFrame(animate);
}

//get Spawn location
function getClickPosition(e) {
  let xPos = Math.floor(e.clientX * 1.0805 );
  let yPos = Math.floor(e.clientY);
  
  
  console.log(xPos);
  
  SpawnCells(xPos, yPos);
  
}

requestAnimationFrame(animate);

window.addEventListener("resize", updateCanvasSize);

//window.addEventListener("click", getClickPosition, false);
document.getElementById("canvas").addEventListener("click", getClickPosition, false);

//Wipe the canvas when Clear is clicked
document.getElementById("clear").addEventListener("click", function() {
  cells = createGrid(rowSize, colSize);
  nextGen = createGrid(rowSize, colSize);

  for (let y = 0; y < cells.rows; y++) {
    let row = cells.data[y];
    for (let i = 0; i < row.length; i++) {
      row[i] = 0;
    }
  }
});

//Randomly position spawned cells on the grib when clicked
document.getElementById("random").addEventListener("click", function() {
  cells = createGrid(rowSize, colSize);
  nextGen = createGrid(rowSize, colSize);

  let percent = document.getElementById("spawnChance").value;
  if(percent < 0){percent = 0;}
  if(percent > 1){percent = 1;}
  
  for (let y = 0; y < cells.rows; y++) {
    let row = cells.data[y];
    for (let i = 0; i < row.length; i++) {
      row[i] = Math.random() < percent ? 1 : 0;
    }
  }
});


//Pause Button
document.getElementById("stop").addEventListener("click", function() {
  Play = false;
});

//Play Button
document.getElementById("start").addEventListener("click", function() {
  Play = true;
});

//Single Frame Step
document.getElementById("next").addEventListener("click", function() {
  computeNextGeneration();
});

// 2. Apply rules
//a. >8 < 3 == 2 : circuit
//b. >8 < 3 == 2 : coral
//c. >4 <2 ==3 : life
//d.0 ==1 : Mosaic
//d.1 > 8 < 3 == 1 : mosaic
// d.2. >7 <3 ==1 : mosaic alt
//d.3 >7 <4 ==1 : mosaic stars
//e. >7 <2 ==5 : blotter art
//f. ==7 ==2 ==3 : city
//g. ==5 ==3 ==3 : static growth

//Code for Determining which rule will be used
document.getElementById("rule").addEventListener("change", function() {
  var radio = document.getElementsByName("rule");
  
  for(let i = 0, length = radio.length; i < length; i++)
    {
      if(radio[i].checked)
        rule = i;
    }
    
  if (rule == 7) {
    bCity = true;
  } else {
    bCity = false;
  }

  if (rule == 8) {
    bStatic = true;
  } else {
    bStatic = false;
  }
  
});

document.getElementById("spawnSize").addEventListener("change", function(){
  spawnSize = document.getElementById("spawnSize").value;
  if(spawnSize < 0) {spawnSize = 0;}
  if(spawnSize > 25){spawnSize = 25;}
  console.log(spawnSize);
});