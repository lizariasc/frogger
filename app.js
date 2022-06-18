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
        console.log('move left')
        currenIndex -= 1 
        break;
        case 'ArrowRight':
        console.log('move Right')
        currenIndex += 1
        break;
        case 'ArrowUp':
        console.log('move up')
        currenIndex -= width
        break;
        case 'ArrowDown':
        console.log('move down')
        currenIndex += width
        break;
    }
    
    squares[currenIndex].classList.add('frog')
}
document.addEventListener('keyup', moveFrog)