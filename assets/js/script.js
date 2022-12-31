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
// const b = result.currentGame;
// function correctAnswer(){
    
//     let operator = ["+", "-"];
//     for(let i = 0; i < index.lednth; i++){
//        switch(b.operator){
//         case 0: b.numOne + b.numTwo;
//         break;
//         case 1: b.numOne - b.numTwo;
//         break;
//         default: "Unknown Game!"
//        }     
//     }
// }
ourForm.addEventListener("submit", handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    let correctAnswer;
    if(result.currentGame.operator == "+"){
        correctAnswer = result.currentGame.numOne + result.currentGame.numTwo;
    }
    if(result.currentGame.operator == "-"){
        correctAnswer = result.currentGame.numOne - result.currentGame.numTwo;
    }
    if(result.currentGame.operator == "x"){
        correctAnswer = result.currentGame.numOne * result.currentGame.numTwo;
    }
    if(result.currentGame.operator == "/"){
        correctAnswer = result.currentGame.numOne / result.currentGame.numTwo;
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
     }
     userAnswerCount();
 }

function userAnswerCount(){

    if(result.score === 10){
        alert("Congratulations! You won.");
        resetGame();
    }
    if(result.wrongAnswer === 3){
        alert("Sorry! You lose.");
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


