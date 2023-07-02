function colorChanger(square) {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    square.style.backgroundColor = '#' + randomColor;
}

function createGrid(amount) {
    for(let j = 0; j < amount; j++){
        const rowcontainer = document.createElement('div');
        rowcontainer.setAttribute('style', 'display: flex; flex: 1;')
        rowcontainer.classList.add('row');
        for(let i = 0; i < amount; i++){
            const square1 = document.createElement('div');
            square1.classList.add('grid');
            square1.setAttribute('style', 'display: flex; flex: 1 0 auto; background-color:white; aspect-ratio: 1/1;');
            rowcontainer.appendChild(square1);
    
            square1.addEventListener("mouseover", (event) => {
                const randomColor = Math.floor(Math.random()*16777215).toString(16);
                square1.style.backgroundColor = '#' + randomColor;
            })
        };
        container.appendChild(rowcontainer);
    }
}

const container = document.querySelector('#container');
let amount = 4;
createGrid(amount);

document.querySelector('#reset').addEventListener("click", function(){
    let newGrid = prompt("How many squares do you want per side? (Keep it 100 or lower)");
    while(isNaN(newGrid) || newGrid > 100 || newGrid < 1){
        newGrid = prompt("Be reasonable.");
    }
    container.innerHTML='';
    createGrid(newGrid);
})