const body = document.querySelector("body");

let gridDimension = 16; //16 by default

const setDimensionBtn = document.createElement("button");
setDimensionBtn.id = "set-dimension-btn";
setDimensionBtn.innerText = "Set Dimension of Grid";
setDimensionBtn.addEventListener("click", function(e){
    gridDimension = prompt("Set the dimension of the grid (at least 1)");
    createGrid(gridDimension);
})
body.appendChild(setDimensionBtn);

const container = document.createElement("div");
container.id = "container";
body.appendChild(container);

const row = document.createElement("div");
row.className = "row";

const cell = document.createElement("div");
cell.className = "cell";

function randomRGB(){
    let rgb = new Array(3).fill(1);
    return rgb.map(val => Math.floor(Math.random()*255));
}

function createGrid(gridDimension){
    container.replaceChildren();
    for (let i = 0; i < gridDimension; i++){
    const newRow = row.cloneNode(true);
    for (let j = 0; j < gridDimension ; j++){
        const _ = cell.cloneNode(true);
        _.addEventListener("mouseover", function (e){
            let rgb = randomRGB();
            this.style["background-color"]=`rgb(${rgb[0]},${rgb[1]}, ${rgb[2]})`;
        });
        newRow.appendChild(_);
    }
    container.appendChild(newRow);
    }
}

createGrid(gridDimension);

const clearBtn = document.createElement("button");
clearBtn.id = "clearBtn";
clearBtn.innerText = "Clear Grid";
body.appendChild(clearBtn);

clearBtn.addEventListener("click", function(e) {
    cellList = document.querySelectorAll(".cell");
    cellList.forEach (function(e) {
        e.style["background-color"] = "";
    })
});