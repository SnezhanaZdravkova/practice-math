const gameElement = document.querySelector(".game")
const ourForm = document.querySelector(".our-form")
const ourField = document.querySelector(".our-field")
//function - creates random number between 1 and 25
function genetateNumber(){
    return Math.floor(Math.random()*25 + 1)
}
//returns random number one, random number two and random choice of the operator "+" or "-"
function generateGame(){
    return{
        numOne: generateNumber(),
        numTwo: genetateNumber(),
        operator: ["+", "-"]
    }
}
//initials results: correct and incorrect 
let result = {
    score: 0,
    wrongAnswer: 0
}
function updateGame(){
    state.currentGame = generateGame();
    gameElement.innerHTML = `${state.currentGame.numOne} ${state.currentGame.operator} ${state.currentGame.numTwo}`;
    updateGame();
}