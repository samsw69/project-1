console.log('JS Connected!');
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

  //these var do RESET
  //get picture for each player token
  var $player1Pic = $('.imgHolder1');
  var $player2Pic = $('.imgHolder2');
  var hunk1Id;
  var hunk2Id;

//game play
  var player1 = [];
  var player2 = [];
  let gameInProgress = true;
  const $squares = $('li');
  let currentPlayer = 'player1';
  let columnIndex = 0;
  var columns = columnsCopy;
  let squareIdx = 0;


  console.log(columns[0,1,2,3,4,5]);

//select hunk for player token


  $('.hunkButton').on('click', selectHunk);
  $('.play').on('click', hideWelcome);

  function hideWelcome() {
    $('.welcome-overlay').hide();
  }

  // function audio()  {
  //   var audio = $("/audio/Barry White.mp3")[0];
  //   $("selectHunkDiv").mouseenter(function() {
  //   audio.play();
  // })


  // window.addEventListener('DOMContentLoaded', () => {
  //   const audio = document.querySelector('audio');
  //   const clickBtn = document.querySelector('button');
  //   clickBtn.addEventListener('click', (e) => {
  //   });
  // });


  function selectHunk(){

    if (hunk1Id) {
      hunk2Id = $(this).attr('data-hunk');
      $player2Pic.addClass(hunk2Id);
      $('.selectHunkUl').hide();
    } else {
      hunk1Id = $(this).attr('data-hunk');
      $player1Pic.addClass(hunk1Id);
    }
  }

  function startGame() {
    if(gameInProgress === true) {
      $('.dropButton').on('click', handleClick);
    }
  }

  function endGame() {
    $('.dropButton').attr('disabled', true);
    document.getElementById('announceWinner').style.visibility='visible';
    document.getElementById('playAgain').style.visibility='visible';
    $('#playAgain').on('click', resetGame);
  }

  function resetGame() {
    columns =
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
    document.getElementById('announceWinner').style.visibility='hidden';
    document.getElementById('playAgain').style.visibility='hidden';
    $('.dropButton').attr('disabled', false);
    $squares.removeClass(hunk1Id);
    $squares.removeClass(hunk2Id);
  }

  function handleClick() {
    console.log('clicked');
    console.log(columnIndex);
    columnIndex = $(this).index();
    assignToken(currentPlayer, columnIndex);
    currentPlayer = currentPlayer === 'player1' ? 'player2' : 'player1';
  }

  function assignToken(currentPlayer, columnIndex) {
    squareIdx = columns[columnIndex].pop();
    const $square = $squares.eq(squareIdx);
    const classToAdd = currentPlayer === 'player1' ? hunk1Id : hunk2Id;
    $square.addClass(classToAdd);
    playerStatus(currentPlayer, squareIdx);
  }

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

  function checkForWin() {
    const playerArrayToCheck = currentPlayer === 'player1' ? player1 : player2;
    return allWinConditions.some((condition) => {
      return condition.every((idx) => {
        return playerArrayToCheck.includes(idx);
      });
    });
  }

  function updateScore(winner) {
    gameInProgress = false;
    console.log(winner);
    console.log(gameInProgress);
    endGame();
    if (winner === 'player1') {
      player1Score++;
      $('#player1Score').text(player1Score);
    } else {
      if (winner === 'player2') {
        player2Score++;
        $('#player2Score').text(player2Score);
      }
    }
  }

  startGame();
});
