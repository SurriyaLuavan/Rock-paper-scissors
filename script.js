//const prompt = require("prompt-sync")({ sigint: true});

function getComputerChoice() {
    const val = ['rock', 'paper', 'scissors'];
    let randChoice = Math.floor(Math.random() * 3 );

    return val[randChoice];
}

function playRound (e) {
    let computerSelection = getComputerChoice();
    let playerSelection = this.getAttribute('value');

    let user = document.querySelector(`p[name="User"] > span`);
    let comp = document.querySelector(`p[name="Comp"] > span`);

    let userScore = user.textContent;
    let compScore = comp.textContent;

    if (document.contains(document.querySelector('p[name="result"]'))) {
        document.querySelector('p[name="result"]').remove();
    }

    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'scissors') {console.log("You Won! Rock beats Scissors"); userScore++;}
            else if (computerSelection === 'paper') {console.log("You Lose! Paper beats Rock"); compScore++;}
            else console.log("It's a Draw! Both are Rock");
            break;
        case 'paper':
            if (computerSelection === 'scissors') {console.log("You Lose! Scissors beats Paper"); compScore++;}
            else if (computerSelection === 'rock') {console.log("You Won! Paper beats Rock"); userScore++;}
            else console.log("It's a Draw! Both are Paper");
            break;
        case 'scissors':
            if (computerSelection === 'rock') {console.log("You Lose! Rock beats Scissors"); compScore++; }
            else if (computerSelection === 'paper') {console.log("You Won! Scissors beats Paper"); userScore++; }
            else console.log("It's a Draw! Both are Scissors"); 
    }

    user.textContent = userScore;
    comp.textContent = compScore;

    if (userScore >= 5 || compScore >= 5) {
        const p = document.createElement('p');
        const body = document.querySelector('body');
        const footer = document.querySelector('footer');

        p.setAttribute('name', 'result');

        userScore > compScore ? p.textContent = "Hurahh, You Won!" : p.textContent = "Oops, You Lost!"

        p.setAttribute('style', `padding: 20px; background-color: #2ED1B3; color: #094e41; text-align: center; font-weight: bold; 
            font-size: 30px; width: 50%; margin: 0px auto; border-radius: 5px; max-width: 500px`)
        body.insertBefore(p, footer);

        user.textContent = 0;
        comp.textContent = 0;
        console.clear();
    };
}

function resetGame(e) {
    let user = document.querySelector(`p[name="User"] > span`);
    let comp = document.querySelector(`p[name="Comp"] > span`);

    user.textContent = 0;
    comp.textContent = 0;
    
    if (document.contains(document.querySelector('p[name="result"]'))) {
        document.querySelector('p[name="result"]').remove();
    }

    console.clear();

}

let userScore = 0, compScore = 0;

const button = document.querySelectorAll('#play > button');
const reset = document.querySelector('#reset > button');

button.forEach(btn => btn.addEventListener('click', playRound));
reset.addEventListener('click', resetGame);

