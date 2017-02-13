console.log('JS Connected!');
$(() => {
  // var playerOne = [];
  // var playerTwo = [];
  // var tally = 0;
  var column1 = [0, 7, 14, 21, 28, 35];
  var column2 = [1, 8, 15, 22, 29, 36];
  var column3 = [2, 9, 16, 23, 30, 37];
  var column4 = [3, 10, 17, 24, 31, 38];
  var column5 = [4, 11, 18, 25, 32, 39];
  var column6 = [5, 12, 19, 26, 33, 40];
  var column7 = [6, 13, 20, 27, 34, 41];
  var isItPlayerTwoTurn = true;
  var currentColumn;
  var currentPlayerSlot;
  var changeSlotToString;
  var slotId;
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
  function startGame(currentColumn) {
    var el = document.getElementsByClass('dropbutton');
    el.addEventListener('onclick', checkPlayer());
    currentColumn(this.id);
  }

  startGame();

  function checkPlayer(isItPlayerTwoTurn) {
    (isItPlayerTwoTurn = !isItPlayerTwoTurn);
    // while (isItPlayerTwoTurn === false) {
    //   currentPlayerSlot = playerOne;  //is this correct - want to make it player ones turn - does this statement achieve this?
    // }
    // while (isItPlayerTwoTurn === true) {
    //   currentPlayerSlot = playerTwo;
    console.log(isItPlayerTwoTurn);
  }

  playToken();

  // assignToken();

  function playToken(currentColumn, currentPlayerSlot) {
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

  function updateGameProgress(playerOne, playerTwo, currentPlayerSlot, isItPlayerTwoTurn) {
    while (isItPlayerTwoTurn === false) {
      Array.prototype.push.apply(playerOne, currentPlayerSlot);
    }
    while (isItPlayerTwoTurn === true) {
      Array.prototype.push.apply(playerTwo, currentPlayerSlot);
    }
  }
  //This is another option to push to player arrays
  // playerOne = currentPlayerSlot.pop();
  // }
  // while (isItPlayerTwoTurn === true) {
  //   playerTwo = currentPlayerSlot.pop();
  // }
  // currentPlayerSlot.splice(index, 0);  // this removes the array in currentPlayerSlot ready for next turn - is this needed - above commands should clear the currentPlayer array?


  function assignToken(isItPlayerTwoTurn, changeSlotToString, slotId, currentPlayerSlot) {
    while (isItPlayerTwoTurn === false) {
      changeSlotToString = (currentPlayerSlot.toString()); //takes the number in the column array and changes it to string to compare to the li id
      slotId = (document.querySelectorAll('li'[changeSlotToString])); //uses the string and compares to li#
      //for changeSlotToString == slotId {
      //**add playerOnes image to li id[slotId]**
    }
  }


  //set up player2
    // assign 'yellow' token
    //assign zero starting score

  // place token into grid
    //record 'result' of each turn


  // keep record of progress for each turn
    // check against results criteria


  function checkForWin(playerOne, playerTwo) {
    while (isItPlayerTwoTurn === false) {  //playerOne is active
      // if playerOne in (win1, win2, win3, win4, win5, )   **how to compare for a win?**
    }
  }
//horizontal wins
//   win1 = [0, 1, 2, 3];
//   win2 = [1, 2, 3, 4];
//   win3 = [2, 3, 4, 5];
//   win4 = [3, 4, 5, 6];
//   win5 = [7, 8, 9, 10];
//   win6 = [8, 9, 10, 11];
//   win7 = [9, 10, 11, 12];
//   win8 = [10, 11, 12, 13];
//   win9 = [14, 15, 16, 17];
//   win10 = [15, 16, 17, 18];
//   win11 = [16, 17, 18, 19];
//   win12 = [17, 18, 19, 20];
//   win13 = [18, 19, 20, 21];
//   win14 = [19, 20, 21, 22];
//   win15 = [20, 21, 22, 23];
//   win16 = [21, 22, 23, 24];
//   win17 = [22, 23, 24, 25];
//   win18 = [23, 24, 25, 26];
//   win19 = [24, 25, 26, 27];
//   win20 = [25, 26, 27, 28];
//   win21 = [26, 27, 28, 29];
//   win23 = [27, 28, 29, 30];
//   win24 = [28, 29, 30, 31];
//   win25 = [29, 30, 31, 32];
//   win26 = [30, 31, 32, 33];
//   win27 = [31, 32, 33, 34];
//   win28 = [32, 33, 34, 35];
//   win29 = [33, 34, 35, 36];
//   win30 = [34, 35, 36, 37];
//   win31 = [35, 36, 37, 38];
//   win32 = [36, 37, 38, 39];
//   win33 = [37, 38, 39, 40];
//   win34 = [38, 39, 40, 41];
//   //vertical wins
//   win35 = [0, 7, 14, 21];
//   win36 = [7, 14, 21, 28];
//   win37 = [14, 21, 28, 35];
//   win38 = [1, 8, 15, 22];
//   win39 = [8, 15, 22, 29];
//   win40 = [15, 22, 29, 36];
//   win41 = [2, 9, 16, 23];
//   win42 = [9, 16, 23, 30];
//   win43 = [16, 23, 30, 37];
//   win44 = [3, 10, 17, 24];
//   win45 = [10, 17, 24, 31];
//   win46 = [17, 24, 31, 38];
//   win47 = [4, 11, 18, 25];
//   win48 = [11, 18, 25, 32];
//   win49 = [18, 25, 32, 39];
//   win50 = [5, 12, 19, 26];
//   win51 = [12, 19, 26, 33];
//   win52 = [19, 26, 33, 40];
//   win50 = [6, 13, 20, 27];
//   win51 = [13, 20, 27, 34];
//   win52 = [20, 27, 34, 41];
// //diagonal wins 1
//   win53 = [21, 15, 9, 3];
//   win54 = [28, 22, 16, 10];
//   win55 = [22, 16, 10, 4];
//   win56 = [35, 29, 23, 17];
//   win57 = [29, 23, 17, 11];
//   win58 = [23, 17, 11, 5];
//   win59 = [36, 30, 24, 18];
//   win60 = [30, 24, 18, 12];
//   win61 = [24, 18, 12, 6];
//   win62 = [37, 31, 25, 19];
//   win62 = [31, 25, 19, 13];
//   win62 = [38, 32, 26, 20];
// // diagonal wins 2
//   win53 = [14, 22, 30, 38];
//   win54 = [7, 15, 23, 31];
//   win55 = [15, 23, 31, 39];
//   win56 = [0, 8, 16, 24];
//   win56 = [8, 16, 24, 32];
//   win56 = [16, 24, 32,40];
//   win56 = [1, 9, 17, 25];
//   win56 = [9, 17, 25, 33];
//   win56 = [17, 25, 33, 41];
//   win56 = [2, 10, 18, 26];
//   win56 = [10, 18, 26, 34];
//   win56 = [3, 11, 19, 27];



  //set up results criteria (string format) not finished - how does player win??
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
