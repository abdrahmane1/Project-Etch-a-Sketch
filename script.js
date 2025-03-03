const container = document.querySelector(".container");
const gridNumber = document.querySelector(".btn1");
const reset = document.querySelector(".reset");

let gridSize = 16;

function getGridSize() {
  gridSize = parseInt(
    window.prompt("Enter number of grid (less then 100): "),
    10
  );
  if (gridSize > 100 || gridSize < 1) {
    alert("Please enter a number between 1 and 100");
    getGridSize();
  }
  createGrid(gridSize);
}

function createGrid(gridSize) {
  container.innerHTML = "";
  for (let i = 0; i < gridSize * gridSize; i++) {
    let cell = document.createElement("div");
    cell.className = "grid-item";
    cell.style.width = `calc(100% / ${gridSize})`;
    cell.style.height = `calc(100% / ${gridSize})`;
    container.appendChild(cell);

    cell.addEventListener("mouseover", () => {
      const red = Math.floor(Math.random() * 255);
      const green = Math.floor(Math.random() * 255);
      const blue = Math.floor(Math.random() * 255);

      cell.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    });

    /*
    cell.addEventListener("mouseout", () => {
      cell.style.backgroundColor = "";
    });
    */

    reset.addEventListener("click", () => {
      cell.style.backgroundColor = "";
    });
  }
}

createGrid(gridSize);

gridNumber.addEventListener("click", getGridSize);
