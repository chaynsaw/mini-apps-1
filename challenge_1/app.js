console.log('App.js loaded.');
window.onload = () => {
  displayCurrentBoard();
  beginTurn()
};

// MODEL
var currentTurn;

var lastMove;
var board = {
  0: ['','','x'],
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
function beginTurn() {
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
  if (currentTurn === 'player1') {
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
  if (currentTurn === 'player2') {
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
  // var thisSquare = element.id;
  // if(boardKeys[thisSquare] === '') {
    
  //   boardKeys[thisSquare] = 'x';
  //   lastMove.push([element.id, ''])
  // } else {
  //   if (boardKeys[thisSquare] === 'x') {
  //     boardKeys[thisSquare] = 'o';
  //     lastMove.push([element.id, 'x'])
  //   } else {
  //     boardKeys[thisSquare] = 'x';
  //     lastMove.push([element.id, 'o'])
  //   }
  // }
  // element.innerHTML = boardKeys[element.id];
}