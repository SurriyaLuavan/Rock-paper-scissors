function getComputerChoice() {
    const val = ['Rock', 'Paper', 'Scissors'];
    let randChoice = Math.floor(Math.random() * 3 );

    return val[randChoice];
}