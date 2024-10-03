const container = document.querySelector(".container");
const button = document.querySelector("button");

let squaresArray = []; 

for (let i = 0; i < 256; i++) {
    let squares = document.createElement("div");
    squares.style.border = "1px solid black";
    squares.style.width = "14px";
    squares.style.height = "14px";

    squares.addEventListener("mouseover", () => {
        if (squares.style.backgroundColor === "blue") {
            squares.style.backgroundColor = "";
        } else {
            squares.style.backgroundColor = "blue";
        }
    });

    container.appendChild(squares);
    squaresArray.push(squares); 
}

let gridCount;

button.addEventListener("click", () => {
    do {
        gridCount = prompt("How many grid squares do you want?");
    } while (isNaN(gridCount) || gridCount === "" || gridCount <= 0 || gridCount > 100);

    squaresArray.forEach(square => {
        container.removeChild(square); //removes previous grid
    });

    squaresArray = [];

    let squareSize = 256 / gridCount;

    for (let i = 0; i < gridCount * gridCount; i++) {
        let updatedSquares = document.createElement("div");
        updatedSquares.style.border = "1px solid black";
        updatedSquares.style.width = `${squareSize}px`;
        updatedSquares.style.height = `${squareSize}px`;
        updatedSquares.style.boxSizing = "border-box"; //include border in sizee

        container.appendChild(updatedSquares);
        squaresArray.push(updatedSquares); 
    }
});
