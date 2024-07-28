let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userPoints = document.querySelector("#user-score");
const compPoints = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock" , "paper" , "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game Was Draw.";
}

const showWinner = (userWin) => {
    if(userWin) {
        msg.innerText = "You Win!";
        userScore++;
        userPoints.innerText = userScore;
        confetti();
    }
    else {
        msg.innerText = "Better Luck Next Time!!";
        compScore++;
        compPoints.innerText = compScore;
    }
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if(userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        console.log(userChoice);
        playGame(userChoice);
    });
});