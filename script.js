// TOP LEVEL CODE
// Populate the game space with a grid on page load
const game_space = document.getElementById('game_space');
let gridSize = 10;
makeGrid(gridSize);

//Test cases
document.getElementById("1,1").classList.add('active');
document.getElementById("2,10").classList.add('active');
document.getElementById("5,1").classList.add('active');
document.getElementById("1,4").classList.add('active');
document.getElementById("10,5").classList.add('active');
// End test cases

let state = boardstate();

function makeGrid(grid){
    const row = [grid];
    const cell = [grid,grid];
    for (let i = 1; i <= grid; i++){
        row[i] = document.createElement('div');
        row[i].classList.add('row');
        game_space.appendChild(row[i]);
        for (let j = 1; j <= grid; j++){
            cell[i,j] = document.createElement('div');
            row[i].appendChild(cell[i,j]);
            cell[i,j].classList.add('cell');
            cell[i,j].id = i+","+j;
            cell[i,j].setAttribute("onclick","changestatus("+i+","+j+")");
        }
    }
}

function boardstate(){
    let activeCells = [];
    //Main board:
    for (let i = 1; i <= gridSize; ++i){
        for(let j = 1; j<= gridSize; ++j){
            let cell = document.getElementById(i+","+j);
            if (cell.classList.contains('active')){
                activeCells.push(cell.id);
            }
        }        
    }
    //Boundary conditions - Left
    for (let i = 1; i<=gridSize; i++){
        let testid = i+","+1;
        if (activeCells.includes(testid)){activeCells.push(i+","+(+gridSize+1))};
    }
    //Boundary conditions - Right
    for (let i = 1; i<=gridSize; i++){
        let testid = i+","+gridSize;
        if (activeCells.includes(testid)){activeCells.push(i+","+0)};
    }
    //Boundary conditions - Top
    for (let j = 1; j<=gridSize; j++){
        let testid = 1+","+j;
        if (activeCells.includes(testid)){activeCells.push((+gridSize+1)+","+j)};
    }
       //Boundary conditions - Bottom
       for (let j = 1; j<=gridSize; j++){
        let testid = gridSize+","+j;
        if (activeCells.includes(testid)){activeCells.push(0+","+j)};
    }
    // console.log(activeCells);
    return(activeCells);
}

function changestatus(i,j){
    document.getElementById(i+","+j).classList.toggle('active');
}

function gamelogic(grid,state){
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
    if (neighbor<=1 || neighbor>=4){newboarddie.push(parseInt(i))};
    if (neighbor===3){newboardlive.push(parseInt(i))};
    updateboard(newboardlive, newboarddie);

}
console.log(boardstate);
console.log(newboardlive);
console.log(newboarddie);
}

function updateboard(newboardlive, newboarddie){
   newboardlive.forEach(cell => {
    document.getElementById(cell).classList.add('active');
   });
   newboarddie.forEach(cell => {
    document.getElementById(cell).classList.remove('active');
   });
}

function rungame(){
let state = boardstate();
gamelogic(gridSize,state);
}