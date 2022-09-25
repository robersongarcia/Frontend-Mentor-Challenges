
function getPlayerPlay(){
    let select = prompt("Choose Rock, Paper or Scissors")
    return select?select.toLowerCase():'';
}

function getComputerPlay(){
    let select = Math.floor(Math.random() * 3 + 1);
    if(select == 1)
        return 'rock';
    else if(select == 2)
        return 'paper';
    else if(select == 3)
        return 'scissors';    
}

function playRound(player,computer){
    
    if(player != 'rock' && player != 'paper' && player != 'scissors')
        return 'please choose a correct option (rock, paper or scissors)';

    if(player == computer)
        return `Its a draw!, ${player} and ${computer}`;

    if((player == 'rock' && computer == 'scissors') || (player == 'paper' && computer == 'rock') || (player == 'scissors' && computer == 'paper'))
        return `You win, ${player} beats ${computer}`;

    if((player == 'rock' && computer == 'paper') || (player == 'paper' && computer == 'scissors') || (player == 'scissors' && computer == 'rock'))
        return `You loose, ${computer} beats ${player}`;
}


function game(){
    for (let i = 1; i <= 5; i++) {
        console.log(playRound(getPlayerPlay(),getComputerPlay()));
    }
}

game();