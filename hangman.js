var words = [""]

let answer = "";
let maxWrong = "6";
let mistakes = "0";
let guessed = [];
let wordStatus = null;

function pickWord(){
    answer = words[Math.floor(Math.random() * words.length)];
}

function generateKeyboard(){
    let buttonsHTML = "abcdefghijklmnopqrstuvwxyz".split('').map(letter =>
    `
    <button class="btn btn-sm btn-warning mt-2 mx-1" id='` + letter + `' onclick=handleGuess('` + letter + `')>
        `+ letter +`
    </button>
    `).join('');
        
    document.getElementById('keyboard').innerHTML = buttonsHTML;
}

function handleGuess(chosenLetter){
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
    document.getElementById(chosenLetter).setAttribute('disabled', true);

    if (answer.indexOf(chosenLetter) >= 0) {
        guessedWord();
        checkIfGameWon();
    } else if (answer.indexOf(chosenLetter) === -1) {
        mistakes++;
        updateMistakes();
        updateHangmanImg();
        checkIfGameLost();
    }
}

function guessedWord() {
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : "_ ")).join('');

    document.getElementById('wordSpotlight').innerHTML = wordStatus;
}

function updateHangmanImg(){
    document.getElementById('hangmanImg').src = 'hangman' + mistakes + '.png';
}

function checkIfGameWon() {
    if (wordStatus == answer) {
      document.getElementById('keyboard').innerHTML = '<p>You Won!</p>';
    }
}
  
function checkIfGameLost() {
    if (mistakes == maxWrong){
        document.getElementById('wordSpotlight').innerHTML = 'The answer was: ' + answer;
        document.getElementById('keyboard').innerHTML = '<p>You Lost!</p>';
    }
}

function updateMistakes() {
    document.getElementById('mistakes').innerHTML = mistakes;
}
  
function reset() {
    mistakes = 0;
    guessed = [];
    document.getElementById('hangmanImg').src = 'hangman0.png';
    
    updateMistakes();
    pickWord();
    guessedWord();
    generateKeyboard();
}

document.getElementById('maxWrong').innerHTML = maxWrong;

pickWord();
generateKeyboard();
guessedWord();