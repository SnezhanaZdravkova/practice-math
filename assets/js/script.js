// The game variables 
const gameElement = document.querySelector(".game");
const ourForm = document.querySelector(".our-form");
const ourField = document.querySelector(".our-field");
const pointsNeeded = document.querySelector(".points-needed");
const mistakesAllowed = document.querySelector(".mistakes-allowed");
const progressBar = document.querySelector(".progress-inner");
const lastMessage = document.querySelector(".last-message");
const startOverButton = document.querySelector(".start-over");

//initials results: correct and incorrect 
let result = {
    score: 0,
    wrongAnswer: 0
};
/**
 * The main game "loop", called when the script is first loaded and after the users answer has been processed 
 */
function updateGame(){
    //this help us to store the result in memory 
    result.currentGame = generateGame();
    gameElement.innerHTML = `${result.currentGame.numOne} ${result.currentGame.operator} ${result.currentGame.numTwo}`;
    ourField.value = "";
    ourField.focus();
}
updateGame();
//function - creates random number between 1 and 25
function generateNumber(max){
    return Math.floor(Math.random() * max) + 1;
}
/**
 * returns random number one, random number two and random choice of the operator "+", "-", "x", "/"
 */
function generateGame(){
    return{
        numOne: generateNumber(25),
        numTwo: generateNumber(25),
        operator: ["+", "-", "x"][generateNumber(2)]   
    };  
}

ourForm.addEventListener("submit", handleSubmit);

function handleSubmit(event){
    event.preventDefault();

    const question = document.querySelector('.game').innerHTML.replace('x', '*');
    const correctAnswer = eval(question);
    
    if (Number(correctAnswer) === Number(event.target.userAnswer.value)) {
        result.score++;
        pointsNeeded.textContent = 10 - result.score;
        updateGame();
        renderProgressBar();
    }
    else {
        result.wrongAnswer++;
        mistakesAllowed.textContent = 2 - result.wrongAnswer;
        updateGame();
    }
    userAnswerCount();
 }

function userAnswerCount(){

    if(result.score === 10){
        lastMessage.textContent = "Congratulations! You won!";
        document.body.classList.add("overlay-cover");
    }
    if(result.wrongAnswer === 3){
        lastMessage.textContent = "Sorry! You lost!";
        document.body.classList.add("overlay-cover");
    }
}

startOverButton.addEventListener("click", resetGame);
// Function to reset Game
function resetGame(){
    document.body.classList.remove("overlay-cover");
    updateGame();
    result.score = 0;
    result.wrongAnswer = 0;
    pointsNeeded.textContent = 10;
    mistakesAllowed.textContent = 2;
    renderProgressBar();
}

function renderProgressBar(){
    progressBar.style.transform = `scaleX(${result.score / 10})`;
}


