// player 1 - toad
// player 2 - bug

// when click square add toad or bug
// change player text to player 1 or player 2


// on click add bug or toad click change to alternate player

let playerOne = "Player 1's Turn";
let playerTwo = "Player 2's Turn";
let playerTxt = document.getElementById("whosTurn");
let currentPlayer = 1;

//  this function changes the text at the top from first players turn to second players turn

function clicked(event) {

  if( currentPlayer === 1)
  {currentPlayer += 1}
  else if (currentPlayer === 2)
  {currentPlayer -= 1}

  if ( playerTxt.textContent === playerOne )
  { playerTxt.textContent = playerTwo}
  else { playerTxt.textContent = playerOne}

  let playerTwoImg = 'images/toad.svg';
  let playerOneImg = 'images/bug.svg';
  

  let createImage = document.createElement("img");

  // createImage.src = event.target.dataset.player === "p1" ? playerOneImg : event.target.dataset.player === "p2" ? playerTwoImg : playerTwoImg;
  createImage.src = currentPlayer === 1 ? playerOneImg : currentPlayer === 2 ? playerTwoImg : playerTwoImg;


 event.target.appendChild(createImage);




  // document.getElementsByClassName("square")[0].appendChild(createImage);


  // console.log("it works");
  // console.log(createImage);
  // console.log(event.target.dataset.img);

}

// trying to add image to white squares

// let PlayerOneImg = 'images/toad.svg'
// let playerTwoImh = 'images/bug.svg'

// let squareClicked = document.getElementsByClass("square")
// let createImage = document.createElement("img")





// restart button

function restartGame(){
  const restartButton = document.getElementsByClassName("square");
  let resetImage = document.createElement("img")
  resetImage.src = "#";

  event.target.resetImage.src = "";

}

console.log(restartGame);




// document.querySelectorAll('.square').forEach(square => square.addEventListener('click', handlesquareClick));
// document.querySelector('.game--restart').addEventListener('click', handleRestartGame);