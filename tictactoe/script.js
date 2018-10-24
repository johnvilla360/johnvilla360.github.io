$(document).ready(function() {
    
    let player1 = "X"
    let player2 = "O"

    let currentTurn = 1;
    let movesMade = 0;

    var activeOne = document.getElementById('playerOne');
    var activeTwo = document.getElementById('playerTwo');

    activeOne.style.backgroundColor = "red";

    let box = $(".gameBox");
    let winnerContainer = $(".winner");
    let reset = $("#newGame");

   box.on('click', function(e) {
   	movesMade++;

   	if(currentTurn === 1){
   		event.target.innerHTML = player1;
   		event.target.style.color = "red";
   		activeOne.style.backgroundColor = "grey";
   		activeTwo.style.backgroundColor = "blue";
   		currentTurn++;
   	} else {
   		event.target.innerHTML = player2;
   		event.target.style.color = "blue";
   		activeTwo.style.backgroundColor = "grey";
   		activeOne.style.backgroundColor = "red";
   		currentTurn--;
   	}

   	if(checkWin()) {
   		let theWinner = currentTurn === 1 ? player2:player1;
   		declareWinner(theWinner);
   	}
   });

   reset.on('click', function(e){
   	let moves = Array.prototype.slice.call($(".gameBox"));
   	moves.map((m) => {
   		m.innerHTML = "";
   	});
   	winnerContainer.html("");
   	winnerContainer.css('display',"none");
   	currentTurn = 1;
   	movesMade = 0;
   	activeOne.style.backgroundColor = "red";
   	activeTwo.style.backgroundColor = "grey";
   });

   function checkWin() {
   	if(movesMade > 4){
   		let moves = Array.prototype.slice.call($(".gameBox"));
   		let results = moves.map(function(gameBox){
   			return gameBox.innerHTML;
   		});
   		let winningCombos = [
   			[0,1,2],
   			[3,4,5],
   			[6,7,8],
   			[0,3,6],
   			[1,4,7],
   			[2,5,8],
   			[0,4,8],
   			[2,4,6]
   		];

   		return winningCombos.find(function(combo) {
   			if (results[combo[0]] !== "" && results[combo[1]] !== "" && results[combo[2]] !== "" && results[combo[0]] === results[combo[1]] && results[combo[1]] === results[combo[2]]) {
                return true;
            } else {
                return false;
            }
   		});
   	}
   }

   function declareWinner(winner) {
   	winnerContainer.css('display',"block");
   	winner = winner === player1 ? 'Player 1':'Player 2';
   	winnerContainer.html(winner + " wins!");
   }
});