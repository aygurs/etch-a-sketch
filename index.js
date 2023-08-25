const gridSizeInput = document.querySelector('#gridSizeInput');
const gridContainer = document.querySelector('.gridContainer');

gridSizeInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        const gridSizeValue = parseInt(gridSizeInput.value);
        gridContainer.textContent = '';
        console.log(gridSizeValue);
        gridCreation(gridSizeValue);
    }
})

function gridCreation(gridSizeValue) {
    for (let i = 0; i < gridSizeValue; i++) {

        const squareSize = 500 / gridSizeValue;
        console.log(squareSize);

        const gridSquare = document.createElement('div');
        gridSquare.classList.add('gridSquare');
        gridSquare.style.width = `${squareSize}px`;
        gridSquare.style.height = `${squareSize}px`;
        gridContainer.appendChild(gridSquare);
    }
}
