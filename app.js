let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('.reset');
const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];



const showWinner = (winner) => {
    const winnerMessage = document.getElementById('winner-message');
    const winnerSpan = document.getElementById('winner');
    winnerSpan.innerText = winner;
    winnerMessage.classList.remove('hide');
}

const checkWinner = () => {
    for (let pattern of winningPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1!='' && pos2!='' && pos3!='') {
            if (pos1===pos2 && pos2===pos3) {
                showWinner(pos1);
                return;
            } 
        }
    }
};

let turnX = true;
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (!box.classList.contains('occupied')) {
            if (turnX) {
                box.innerText = 'X';
                box.style.color = 'transparent'; 
                box.style.backgroundImage = 'url("images/letter-x.png")';
                box.style.backgroundSize = '80%'; 
                box.style.backgroundPosition = 'center'; 
                box.style.backgroundRepeat = 'no-repeat';
                turnX = false;
            } else {
                box.innerText = 'O';
                box.style.color = 'transparent'; 
                box.style.backgroundImage = 'url("images/o.png")';
                box.style.backgroundSize = '80%'; 
                box.style.backgroundPosition = 'center'; 
                box.style.backgroundRepeat = 'no-repeat';
                turnX = true;
            }
            box.classList.add('occupied'); 
        }
        checkWinner();
    });
});

reset.addEventListener('click', () => {
    boxes.forEach(box => {
        box.style.backgroundImage = 'none';
        box.innerText = '';
        box.classList.remove('occupied');
        box.remove
    });
    const winnerMessage = document.getElementById('winner-message')
    winnerMessage.classList.add('hide');
    turnX = true;
});