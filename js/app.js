console.log('JS Connected!');

// selects the seperate JS file with the win conditions and makes them available locally
var phwoar = phwoar || {};
$(() => {

  //these var do not reset
  var player1Score = 0;
  var player2Score = 0;
  var columnsCopy = [
    [0, 7, 14, 21, 28, 35],
    [1, 8, 15, 22, 29, 36],
    [2, 9, 16, 23, 30, 37],
    [3, 10, 17, 24, 31, 38],
    [4, 11, 18, 25, 32, 39],
    [5, 12, 19, 26, 33, 40],
    [6, 13, 20, 27, 34, 41]
  ];

  //these var do RESET
  var $player1Pic = $('.imgHolder1');
  var $player2Pic = $('.imgHolder2');
  var hunk1Id;
  var hunk2Id;

  //var for game play - grid
  var player1 = [];
  var player2 = [];
  let gameInProgress = true;
  const $squares = $('li');
  let currentPlayer = 'player1';
  let columnIndex = 0;
  var columns = columnsCopy;
  let squareIdx = 0;

  //button clicks
  $('.play').on('click', hideWelcome);
  $('.instructions').on('click', hideInstructions);
  $('.hunkButton').on('click', selectHunk);
  $('.dropButton').on('click', handleClick);
  $('#playAgain').on('click', playAgain);
  $('#reset').on('click', resetGame);
  $('.hunkButton').on('mouseover', () => playSong('barryW'));

  //allows player to select the token to represent their game play
  function selectHunk(){
    if (hunk1Id) {                      //checks is player1 has selected..
      hunk2Id = $(this).attr('data-hunk');
      $player2Pic.addClass(hunk2Id);  //applies selected token to player
      $('.selectHunkUl').hide();     //hides tokens once both players selected
    } else {
      hunk1Id = $(this).attr('data-hunk');  //gets and applies Player1 token
      $player1Pic.addClass(hunk1Id);
    }

    $(`.${hunk1Id}`).attr('disabled', true);   //diables ability to select token twice
  }

  //hides the welcome screen by making game components opaque to progress to game play section
  function hideWelcome() {
    $('.welcome-overlay').hide();
    $('.gameBoard, .instructions').removeClass('transparent');
  }

  //hides instructions once player clicks ok
  function hideInstructions() {
    $('.instructions').hide();
  }

  //sets up 'audio player' to play all audio files as called
  function playSong(filename) {
    var audio = document.getElementById('audio');
    audio.src = `audio/${filename}.wav`;
    audio.play();
  }

  function endGame() {
    //disables drop buttons
    $('.dropButton').attr('disabled', true);
    // shows there is a winner
    $('#announceWinner').css({ visibility: 'visible' });
    //shows the buttons to select 'next game' or 'return to welcome screen'
    $('#playAgain').css({ visibility: 'visible' });
    $('#reset').css({ visibility: 'visible' });
    playSong('TheBest');
  }

  //resets all variables for next game to start
  function playAgain() {
    columns =   //reinstates grid array
    [[0, 7, 14, 21, 28, 35],
    [1, 8, 15, 22, 29, 36],
    [2, 9, 16, 23, 30, 37],
    [3, 10, 17, 24, 31, 38],
    [4, 11, 18, 25, 32, 39],
    [5, 12, 19, 26, 33, 40],
    [6, 13, 20, 27, 34, 41]];
    player1 = [];
    player2 = [];
    gameInProgress = true;
    currentPlayer = 'player1';
    columnIndex = 0;
    squareIdx = [];
    // makes drop selectors active, removes classed from grid and removes instruction
    $('.dropButton').attr('disabled', false);
    $squares.removeClass('Clooney Arnie Selleck Hoff');
    $('#announceWinner').css({ visibility: 'hidden' });
  }

  //as well as game reset, this removes player selection, resets and removes scores and returns to welcome screen, showing the player tokens available
  function resetGame() {
    playAgain();
    $('#playAgain').attr('disabled', false);

    $player1Pic.removeClass('Clooney Arnie Selleck Hoff');
    $player2Pic.removeClass('Clooney Arnie Selleck Hoff');
    player1Score = 0;
    player2Score = 0;

    $('#player1Score').text('');
    $('#player2Score').text('');

    $('.welcome-overlay').show();
    $('.gameBoard').addClass('transparent');

    $('.selectHunkUl').show();
    $('.Clooney, .Arnie, .Selleck, .Hoff').attr('disabled', false);

    hunk1Id = null;
    hunk2Id = null;
    $('#announceWinner').css({ visibility: 'hidden' });
  }

  //identifies the last available index in an array to place token
  function handleClick() {
    if(!gameInProgress) return false;
    columnIndex = $(this).index();  //grabs the column array which provides the available index
    assignToken(currentPlayer, columnIndex); //asigns player to the index
    currentPlayer = currentPlayer === 'player1' ? 'player2' : 'player1'; //alternates player
  }

  function assignToken(currentPlayer, columnIndex) {
    //checks for the column array, and pops last index
    squareIdx = columns[columnIndex].pop();
    //saves result in var
    const $square = $squares.eq(squareIdx);
    // assigns player in action, to the square
    const classToAdd = currentPlayer === 'player1' ? hunk1Id : hunk2Id;
    //and assigns their token
    $square.addClass(classToAdd);
    // logs player to the square selected
    playerStatus(currentPlayer, squareIdx);
  }

  //updates the player progress by pushing index of last square placed to players array and checks if any win condition has been met
  function playerStatus(currentPlayer, squareIdx) {
    if (currentPlayer === 'player1') {
      player1.push(squareIdx);
    } else {
      player2.push(squareIdx);
    }
    if (checkForWin()) {
      updateScore(currentPlayer);
    }
  }

  // checks array as it stands, against all possible win conditions
  function checkForWin() {
    // confirms which player to check
    const playerArrayToCheck = currentPlayer === 'player1' ? player1 : player2;
    //finds all win conditions with some of the numbers in player array (ext JS file)
    return phwoar.allWinConditions.some((condition) => {
      //then returns any which have exact match of any numbers in player array
      return condition.every((idx) => {
        //confirms if there is a winner
        return playerArrayToCheck.includes(idx);
      });
    });
  }

  //logs scores on the player scoreboard
  function updateScore(winner) {
    gameInProgress = false;
    endGame();
    if (winner === 'player1') {
      player1Score++;
      $('#player1Score').text(player1Score);
    } else {
      player2Score++;
      $('#player2Score').text(player2Score);
    }
  }
});


//comments on code improvement for learning purposes:

// ORIGINAL
//  function playBarry() {
//    var audio = document.getElementById('audio');
//    audio.src = 'audio/barryW.wav';
//    audio.play();
//  }
// function winnerSong() {
//   var audio = document.getElementById('audio');
//   audio.src = 'audio/TheBest.wav';
//   audio.play();
// }
// REPLACED by
// $('.hunkButton').on('mouseover', () => playSong('barryW'));

// ORIGINAL
// $('#playAgain').attr('disabled', false);
// REPLACES
// document.getElementById('announceWinner').style.visibility='hidden';

// /\document.getElementByClass('instructions').style.visibility='hidden';
// REPLACED BY
// $('.instructions').hide();
