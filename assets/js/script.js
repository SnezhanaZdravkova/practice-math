// THe game variables 
const gameElement = document.querySelector(".game")
const ourForm = document.querySelector(".our-form")
const ourField = document.querySelector(".our-field")
const pointsNeeded = document.querySelector(".points-needed")
const mistakesAllowed = document.querySelector(".mistakes-allowed")

//initials results: correct and incorrect 
let result = {
    score: 0,
    wrongAnswer: 0
}
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
        operator: ["+", "-", "x", "/"][generateNumber(3)]   
    }   
}
ourForm.addEventListener("submit", handleSubmit);
//let e=eventListner
function handleSubmit(e){
    e.preventDefault();
    let correctAnswer
    const b = result.currentGame;
    if(b.operator == "+"){
        correctAnswer = b.numOne + b.numTwo;
    }
    else if(b.operator == "-"){
        correctAnswer = b.numOne - b.numTwo;
    }
    else if(b.operator == "x"){
        correctAnswer = b.numOne * b.numTwo;
    }
    else if(b.operator == "/"){
        //numOne *= numTwo;
        correctAnswer = b.numOne / b.numTwo;
    }
    // this will compare the users answer with our correctAnswer
    //The function parseInt in javaScript will make the value number if it is a string
    if(parseInt(ourField.value, 25) === correctAnswer){
        result.score++;
        pointsNeeded.textContent = 10 - result.score;
        updateGame();
    }else{
        result.wrongAnswer++;
        mistakesAllowed.textContent = 3 - result.wrongAnswer;
        updateGame();
    }
    userAnswerCount();
}
function userAnswerCount(){
    if(result.score === 10){
        alert("Congratulations! You won.");
        resetGame();
    }
    if(result.wrongAnswer === 3){
        alert("Sorry! You lose.")
        resetGame();
    }
}
function resetGame(){
   updateGame();
   result.score = 0;
   result.wrongAnswer = 0;
   pointsNeeded = 10;
   mistakesAllowed = 3;
}

