const gridSizeInput = document.querySelector('#gridSizeInput');
const gridContainer = document.querySelector('.gridContainer');
const button16 = document.querySelector('.button16');
const button32 = document.querySelector('.button32');
const button64 = document.querySelector('.button64');

// To make the base grid when loading the page start with 16x16
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

// 16x16 button
button16.addEventListener('click', function() {
    const gridSizeValue = 16
    gridContainer.textContent = '';

    function gridCreation(gridSizeValue) {

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
})

// 32x32 button
button32.addEventListener('click', function() {
    const gridSizeValue = 32
    gridContainer.textContent = '';

    function gridCreation(gridSizeValue) {

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
})

// 64x64 button
button64.addEventListener('click', function() {
    const gridSizeValue = 64
    gridContainer.textContent = '';

    function gridCreation(gridSizeValue) {

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
})

// When enter is pressed a grid with the number entered will be created
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
