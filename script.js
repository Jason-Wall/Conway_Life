// TOP LEVEL CODE
// Populate the game space with a grid on page load
const game_space = document.getElementById('game_space');
let grid = 15;
let gamespace = document.getElementById('game_space');
let cellSize = gamespace.offsetHeight/(grid)-2;
makeGrid();

let runinterval;
let flaginterval = false;
randomboard();

// End test cases

let state = boardstate();

function makeGrid(){
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
            cell[i,j].style.width = cellSize+"px";
            cell[i,j].style.height = cellSize+"px";

        }
    }
}


function boardstate(){
    let activeCells = [];
    //Main board:
    for (let i = 1; i <= grid; i++){
        for(let j = 1; j<= grid; j++){
            let cell = document.getElementById(i+","+j);
            if (cell.classList.contains('active')){
                activeCells.push(cell.id);
            }
        }        
    }
    //Boundary conditions - Left
    for (let i = 1; i<=grid; i++){
        let testid = i+","+1;
        if (activeCells.includes(testid)){activeCells.push(i+","+(+grid+1))};
    }
    //Boundary conditions - Right
    for (let i = 1; i<=grid; i++){
        let testid = i+","+grid;
        if (activeCells.includes(testid)){activeCells.push(i+","+0)};
    }
    //Boundary conditions - Top
    for (let j = 1; j<=grid; j++){
        let testid = 1+","+j;
        if (activeCells.includes(testid)){activeCells.push((+grid+1)+","+j)};
    }
       //Boundary conditions - Bottom
       for (let j = 1; j<=grid; j++){
        let testid = grid+","+j;
        if (activeCells.includes(testid)){activeCells.push(0+","+j)};
    }
    return(activeCells);
}

function changestatus(i,j){
    document.getElementById(i+","+j).classList.toggle('active');
}

function gamelogic(state){
const newboardlive=[];
const newboarddie=[];
for (let i = 1; i <= grid; i++){
    for(let j = 1; j<= grid; j++){
        let neighbor = 0;
        if(state.includes((+i-1)+","+(+j-1))){neighbor++};
        if(state.includes((+i-1)+","+(+j))){neighbor++};
        if(state.includes((+i-1)+","+(+j+1))){neighbor++};
        if(state.includes((i)+","+(+j-1))){neighbor++};
        if(state.includes((i)+","+(+j+1))){neighbor++};
        if(state.includes((+i+1)+","+(+j-1))){neighbor++};
        if(state.includes((+i+1)+","+(+j))){neighbor++};
        if(state.includes((+i+1)+","+(+j+1))){neighbor++};
        // console.log(neighbor);
        if (neighbor<=1 || neighbor>=4){newboarddie.push(i+","+j)};
        if (neighbor===3){newboardlive.push(i+","+j)};
    }
}

updateboard(newboardlive, newboarddie);

// console.log(newboardlive);
// console.log(newboarddie);
}

function updateboard(newboardlive, newboarddie){
   newboardlive.forEach(cell => {
    document.getElementById(cell).classList.add('active');
   });
   newboarddie.forEach(cell => {
    document.getElementById(cell).classList.remove('active');
   });
}

function clearstate(){
    let newboarddie=[];
    for (let i = 1; i <= grid; i++){
        for(let j = 1; j<= grid; j++)
            {newboarddie.push(i+","+j)
        }
    }

    updateboard([],newboarddie);
}

function randomboard(){
    clearstate();
    let newboardlive=[];
    for (let i = 1; i <= grid; i++){
        for(let j = 1; j<= grid; j++){
            if (Math.random()>0.7){
                newboardlive.push(i+","+j)}
            }
        }
    updateboard(newboardlive,[]);
}
function loopgame(){
    if (flaginterval==false){
        runinterval = setInterval(rungame, 500);
        flaginterval=true;
    }else {clearInterval(runinterval);
        flaginterval=false;
    }
}

function rungame(){
    let state = boardstate();
    gamelogic(state);
}