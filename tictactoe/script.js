function ready(fn) {
	if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}
ready(() => {
	const player1 = "X"
	const player2 = "O"

	let currentTurn = true;
	let movesMade = 0;

	const $ = document.querySelector.bind(document)
	const $$ = document.querySelectorAll.bind(document)

	const activeOne = $('#playerOne');
	const activeTwo = $('#playerTwo');

	activeOne.style.backgroundColor = "red";

	const boxs = $$(".gameBox");
	const winnerContainer = $(".winner");
	const reset = $("#newGame");

	boxs.forEach(box => {
		box.addEventListener('click', function clicked(e) {
			movesMade++;
			const item = box.innerHTML;
			if(item !== "") {
				alert("Choose another Square");
				return;
				}
			if (currentTurn) {
				event.target.innerHTML = player1;
				event.target.style.color = "red";
				activeOne.style.backgroundColor = "grey";
				activeTwo.style.backgroundColor = "blue";
				currentTurn = false;
			} else {
				event.target.innerHTML = player2;
				event.target.style.color = "blue";
				activeTwo.style.backgroundColor = "grey";
				activeOne.style.backgroundColor = "red";
				currentTurn = true;
			}
			box.onclick = null;
			if (checkWin()) {
				let theWinner = currentTurn ? player2 : player1;
				declareWinner(theWinner);
				$$('.gameBox').forEach(box =>   box.style.pointerEvents='none') 
			}
		})
	});

	reset.addEventListener('click', function (e) {
		boxs.forEach(box => {
			box.innerHTML = "";
		});
		winnerContainer.innerHTML="";
		winnerContainer.style.display = "none";
		currentTurn = 1;
		movesMade = 0;
		activeOne.style.backgroundColor = "red";
		activeTwo.style.backgroundColor = "grey";
		$$('.gameBox').forEach(box =>   box.style.pointerEvents='auto') 
	});

	function checkWin() {
		if (movesMade > 4) {
			let moves = $$(".gameBox"); 
			let results = Object.keys(moves).map( (key) => {
				const gameBox = moves[key];
				return gameBox.innerHTML;
			});
			let winningCombos = [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
				[0, 4, 8],
				[2, 4, 6]
			];

			return winningCombos.find(function (combo) {
				if (results[combo[0]] !== "" && results[combo[1]] !== "" && results[combo[2]] !== "" && results[combo[0]] === results[combo[1]] && results[combo[1]] === results[combo[2]]) {
					return true;
				} else {
					return false;
				}
			});
		}
	}

	function declareWinner(winner) {
		winnerContainer.style.display = "block";
		winner = winner === player1 ? 'Player 1' : 'Player 2';
		winnerContainer.innerHTML = (winner + " wins!");
	}
});
