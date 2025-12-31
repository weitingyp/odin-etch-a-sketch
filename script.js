const body = document.querySelector("body");

const container = document.createElement("div");
container.id = "container";
body.appendChild(container);

const gridDimension = 16;

const row = document.createElement("div");
row.className = "row";

const cell = document.createElement("div");
cell.className = "cell";


for (let i = 0; i < gridDimension; i++){
    const newRow = row.cloneNode(true);
    for (let j = 0; j < gridDimension ; j++){
        const _ = cell.cloneNode(true);
        _.addEventListener("mouseover", function (e){
            this.style["background-color"]="black";
        });
        newRow.appendChild(_);
    }
    container.appendChild(newRow);
}

const clearBtn = document.createElement("button");
clearBtn.id = "clearBtn";
clearBtn.innerText = "Clear Grid";
body.appendChild(clearBtn);

cellList = document.querySelectorAll(".cell");

clearBtn.addEventListener("click", function(e) {
    cellList.forEach (function(e) {
        e.style["background-color"] = "";
    })
});