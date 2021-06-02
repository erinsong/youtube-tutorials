// cache DOM
let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

// randomly choose rock, paper, or scissors
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

// convert r, p, or s to full word for better readability
function convertLetter(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

// execute when user beats computer
function win(userChoice, compChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `Your ${convertLetter(userChoice)} beat the Comp's ${convertLetter(compChoice)}. You win! :)`;
    scoreBoard_div.classList.add("green-glow");
    setTimeout(() => scoreBoard_div.classList.remove("green-glow"), 500);
}

// execute when computer beats user
function lose(userChoice, compChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `Your ${convertLetter(userChoice)} lost to the Comp's ${convertLetter(compChoice)}. You lose! :(`;
    scoreBoard_div.classList.add("red-glow");
    setTimeout(() => scoreBoard_div.classList.remove("red-glow"), 500);
}

// execute when user and computer tie
function draw(userChoice, compChoice) {
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `Your ${convertLetter(userChoice)} ties with the Comp's ${convertLetter(compChoice)}. Draw! :|`;
    scoreBoard_div.classList.add("gray-glow");
    setTimeout(() => scoreBoard_div.classList.remove("gray-glow"), 500);
}

// determine whether user won, lost, or tied against the computer
function game(userChoice) {
    const compChoice = getComputerChoice();
    switch (userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, compChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener("click", () => game("r"));
    paper_div.addEventListener("click", () => game("p"));
    scissors_div.addEventListener("click", () => game("s"));
}

main();






