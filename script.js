const body = document.querySelector("body");

const container = document.createElement("div");
container.id = "container";
body.appendChild(container);

const gridDimension = 16;
const cell = document.createElement("div");
cell.class = "cell";
for (let i = 0; i < gridDimension; i++){
    const row = document.createElement("div");
    row.class = "row";
    for (let j = 0; j < gridDimension ; j++){
            const _ = cell.cloneNode(true);
        _.innerText = `${i},${j}`;
        row.appendChild(_);
    }
    container.appendChild(row);
}