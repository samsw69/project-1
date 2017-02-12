console.log('JS Connected!');
$(() => {

  // record variables required
  // const $boxes = $('li');
  // console.log($boxes);
  var playerOne = [];
  var playerTwo = [];
  // var tally = 1;
  var column1 = [0, 7, 14, 21, 28, 35];
  var column2 = [1, 8, 15, 22, 29, 36];
  var column3 = [2, 9, 16, 23, 30, 37];
  var column4 = [3, 10, 17, 24, 31, 38];
  var column5 = [4, 11, 18, 25, 32, 39];
  var column6 = [5, 12, 19, 26, 33, 40];
  var column7 = [6, 13, 20, 27, 34, 41];
  var playerTurn = true;
  var currentColumn;
  var currentPlayer;
  var checkPlayer;
  var currentPlayerSlot;
  var gridIndex;
  var gridPosition;

// introduction to game / instructions
        //create button to access instructions at any time

// set up 'tournament' scoreboard
        // keeps running tally of games won

// set up player1
// function playerStatus() {
  // for p1Score =
  // for p2Score =
// }

  // assign 'red' token
  //assign zero starting score
  function startGame(checkPlayer, currentColumn) {
    var el = document.getElementsByClass('dropbutton');
    el.addEventListener('onclick', checkPlayer());
    currentColumn(this.id);
  }

  startGame();

  function checkPlayer(playerTurn) {
    (playerTurn = !playerTurn);
    // while (playerTurn === false) {
    //   currentPlayer = playerOne;  //is this correct - want to make it player ones turn - does this statement achieve this?
    // }
    // while (playerTurn === true) {
    //   currentPlayer = playerTwo;
    console.log(playerTurn);
  }
    playToken();



  // assignToken();
  // }

  function playToken(currentColumn, currentPlayer) {
    switch (currentColumn) {
      case 'Drop1':
        currentPlayerSlot = column1.pop();
        break;
      case 'Drop2':
        currentPlayerSlot = column2.pop();
        break;
      case 'Drop3':
        currentPlayerSlot = column3.pop();
        break;
      case 'Drop4':
        currentPlayerSlot = column4.pop();
        break;
      case 'Drop5':
        currentPlayerSlot = column5.pop();
        break;
      case 'Drop6':
        currentPlayerSlot = column6.pop();
        break;
      case 'Drop7':
        currentPlayerSlot = column7.pop();
    }
    updateGameProgress();
  }

  function updateGameProgress(playerOne, playerTwo, currentPlayerSlot, playerTurn) {
  while (playerTurn === false) {
    Array.prototype.push.apply(playerOne, currentPlayerSlot);

  while (playerTurn === true) {
    Array.prototype.push.apply(playerTwo, currentPlayerSlot);
  //This is another option to push to player arrays
  // playerOne = currentPlayer.pop();
  // }
  // while (playerTurn === true) {
  //   playerTwo = currentPlayer.pop();
  // }
  // currentPlayer.splice(index, 0);  // this removes the array in currentPlayer ready for next turn - is this needed - above commands should clear the currentPlayer array?
}

  function assignToken() {
    while (playerTurn === false) {
      var gridIndex = currentPlayer.toString(); //takes the number in the column array and changes it to string to compare to the li id
      var gridPosition = document.querySelectorAll('li'[gridIndex]);



  //set up player2
    // assign 'yellow' token
    //assign zero starting score

  // place token into grid
    //record 'result' of each turn


  // keep record of progress for each turn
    // check against results criteria



  //set up results criteria - how does player win
  // win1 = [zero, one, two, three];
  // win2 = [one, two, three, four];
  // win3 = [two, three, four, five];
  // win4 = [three, four, five, six];
  // win5 = [seven, eight, nine, ten];
  // win6 = [eight, nine, ten, eleven];
  // win7 = [nine, ten, eleven, twelve];
  // win8 = [ten, eleven, twelve, thirteen];
  // win9 = [fourteen, fifteen, sixteen, seventeen];
  // win10 = [fifteen, sixteen, seventeen, eighteen];
  // win11 = [sixteen, seventeen, eighteen, nineteen];
  // win12 = [seventeen, eighteen, nineteen, twenty];
  // win13 = [eighteen, nineteen, twenty, twentyone];
  // win14 = [nineteen, twenty, twentyone, twentytwo];
  // win15 = [twenty, twentyone, twentytwo, twentythree];
  // win16 = [twentyone, twentytwo, twentythree, twentyfour];
  // win17 = [twentytwo, twentythree, twentyfour, twentyfive];
  // win18 = [twentythree, twentyfour, twentyfive, twentysix];
  // win19 = [twentyfour, twentyfive, twentysix, twentyseven];
  // win20 = [twentyfive, twentysix, twentyseven, twentyeight];
  // win21 = [twentysix, twentyseven, twentyeight, twentynine];
  // win23 = [twentyseven, twentyeight, twentynine, thirty];
  // win24 = [twentyeight, twentynine, thirty, thirtyone];
  // win25 = [twentynine, thirty, thirtyone, thirtytwo];
  // win26 = [thirty, thirtyone, thirtytwo, thirtythree];
  // win27 = [thirtyone, thirtytwo, thirtythree, thirtyfour];
  // win28 = [thirtytwo, thirtythree, thirtyfour, thirtyfive];
  // win29 = [thirtythree, thirtyfour, thirtyfive, thirtysix];
  // win30 = [thirtyfour, thirtyfive, thirtysix, thirtyseven];
  // win31 = [thirtyfive, thirtysix, thirtyseven, thirtyeight];
  // win32 = [thirtysix, thirtyseven, thirtyeight, thirtynine];
  // win33 = [thirtyseven, thirtyeight, thirtynine, forty];
  // win34 = [thirtyeight, thirtynine, forty, fortyone];
  //
  // win35 = [zero, seven, fourteen, twentyone]


  //reset the game
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
