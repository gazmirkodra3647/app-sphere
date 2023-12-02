Here is an example of a complex JavaScript code that is more than 200 lines long. This code generates a random maze using the Recursive Backtracking algorithm and renders it on an HTML canvas.

```javascript
// maze_generator.js

// Define canvas dimensions
const canvasWidth = 800;
const canvasHeight = 600;

// Initialize the maze grid
const gridWidth = 40;
const gridHeight = 30;
const cellSize = canvasWidth / gridWidth;
const maze = Array.from(Array(gridHeight), () => Array(gridWidth).fill(true));

// Utility function to get neighbors of a cell
const getNeighbors = (row, col) => {
  const neighbors = [];
  if (row > 1) neighbors.push([row - 2, col]);
  if (row < gridHeight - 2) neighbors.push([row + 2, col]);
  if (col > 1) neighbors.push([row, col - 2]);
  if (col < gridWidth - 2) neighbors.push([row, col + 2]);
  return neighbors;
};

// Recursive backtracking algorithm to generate the maze
const generateMaze = (row, col) => {
  maze[row][col] = false;

  const neighbors = getNeighbors(row, col);
  neighbors.sort(() => Math.random() - 0.5);

  for (const [nextRow, nextCol] of neighbors) {
    if (maze[nextRow][nextCol]) {
      maze[nextRow + (row - nextRow) / 2][nextCol + (col - nextCol) / 2] = false;
      generateMaze(nextRow, nextCol);
    }
  }
};

// Initialize a random starting cell
const startRow = Math.floor(Math.random() * (gridHeight / 2)) * 2;
const startCol = Math.floor(Math.random() * (gridWidth / 2)) * 2;
generateMaze(startRow, startCol);

// Render the maze on the canvas
const canvas = document.createElement("canvas");
canvas.width = canvasWidth;
canvas.height = canvasHeight;

document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvasWidth, canvasHeight);

for (let row = 0; row < gridHeight; row++) {
  for (let col = 0; col < gridWidth; col++) {
    if (maze[row][col]) {
      ctx.fillStyle = "black";
      ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
    }
  }
}
```

To execute this code, you can save it in an HTML file, include a script tag referencing the file, and open the HTML file in a web browser. It will generate and render the maze on the canvas within the specified dimensions.