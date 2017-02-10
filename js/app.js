console.log('JS Connected!');
$(() => {

// record variables required
  const $boxes = $('li');
  console.log($boxes)


// introduction to game / instructions
  //create button to access instructions at any time

// set up grid 7x6



// set up 'tournament' scoreboard
  // keeps running tally of games won

// set up player1
  // assign 'red' token
  //assign zero starting score

  var tally = 1;

  $boxes.on('click',function (e){
    tally = tally + 1;
    const box=$(e.target);
    if (Math.abs(tally % 2) === 1){
      box.text('O');
    } else {
      box.text('X');
    }
      // addColour();
      // $('#hide').click(function(){
      //   $('#id').hide();
      // });
      //
      // $('#show').click(function(){
      //   $('#id').show();
      // });

  });


  // playerOnesTurn();
});
//set up player2
  // assign 'yellow' token
  //assign zero starting score

// place token into grid
  //record 'result' of each turn

// keep record of progress for each turn
  // check against results criteria

// create function to check who's turn it is
  //only allows correct player to take turn
  //switches the colour of the token



//set up results criteria - how does player win



//reset the game








// improvements:
// tournament scoreboard
// personalisation:
// assign names to players
// allow players to select player1 / player2
// select token with famous face for comedy value!
