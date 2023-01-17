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
            else if (computerSelection === 'rock') return "You Win! Paper beats Rock";
            else return "It's a Draw! Both are Paper";
            break;
        case 'scissors':
            if (computerSelection === 'rock') return "You Lose! Rock beats Scissors";
            else if (computerSelection === 'paper') return "You Win! Scissors beats Paper";
            else return "It's a Draw! Both are Scissors";
            break;
        default: 
            return "Please enter a valid option!";     
    }
}

//comp = getComputerChoice();

//console.log(comp);

//console.log(playRound ('Scissors', comp));