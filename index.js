const container = document.querySelector(".container");
let squares = document.createElement("div");

container.style.border = "1px solid black";
container.style.height = "300px";
container.style.width = "500px";

squares.style.border = "1px solid black";
squares.style.width = "100px";
squares.style.height = "200px"

container.appendChild(squares);

