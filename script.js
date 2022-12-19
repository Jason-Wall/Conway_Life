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
for (let i = 0; i < grid; i++){
    const row = game_space.appendChild(document.createElement('div'));
    for (let j = 0; j < grid; j++){
        const cell = row.appendChild(document.createElement('div'));
    }
}
}


