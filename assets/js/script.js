const gameElement = document.querySelector(".game")
const ourForm = document.querySelector(".our-form")
const ourField = document.querySelector(".our-field")
//initials results: correct and incorrect 
let result = {
    score: 0,
    wrongAnswer: 0
}
function updateGame(){
    result.currentGame = generateGame()
    gameElement.innerHTML = `${result.currentGame.numOne} ${result.currentGame.operator} ${result.currentGame.numTwo}`
    ourField.value = ""
    ourField.focus()
}
updateGame();
//function - creates random number between 1 and 25
function generateNumber(max){
    return Math.floor(Math.random() * max + 1)
}
//returns random number one, random number two and random choice of the operator "+" or "-"
function generateGame(){
    return{
        numOne: generateNumber(25),
        numTwo: generateNumber(25),
        operator: ["+", "-"][1]   
    }   
}
