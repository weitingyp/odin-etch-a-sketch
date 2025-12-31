const body = document.querySelector("body");

const container = document.createElement("div");
container.id = "container";
container.style["display"] = "flex";
container.style["flex-direction"] = "column";
body.appendChild(container);

const gridDimension = 16;

const row = document.createElement("div");
row.className = "row";
row.style["display"] = "flex";
row.style["flex-direction"] = "row";

const cell = document.createElement("div");
cell.className = "cell";

for (let i = 0; i < gridDimension; i++){
    const newRow = row.cloneNode(true);
    for (let j = 0; j < gridDimension ; j++){
        const _ = cell.cloneNode(true);
        _.innerText = `${i},${j}`;
        newRow.appendChild(_);
    }
    container.appendChild(newRow);
}