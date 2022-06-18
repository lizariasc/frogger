const timeLeftDisplay = document.querySelector('#time-left');
const resultDisplay = document.querySelector('#result');
const startPauseButton = document.querySelector('#start-pause-button');
const squares = document.querySelectorAll('.grid div');

let currenIndex = 76;
const width = 9;

function moveFrog(e) {
    squares[currenIndex].classList.remove('frog')
    switch(e.key) {
        case 'ArrowLeft':
            if (currenIndex % width !== 0) currenIndex -= 1
        break
        case 'ArrowRight':
        
           if (currenIndex % width < width - 1 ) currenIndex += 1
        break
        case 'ArrowUp':
        
           if (currenIndex - width >= 0) currenIndex -= width
        break
        case 'ArrowDown':
       
        if (currenIndex + width < width * width) currenIndex += width
        break
    }
    
    squares[currenIndex].classList.add('frog')
}
document.addEventListener('keyup', moveFrog)