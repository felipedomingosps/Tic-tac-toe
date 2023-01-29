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

        render.clear();
        //Get marks choice.
    }

    form.addEventListener('submit', submitForm);


    return {getPlayersNames};
};