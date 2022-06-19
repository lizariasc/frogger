const timeLeftDisplay = document.querySelector('#time-left');
const resultDisplay = document.querySelector('#result');
const startPauseButton = document.querySelector('#start-pause-button');
const squares = document.querySelectorAll('.grid div');
const logsLeft = document.querySelectorAll('.log-left');

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


function autoMoveLogs() {
    logsLeft.forEach(LogLeft => moveLogLeft(LogLeft))
}

function moveLogLeft(LogLeft) {
    switch (true) {
      case LogLeft.classList.contains('l1'):
          LogLeft.classList.remove('l1')
          LogLeft.classList.add('l2')
          break
      case LogLeft.classList.contains('l2'):
          LogLeft.classList.remove('l2')
          LogLeft.classList.add('l3')
          break
       case LogLeft.classList.contains('l3'):
            LogLeft.classList.remove('l3')
            LogLeft.classList.add('l4')
            break
       case LogLeft.classList.contains('l4'):
          LogLeft.classList.remove('l4')
          LogLeft.classList.add('l5')
          break
       case LogLeft.classList.contains('l5'):
            LogLeft.classList.remove('l5')
            LogLeft.classList.add('l1')
            break
    }
}

setInterval(autoMoveLogs, 1000)