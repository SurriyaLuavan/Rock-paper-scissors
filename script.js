const prompt = require("prompt-sync")({ sigint: true});

function getComputerChoice() {
    const val = ['rock', 'paper', 'scissors'];
    let randChoice = Math.floor(Math.random() * 3 );

    return val[randChoice];
}

function playRound (playerSelection, computerSelection) {
    
    playerSelection = playerSelection.toLowerCase();
    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'scissors') return "You Won! Rock beats Scissors";
            else if (computerSelection === 'paper') return "You Lose! Paper beats Rock";
            else return "It's a Draw! Both are Rock";
            break;
        case 'paper':
            if (computerSelection === 'scissors') return "You Lose! Scissors beats Paper";
            else if (computerSelection === 'rock') return "You Won! Paper beats Rock";
            else return "It's a Draw! Both are Paper";
            break;
        case 'scissors':
            if (computerSelection === 'rock') return "You Lose! Rock beats Scissors";
            else if (computerSelection === 'paper') return "You Won! Scissors beats Paper";
            else return "It's a Draw! Both are Scissors";
            break;
        default: 
            return "Please enter a valid option!";     
    }
}


function game(numOfGame) {
    let userWin = 0;
    let compWin = 0;

    for (let i = 0; i < numOfGame; i++) {
        let userOption = (prompt("Enter a valid option (rock, paper, scissors): "));
        let compOption = getComputerChoice();
        let result = playRound (userOption, compOption);
        
        console.log (result);
        if (result.includes('Won')) userWin++;
        if (result.includes('Lose')) compWin++;
    }

    console.log(`${userWin} ${compWin}`)

    userWin > compWin ? console.log("The User Won!") : console.log("The User Lost!");
}

game(6);