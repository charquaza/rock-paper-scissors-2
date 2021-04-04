let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    var playChoices = ["rock", "paper", "scissors"];
    var randNum = Math.floor(Math.random() * 3);
    return playChoices[randNum];
}

function playOneRound(playerClickEvent) {
    var playerInput = (playerClickEvent) ? playerClickEvent.target.textContent : 
        prompt("Let's play rock, paper, scissors! Enter rock, paper, or scissors:");

    if (playerInput) {
        var playerSelection = playerInput.toLowerCase();
    } else {
        return;
    }

    var computerSelection = computerPlay();

    switch (playerSelection) {
        case "rock":
            switch (computerSelection) {
                case "rock":
                    return "It's a draw.";
                case "paper":
                    computerScore++;
                    return "You lose... Paper beats Rock";
                case "scissors":
                    playerScore++;
                    return "You win! Rock beats Scissors";
            }
        case "paper":
            switch (computerSelection) {
                case "rock":
                    playerScore++;
                    return "You win! Paper beats Rock";
                case "paper":
                    return "It's a draw.";
                case "scissors":
                    computerScore++;
                    return "You lose... Scissors beats Paper";
            }
        case "scissors":
            switch (computerSelection) {
                case "rock":
                    computerScore++;
                    return "You lose... Rock beats Scissors";
                case "paper":
                    playerScore++;
                    return "You win! Scissors beats Paper";
                case "scissors":
                    return "It's a draw.";
            }
        default:
            return "Hmm?";
    }
}

function playAndLog(playerClickEvent) {
    var winner = document.getElementById("winner");

    if (playerScore === 5 || computerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        winner.textContent = "";
    }

    console.log(playOneRound(playerClickEvent));

    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;

    if (playerScore === 5 || computerScore === 5) {
        winner.textContent = (playerScore === 5) ? "You win!" : 
            "You lose. The computer wins!"
    }
    
}

let buttons = document.querySelectorAll('button');
buttons.forEach(function addListener(button) {
    button.addEventListener("click", playAndLog);
});