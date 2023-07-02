function colorChanger(square) {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    square.style.backgroundColor = '#' + randomColor;
}

const container = document.querySelector('#container');

for(let j = 0; j < 4; j++){
    const rowcontainer = document.createElement('div');
    rowcontainer.setAttribute('style', 'display: flex; flex: 1;')
    rowcontainer.classList.add('row');
    for(let i = 0; i < 4; i++){
        const square1 = document.createElement('div');
        square1.classList.add('grid');
        square1.setAttribute('style', 'display: flex; flex: 1 0 auto; background-color:red; aspect-ratio: 1/1;');
        rowcontainer.appendChild(square1);

        square1.addEventListener("onmouseover", colorChanger(square1));
    };
    container.appendChild(rowcontainer);
}