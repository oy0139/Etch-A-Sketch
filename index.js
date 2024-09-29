const container = document.querySelector(".container");

for (let i = 0;  i < 256; i++) {
    let squares = document.createElement("div");

    squares.style.border = "2px solid black";
    squares.style.width = "14px";
    squares.style.height = "14px";

    container.appendChild(squares);
}


