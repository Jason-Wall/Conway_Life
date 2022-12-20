// TOP LEVEL CODE
// Populate the game space with a grid on page load
const game_space = document.getElementById('game_space');
let gridSize = 10;
makeGrid(gridSize);

//Test cases
document.getElementById(12).classList.add('active');
document.getElementById(13).classList.add('active');
document.getElementById(22).classList.add('active');
document.getElementById(24).classList.add('active');
document.getElementById(25).classList.add('active');


function makeGrid(grid){
    let n = 0;
    const row = [grid];
    const cell = [grid*grid];
    for (let i = 0; i < grid; i++){
        row[i] = document.createElement('div');
        row[i].classList.add('row');
        game_space.appendChild(row[i]);
        for (let j = 0; j < grid; j++){
            cell[n] = document.createElement('div');
            row[i].appendChild(cell[n]);
            // cell[n].textContent = n;
            cell[n].classList.add('cell')
            cell[n].id = n;
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
            activeCells.push(i);
        }
    }
    return(activeCells);
}





