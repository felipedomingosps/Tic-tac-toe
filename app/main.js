/* RENDER */

const render = (() => {
    const main = document.querySelector('main');


    const clear = () => {
        main.innerHTML = '';
    } 
    const startScreen = () => {
        main.innerHTML = 
    `<form id="form">
        <div class="player-one">
            <label for="player-one-name">Player One: </label><input type="text" id="player-one-name" placeholder="Insert name here" required> <span class="x-mark">X</span>
        </div>
        
        <div class="player-two">
            <label for="player-two-name">Player Two: </label><input type="text" id="player-two-name" placeholder="Insert name here" required> <span class="o-mark">O</span>
        </div>
                    
        <button type="submit" id="play-button">Play</button>
    </form>`;
    };
    const gameScreen = (playersNames) => {
        main.innerHTML = 
        `<div class="turn-screen" data-turn="X" id="turn-screen">Hey, <span id="turn-screen__name">${playersNames[0]}</span>, it's your turn!</div>        
        <div class="game-screen">
            <div class="name-column">${playersNames[0]} - X</div>
            <div class="game-column">
                <table class="board">
                    <tbody>
                        <tr>
                            <td id="cell-01" data-cell="1">.</td>
                            <td id="cell-02" data-cell="2">.</td>
                            <td id="cell-03" data-cell="3">.</td>
                        </tr>
                        <tr>
                            <td id="cell-04" data-cell="4">.</td>
                            <td id="cell-05" data-cell="5">.</td>
                            <td id="cell-06" data-cell="6">.</td>
                        </tr>
                        <tr>
                            <td id="cell-07" data-cell="7">.</td>
                            <td id="cell-08" data-cell="8">.</td>
                            <td id="cell-09" data-cell="9">.</td>
                        </tr>                        
                    </tbody>
                </table>
            </div>
            <div class="name-column">${playersNames[1]} - O</div>
        </div>`;
    };
    const placeMark = (eventTarget, mark) => {
        eventTarget.innerHTML = mark;
        
    };
    
    return {clear, startScreen, gameScreen, placeMark};
})();

/* FUNCTIONALITY */

const configureStartScreen = () => {
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

const gameTurn = (playersNames) => {
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

const configureGameFlow = (playersNames) => {
    render.gameScreen(playersNames);
    gameTurn(playersNames);
    configureGameGrid();

} 



const configureGameGrid = () => {
    const gridSpaces = document.querySelectorAll('td');

    gridSpaces.forEach(gridSpace => {
        gridSpace.addEventListener("click", event => {
            if (event.target.innerHTML === '' || event.target.innerHTML === '.') {
                render.placeMark(event.target, gameTurn.getTurn());
                gameboard.changeMark(event.target.dataset.cell, gameTurn.getTurn());
                gameboard.checkForWinners();
                gameTurn.changeTurn();
            }             
        });
    });
};

const gameboard = (() => {
    let marks = [null, null, null, null, null, null, null, null, null];
    const horizontalLines = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
    const verticalLines = [[0, 3, 6], [1, 4, 7], [2, 5, 8]];
    const diagonalLines = [[0, 4, 8], [2, 4, 6]];
    const allLines = [...horizontalLines, ...verticalLines, ...diagonalLines];

    const changeMark = (index, mark) => marks[index] = mark;
    const checkForWinners = () => {

        let winnerLine = null;

        for(let i = 0; i < allLines.length; i++) {
            const line = marks[allLines[i][0]] + marks[allLines[i][1]] + marks[allLines[i][2]];

            if (line === 'XXX' || line === 'OOO')
            {
                winnerLine = allLines[i];
                console.log(winnerLine);
                return winnerLine;
            }
        }

        if (!marks.includes(null)) {
            winnerLine = 'tie';
            console.log(winnerLine);
            return winnerLine;
        }

        return 'None';
    };

    return {changeMark, checkForWinners};
})();


/* MAIN */

(function main() {
    render.startScreen();
    configureStartScreen();
    

})();