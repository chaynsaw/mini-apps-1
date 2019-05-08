console.log('App.js loaded.');
window.onload = () => {
  player1Prompt();
  player2Prompt();
  displayCurrentBoard();
  newTurn()
};

function player1Prompt(){
  var person = prompt('Player 1, enter your name', 'Player 1')
  if (person !== null) {
    document.getElementById('player1').innerHTML = person;
  }
}
function player2Prompt(){
  var person = prompt('Player 2, enter your name', 'Player 2')
  if (person !== null) {
    document.getElementById('player2').innerHTML = person;
  }
}
// MODEL
var currentTurn;
var player1, player2, lastMove;
var board = {
  0: ['','',''],
  1: ['','',''],
  2: ['','','']
}

var boardKeys = {
  1: '',
  2: '',
  3: '',
  4: '',
  5: '',
  6: '',
  7: '',
  8: '',
  9: ''
}
function determineVictory() {
  if (rowVictory() === 'victory') {
    clearBoard();
  }
  if (columnVictory() === 'victory') {
    clearBoard();
  }
  if (diagonalVictory() === 'victory') {
    clearBoard();
  }
  fullBoard();
}

function fullBoard() {
  if (Object.values(boardKeys).join('').length === 9){
    alert('No one wins. Sometimes, that is how life goes.')
    clearBoard();
  }
}
function clearBoard() {
  for (let key in boardKeys){
    boardKeys[key] = '';
    document.getElementById(key).innerHTML = '';
  }
}
function rowVictory(){
  var row1 = boardKeys[1] + boardKeys[2] + boardKeys[3];
  var row2 = boardKeys[4] + boardKeys[5] + boardKeys[6];
  var row3 = boardKeys[9] + boardKeys[8] + boardKeys[7];
  if (row1 === 'ooo' || row2 === 'ooo' || row3 == 'ooo') {
    alert(`${currentTurn} has won.`);
    return 'victory';
  }
  if (row1 === 'xxx' || row2 === 'xxx' || row3 == 'xxx') {
    alert(`${currentTurn} has won.`);
    return 'victory';
  }
}
function columnVictory(){
  var column1 = boardKeys[1] + boardKeys[4] + boardKeys[7];
  var column2 = boardKeys[2] + boardKeys[5] + boardKeys[8];
  var column3 = boardKeys[3] + boardKeys[6] + boardKeys[9];
  if (column1 === 'ooo' || column2 === 'ooo' || column3 == 'ooo') {
    alert(`${currentTurn} has won.`);
    return 'victory';
  }
  if (column1 === 'xxx' || column2 === 'xxx' || column3 == 'xxx') {
    alert(`${currentTurn} has won.`);
    return 'victory';
  }
}
function diagonalVictory(){
  var diagonal1 = boardKeys[1] + boardKeys[5] + boardKeys[9];
  var diagonal2 = boardKeys[3] + boardKeys[5] + boardKeys[7];
  if (diagonal1 === 'ooo' || diagonal2 === 'ooo') {
    alert(`${currentTurn} has won.`);
    return 'victory';
  }
  if (diagonal1 === 'xxx' || diagonal2 === 'xxx') {
    alert(`${currentTurn} has won.`);
    return 'victory';
  }
}

// VIEW
// See INDEX
function displayCurrentBoard(){
  for (let key in boardKeys){
    document.getElementById(key).innerHTML = boardKeys[key];
  }
}

// CONTROLLER
function newTurn() {
  determineVictory();
  if (currentTurn === 'player1') {
    currentTurn = 'player2';
  } else {
    currentTurn = 'player1';
  }
  lastMove = undefined;
  console.log(currentTurn);
}
function changeThisSquare(element){
  if (currentTurn === player1) {
    // debugger;
    if (boardKeys[element.id] === '') {
      // clear last move
      if (boardKeys[lastMove] !== undefined) {
        boardKeys[lastMove] = '';
      }
      // make new move
      boardKeys[element.id] = 'x';
      // store this move
      lastMove = element.id;
    }
  
  }
  if (currentTurn === player2) {
    // debugger;
    if (boardKeys[element.id] === '') {
      // clear last move
      if (boardKeys[lastMove] !== undefined) {
        boardKeys[lastMove] = '';
      }
      // make new move
      boardKeys[element.id] = 'o';
      // store this move
      lastMove = element.id;
    }
  
  }
  displayCurrentBoard();
}