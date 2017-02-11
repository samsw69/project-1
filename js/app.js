console.log('JS Connected!');
$(() => {

  // record variables required
  const $boxes = $('li');
  // console.log($boxes);
  var $person1;
  var $person2;
  var tally = 1;
  var row1 = [0, 6, 12, 18, 24, 30, 36];
  var row2 = [1, 7, 13, 19, 25, 31, 37];
  var row3 = [2, 8, 14, 20, 26, 32, 38];
  var row4 = [3, 9, 15, 21, 27, 33, 39];
  var row5 = [4, 10, 16, 22, 28, 34, 40];
  var row6 = [5, 11, 17, 23, 29, 35, 41];

// introduction to game / instructions
  //create button to access instructions at any time


// set up 'tournament' scoreboard
  // keeps running tally of games won

// set up player1

  // assign 'red' token
  //assign zero starting score

  $boxes.on('click',function (e){  // recognises click and will be updated to adds players token
    tally = tally + 1;
    const box=$(e.target);
    if (Math.abs(tally % 2) === 1){
      box.text('X');
    } else {
      box.text('Y');
      console.log($boxes); // trying to isolate the id for a box clicked
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


});
//set up player2
  // assign 'yellow' token
  //assign zero starting score

// place token into grid
  //record 'result' of each turn

          //click on button above column
          // check for the empty row

          // var row1 = row1.pop();
          // $person1 = person1.push
          // numbers.push(4);
          //
          // console.log(numbers); // [1, 2, 3, 4]
          // console.log(myFish); // ['angel', 'clown', 'mandarin' ]
          // console.log(popped); // 'sturgeon'

// keep record of progress for each turn
  // check against results criteria

// create function to check who's turn it is
  //only allows correct player to take turn
  //switches the colour of the token



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


// improvements:
      // tournament scoreboard
      // personalisation:
      // assign names to players
      // allow players to select player1 / player2
