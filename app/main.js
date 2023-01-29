

const configureStartScreen = (() => {
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

        document.querySelector('main').innerHTML = '';
        //Get marks choice.
    }

    form.addEventListener('submit', submitForm);


    return {getPlayersNames};
})();

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

    return {clear, startScreen};
})();