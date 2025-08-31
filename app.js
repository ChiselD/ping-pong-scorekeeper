const scoreDisplay = document.querySelector("#scoreDisplay");
const p1ScoreDisplay = document.querySelector("#p1ScoreDisplay");
const p2ScoreDisplay = document.querySelector("#p2ScoreDisplay");
const numGames = document.querySelector("#numGames");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btnReset = document.querySelector("#btnReset");

let maxScore = 3;
let p1score = 0;
let p2score = 0;
let currentScore = p1score + p2score;

// When changing dropdown selector, adjust maxScore value correspondingly
numGames.addEventListener("change", (e) => {
	maxScore = e.target.value;
	console.log("new maxScore value: " + maxScore);
});

// Track player 1's score
btn1.addEventListener("click", () => {
	let scoreAsInt = parseInt(p1ScoreDisplay.innerText);
	p1score++;
	p1ScoreDisplay.innerText = p1score;
	currentScore++;
	isGameOver(currentScore, maxScore);
});

// Track player 2's score
btn2.addEventListener("click", () => {
	let scoreAsInt = parseInt(p2ScoreDisplay.innerText);
	p2score++;
	p2ScoreDisplay.innerText = p2score;
	currentScore++;
	isGameOver(currentScore, maxScore);
});

// With every turn, check if maxScore has been reached
const isGameOver = (curr, max) => {
	if (parseInt(curr) === parseInt(max)) {
		// change color of score display accordingly
		if (p1score > p2score) {
			p1ScoreDisplay.classList.add("winner");
			p2ScoreDisplay.classList.add("loser");
		} else {
			p2ScoreDisplay.classList.add("winner");
			p1ScoreDisplay.classList.add("loser");
		}
		// disable score buttons
		btn1.disabled = "true";
		btn2.disabled = "true";
	}		
}

// On clicking reset, put everything back to how it started
const resetGame = () => {
	// reset JS values
	maxScore = 3;
	p1score = 0;
	p2score = 0;
	currentScore = p1score + p2score;
	btn1.removeAttribute("disabled");
	btn2.removeAttribute("disabled");
	// reset HTML displays
	p1ScoreDisplay.innerText = 0;
	p1ScoreDisplay.setAttribute("class", "");
	p2ScoreDisplay.innerText = 0;
	p2ScoreDisplay.setAttribute("class", "");
}

btnReset.addEventListener("click", () => {
	resetGame();
});

