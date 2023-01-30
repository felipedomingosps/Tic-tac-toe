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
        `<div class="turn-screen">Hey, ${playersNames[0]}, it's your turn!</div>        
        <div class="game-screen">
            <div class="name-column">${playersNames[0]} - X</div>
            <div class="game-column">
                <table class="board">
                    <tbody>
                        <tr>
                            <td id="cell-01">.</td>
                            <td id="cell-02">.</td>
                            <td id="cell-03">.</td>
                        </tr>
                        <tr>
                            <td id="cell-04">.</td>
                            <td id="cell-05">.</td>
                            <td id="cell-06">.</td>
                        </tr>
                        <tr>
                            <td id="cell-07">.</td>
                            <td id="cell-08">.</td>
                            <td id="cell-09">.</td>
                        </tr>                        
                    </tbody>
                </table>
            </div>
            <div class="name-column">${playersNames[1]} - O</div>
        </div>`;
    };

    return {clear, startScreen, gameScreen};
})();