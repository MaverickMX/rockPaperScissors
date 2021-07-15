const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === "paper" || userInput === "scissors" || userInput === 'bomb'){
        return userInput;
    } else {console.log('Enter a valid input');}
};

const getComputerChoice = () => {
    let number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            return 'rock';
        case 1 :
            return 'paper';
        case 2 :
            return 'scissors';
    }
};

const determineWinner = (userChoice,computerChoice) => {
    if(userChoice === computerChoice){
        return "It's a tie"; 
    } else if (userChoice === 'rock'){
        if (computerChoice === 'paper'){
            return 'The computer won!';
        } else { return 'The user won!'; }
    } else if (userChoice === 'paper'){
        if (computerChoice === 'scissors'){
            return 'The computer won!';
        } else { return 'The user won!'; }
    } else if (userChoice === 'scissors' ){
        if (computerChoice === 'rock'){
            return 'The computer won!';
        } else { return 'The user won!'; }
    } else if (userChoice === 'bomb'){
        return 'The user won!'
    }
};

const playGame = () =>{
    let userChoice = getUserChoice('rock');
    let computerChoice = getComputerChoice();
    let winner = determineWinner(userChoice,computerChoice);
    console.log(`The user chose ${userChoice} & the computer chose ${computerChoice}. ${winner}`)

};

playGame();