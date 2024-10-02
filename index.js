const container = document.querySelector(".container");

for (let i = 0;  i < 256; i++) {
    let squares = document.createElement("div");

    squares.style.border = "1px solid black";
    squares.style.width = "14px";
    squares.style.height = "14px";

    squares.addEventListener("mouseover", () => {
        squares.style.backgroundColor = "blue";
    })
    
    squares.addEventListener("click", () => {
        squares.style.backgroundColor = "";
    })

    container.appendChild(squares);

}