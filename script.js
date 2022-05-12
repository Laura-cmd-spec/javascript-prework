let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'rock';
}
else if(randomNumber == 2){
    computerMove = 'paper';
}
else {(randomNumber == 3)
    computerMove = 'scissors';
}

printMessage('My move: ' + computerMove);

let playerInput = prompt('Choose your move! 1: rock, 2: paper, 3: scissors.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if (playerInput == '1'){
  playerMove = 'rock';
}
else if(playerInput == '2'){
    playerMove = 'paper';
}
else {(playerInput == '3')
    playerMove = 'scissors';
}

printMessage('Your move: ' + playerMove);

if (playerMove == 'Nieznany ruch') {
  printMessage('Error');
}
if( computerMove == 'rock' && playerMove == 'scissors'){
    printMessage('You won!');
}
else if ( computerMove == 'scissors' && playerMove == 'rock'){
  printMessage('You lost!');
}
else if ( computerMove == 'paper' && playerMove == 'rock'){
  printMessage ('You lost!');
}
else if ( computerMove == 'rock' && playerMove == 'paper'){
  printMessage('You won!'); 
}
else if ( computerMove == 'paper' && playerMove == 'scissors'){
  printMessage ('You won!');
}
else if ( computerMove == 'scissors' && playerMove == 'paper'){
  printMessage('You lost!'); 
}
else {( computerMove == playerMove)
    printMessage ('Draw!');
}





