// TOP LEVEL CODE
// Populate the game space with a grid on page load
const game_space = document.getElementById('game_space');
let gridSize = 10;
makeGrid(gridSize);

//Test cases
document.getElementById(2).classList.add('active');
document.getElementById(13).classList.add('active');
document.getElementById(22).classList.add('active');
document.getElementById(24).classList.add('active');
document.getElementById(25).classList.add('active');
// End test cases
let state = boardstate();

function makeGrid(grid){
    let n = 1;
    const row = [grid];
    const cell = [grid*grid];
    for (let i = 0; i < grid; i++){
        row[i] = document.createElement('div');
        row[i].classList.add('row');
        game_space.appendChild(row[i]);
        for (let j = 0; j < grid; j++){
            cell[n] = document.createElement('div');
            row[i].appendChild(cell[n]);
            cell[n].classList.add('cell')
            cell[n].id = n;
            cell[n].setAttribute("onclick","changestatus("+n+")")
            n++;
        }
    }
}

function boardstate(){
    const allCells = document.querySelectorAll(".cell");
    let cellsArr = [... allCells];
    let activeCells = [];
    for (i in cellsArr){
        if (cellsArr[i].classList.contains('active')){
            activeCells.push(parseInt(+i+1));
        }
    }
    return(activeCells);
}

function changestatus(cellid){
    document.getElementById(cellid).classList.toggle('active');
}

function gamelogic(grid,boardstate){
const cellCount = grid*grid;
const newboardlive=[];
const newboarddie=[];
for (let i = 1; i <= cellCount; i++){
    let neighbor = 0;
    if(boardstate.includes(+i-1)){neighbor++};
    if(boardstate.includes(+i+1)){neighbor++};
    if(boardstate.includes(+i-grid)){neighbor++};
    if(boardstate.includes(+i-grid+1)){neighbor++};
    if(boardstate.includes(+i-grid-1)){neighbor++};
    if(boardstate.includes(+i+grid)){neighbor++};
    if(boardstate.includes(+i+grid+1)){neighbor++};
    if(boardstate.includes(+i+grid-1)){neighbor++};

    console.log(neighbor);
    if (neighbor<=1 || neighbor>=4){newboarddie.push(i)};
    if (neighbor===3){newboardlive.push(parseInt(i))};
}
console.log(boardstate);
console.log(newboardlive);
console.log(newboarddie);
}

