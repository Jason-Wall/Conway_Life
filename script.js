// TOP LEVEL CODE
// Populate the game space with a grid on page load
const game_space = document.getElementById('game_space');
let gridSize = 10;
makeGrid(gridSize);




// function clearGrid(){
// while (game_space.firstChild){
//     game_space.firstChild.remove();
// }
// }

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
        cell[n].textContent = n;
        cell[n].classList.add('cell');
        n++;
    }
}
}


