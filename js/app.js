console.log('JS Connected!');
$(() => {
  // var playerOne = [];
  // var playerTwo = [];
  // var tally = 0;
  // var isItPlayerTwoTurn = true;
  // var currentColumn;
  // var currentPlayerSlot;
  // var changeSlotToString;
  // var slotId;
  const $squares = $('li');
  let currentPlayer = 'player1';
  let columnIndex = 0;
  var columns = [
    [0, 7, 14, 21, 28, 35],
    [1, 8, 15, 22, 29, 36],
    [2, 9, 16, 23, 30, 37],
    [3, 10, 17, 24, 31, 38],
    [4, 11, 18, 25, 32, 39],
    [5, 12, 19, 26, 33, 40],
    [6, 13, 20, 27, 34, 41]
  ];

  console.log(columns[0]);


  function startGame() {
    $('button').on('click', (e) => {
      console.log('clicked');
      // which column was clicked
      columnIndex = $(e.target).index();

      assignToken(currentPlayer, columnIndex);
      currentPlayer = currentPlayer === 'player1' ? 'player2' : 'player1';
    });
    // el.addEventListener('onclick', checkPlayer());
    // currentColumn(this.id);
  }

  startGame();

  function assignToken(player, columnIndex) {
    const squareIdx = columns[columnIndex].pop();
    const $square = $squares.eq(squareIdx);
    $square.addClass(player);

    // if currentPlayer === player1 push squareIdx into player1 array
    // else push squareIdx into player2 array
    // checkForWin()
  }

    //   // while (isItPlayerTwoTurn === false) {

//function checkPlayer(isItPlayerTwoTurn) {
  // (isItPlayerTwoTurn = !isItPlayerTwoTurn);
  //  console.log(isItPlayerTwoTurn);
  // }

  // function playToken() {
  //   switch (currentColumn) {
  //     case 'Drop1':
  //       currentPlayerSlot = column1.pop();
  //       break;
  //     case 'Drop2':
  //       currentPlayerSlot = column2.pop();
  //       break;
  //     case 'Drop3':
  //       currentPlayerSlot = column3.pop();
  //       break;
  //     case 'Drop4':
  //       currentPlayerSlot = column4.pop();
  //       break;
  //     case 'Drop5':
  //       currentPlayerSlot = column5.pop();
  //       break;
  //     case 'Drop6':
  //       currentPlayerSlot = column6.pop();
  //       break;
  //     case 'Drop7':
  //       currentPlayerSlot = column7.pop();
  //   }
  // }

  // playToken(currentPlayerSlot);


  // function updateGameProgress(playerOne, playerTwo, currentPlayerSlot, isItPlayerTwoTurn) {
  //   while (isItPlayerTwoTurn === false) {
  //     Array.prototype.push.apply(playerOne, currentPlayerSlot);
  //   }
  //   while (isItPlayerTwoTurn === true) {
  //     Array.prototype.push.apply(playerTwo, currentPlayerSlot);
  //   }
  // }

  function checkForWin(playerToCheck) {
    return allWinConditions.some((condition) => {
      return condition.every((idx) => {
        return playerToCheck.includes(idx);
      });
    });
  }



  // function declareWinner() {
  // }
  //
  // function tally() {
  //
  // }
  //
  // function promptNextPlayer() {
  //
  // }
  //
  // function reset() {
  // //clear playerOne and playerTwo score arrays
  // //reset isItPlayerTwoTurn
  // //reset currentColumn;
  // //reset currentPlayerSlot;
  // //reset changeSlotToString;
  // //reset slotId;
  // // change all tokens back to plain background and update the class back to original
  // }

  const allWinConditions = [
    [0, 1, 2, 3],
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6],
    [7, 8, 9, 10],
    [8, 9, 10, 11],
    [9, 10, 11, 12],
    [10, 11, 12, 13],
    [14, 15, 16, 17],
    [15, 16, 17, 18],
    [16, 17, 18, 19],
    [17, 18, 19, 20],
    [18, 19, 20, 21],
    [19, 20, 21, 22],
    [20, 21, 22, 23],
    [21, 22, 23, 24],
    [22, 23, 24, 25],
    [23, 24, 25, 26],
    [24, 25, 26, 27],
    [25, 26, 27, 28],
    [26, 27, 28, 29],
    [27, 28, 29, 30],
    [28, 29, 30, 31],
    [29, 30, 31, 32],
    [30, 31, 32, 33],
    [31, 32, 33, 34],
    [32, 33, 34, 35],
    [33, 34, 35, 36],
    [34, 35, 36, 37],
    [35, 36, 37, 38],
    [36, 37, 38, 39],
    [37, 38, 39, 40],
    [38, 39, 40, 41],
    [0, 7, 14, 21],
    [7, 14, 21, 28],
    [14, 21, 28, 35],
    [1, 8, 15, 22],
    [8, 15, 22, 29],
    [15, 22, 29, 36],
    [2, 9, 16, 23],
    [9, 16, 23, 30],
    [16, 23, 30, 37],
    [3, 10, 17, 24],
    [10, 17, 24, 31],
    [17, 24, 31, 38],
    [4, 11, 18, 25],
    [11, 18, 25, 32],
    [18, 25, 32, 39],
    [5, 12, 19, 26],
    [12, 19, 26, 33],
    [19, 26, 33, 40],
    [6, 13, 20, 27],
    [13, 20, 27, 34],
    [20, 27, 34, 41],
    [21, 15, 9, 3],
    [28, 22, 16, 10],
    [22, 16, 10, 4],
    [35, 29, 23, 17],
    [29, 23, 17, 11],
    [23, 17, 11, 5],
    [36, 30, 24, 18],
    [30, 24, 18, 12],
    [24, 18, 12, 6],
    [37, 31, 25, 19],
    [31, 25, 19, 13],
    [38, 32, 26, 20],
    [14, 22, 30, 38],
    [7, 15, 23, 31],
    [15, 23, 31, 39],
    [0, 8, 16, 24],
    [8, 16, 24, 32],
    [16, 24, 32,40],
    [1, 9, 17, 25],
    [9, 17, 25, 33],
    [17, 25, 33, 41],
    [2, 10, 18, 26],
    [10, 18, 26, 34],
    [3, 11, 19, 27]
  ];

});


//THIS WORKS TO GET CLICK IN BOX
  // $boxes.on('click',function (e){  // recognises click and will be updated to adds players token
  //   tally = tally + 1;
  //   const box=$(e.target);
  //   if (Math.abs(tally % 2) === 1){
  //     box.text('X');
  //   } else {
  //     box.text('Y');
  //     console.log($boxes); // trying to isolate the id for a box clicked
  //   }

      // addColour();
      // $('#hide').click(function(){
      //   $('#id').hide();
      // });
      //
      // $('#show').click(function(){
      //   $('#id').show();
      // });
