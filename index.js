const gridSizeInput = document.querySelector('#gridSizeInput');
const gridContainer = document.querySelector('.gridContainer');

for (let i = 0; i < (16 * 16); i++) {
        
    const squareSize = 700 / 16;

    const gridSquare = document.createElement('div');
    gridSquare.classList.add('gridSquare');
    gridSquare.style.width = `${squareSize}px`;
    gridSquare.style.height = `${squareSize}px`;
    gridSquare.addEventListener('mouseenter', function() {
        gridSquare.classList.add('hovered');
    })
    gridContainer.appendChild(gridSquare);
}

gridSizeInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        const gridSizeValue = parseInt(gridSizeInput.value);
        gridContainer.textContent = '';

        function gridCreation(gridSizeValue) {

            function gridSizeCheck() {
                if (gridSizeValue <= 0) {
                    alert('Please enter a number larger than 0!')
                    throw 'Please enter a number larger than 0!'
                }
    
                else if (gridSizeValue >= 101) {
                    alert('Please enter a number equal to or smaller than 100!')
                    throw 'Please enter a number equal to or smaller than 100!'
                }
            }
            
            gridSizeCheck()

            for (let i = 0; i < (gridSizeValue * gridSizeValue); i++) {
        
                const squareSize = 700 / gridSizeValue;
        
                const gridSquare = document.createElement('div');
                gridSquare.classList.add('gridSquare');
                gridSquare.style.width = `${squareSize}px`;
                gridSquare.style.height = `${squareSize}px`;
                gridSquare.addEventListener('mouseenter', function() {
                    gridSquare.classList.add('hovered');
                })
                gridContainer.appendChild(gridSquare);
            }
        }

        gridCreation(gridSizeValue);
        
    }
})
