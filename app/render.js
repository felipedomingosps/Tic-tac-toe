export const render = (() => {
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