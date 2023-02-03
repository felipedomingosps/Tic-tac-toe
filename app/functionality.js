import {render} from './render.js';

export const configureStartScreen = () => {
    const form = document.querySelector('#form');

    let playerOneName;
    let playerTwoName;

    function getPlayersNames() {
        return [playerOneName, playerTwoName];
    }

    function submitForm(event) {
        event.preventDefault();
        playerOneName = document.querySelector('#player-one-name').value;
        playerTwoName = document.querySelector('#player-two-name').value;

        configureGameFlow(getPlayersNames());
    }

    form.addEventListener('submit', submitForm);


    return {getPlayersNames};
};

export const configureGameFlow = (playersNames) => {
    render.gameScreen(playersNames);
    let gameTurn = configureTurns(playersNames);
    configureGameGrid(gameTurn);

} 

export const configureTurns = (playersNames) => {
    let turn = 'X';
    const turnDisplay = document.querySelector('#turn-screen__name');

    const getTurn = () => turn;
    const changeTurn = () => {
        if (turn === 'X') {
            turn = 'O'
            turnDisplay.innerHTML = playersNames[1];
        } else {
            turn = 'X'
            turnDisplay.innerHTML = playersNames[0];
        }
    }
    return {getTurn, changeTurn};
};

export const configureGameGrid = (gameTurn) => {
    const gridSpaces = document.querySelectorAll('td');

    gridSpaces.forEach(gridSpace => {
        gridSpace.addEventListener("click", event => {
            if (event.target.innerHTML === '' || event.target.innerHTML === '.') {
                render.placeMark(event.target, gameTurn.getTurn());
                gameTurn.changeTurn();
            }             
        });
    });
};

const gameboard = () => {
    let marks = [null, null, null, null, null, null, null, null, null];
    const horizontalLines = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
    const verticalLines = [[0, 3, 6], [1, 4, 7], [2, 5, 8]];
    const diagonalLines = [[0, 4, 8], [2, 4, 6]];
    const allLines = [...horizontalLines, ...verticalLines, ...diagonalLines];

    const changeMark = (index, mark) => marks[index] = mark;
    const checkForWinners = () => {



    };

    return {changeMark};
};
