
//i didnnt think this would be so complex

var words = ["animatronics", "architectural_design", "biotechnology_design", "board game_design", "chapter_team", 
"children's_stories", "coding", "computer integrated manufacturing", "computer-aided design (cad)", "cybersecurity", 
"data science and analytics", "debating dechnological issues", "digital video production", "dragster design", 
"engineering design", "essays on technology", "extemporaneous speech", "fashion design and technology", "flight endurance", 
"forensic science", "future technology teacher",  "geospatial technology", "music Production", "on demand video", 
"photographic technology", "prepared presentation", "promotional design", "scientific visualization (scivis)", 
"software development", "structural design and engineering",  "system control technology", "technology bowl", 
"technology problem Solving", "transportation Modeling", "vex robotics competition", "video game design", "webmaster",

"Moneel Patel", "Lakshay Gupta", "Tyler Yan", "Ausmit Mondal", "Hazem Salem", "Ebaad Imran", "Edward Bemim", "Khoa Le",
"Trinity Nguyen", "Santiago Espinoza", "Brian is cool"]

let answer = "";
let maxWrong = "6";
let mistakes = "0";
let guessed = [];
let wordStatus = null;

function pickWord(){
    answer = words[Math.floor(Math.random() * words.length)];
}

//I did this to make it quicker than copying a button 26 times but it actually took longer lmfao
function generateKeyboard(){
    let buttonsHTML = "abcdefghijklmnopqrstuvwxyz_()-',".split('').map(letter =>
    `
    <button class="btn btn-sm btn-warning m-2" id='` + letter + `' onclick=handleGuess('` + letter + `')>
        `+ letter +`
    </button>
    `).join('');
        
    document.getElementById('keyboard').innerHTML = buttonsHTML;
}

function handleGuess(chosenLetter){
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
    document.getElementById(chosenLetter).setAttribute('disabled', true);

    alert(answer);

    if (answer.indexOf(chosenLetter) >= 0) {
        guessedWord();
    }
}

function guessedWord() {
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
  
    document.getElementById('wordSpotlight').innerHTML = wordStatus;
  }

document.getElementById('maxWrong').innerHTML = maxWrong;


pickWord();
generateKeyboard();
guessedWord();