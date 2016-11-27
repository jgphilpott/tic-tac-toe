$(document).on('ready', function() { //Only loads JavaScript once DOM is ready

  var turn = 0;
  var lastmove = '0';
  var victory = false;

  var board = [
    ['empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty'],
  ];

  var updateAndDraw = function(key) {

    if (turn % 2 === 0) { //Checking whose turn it is

      //Passing the key argument to this switch in order to update the board array
      switch (key) {

        //Checks each case systematically
        case '#a':

          if (board[0][0] === 'empty') {//Checks tile isnt already occupied
              board[0][0] = 'x';//Assigns new value
          };
          break;

        case '#b':
          if (board[0][1] === 'empty') {
              board[0][1] = 'x';
          };
          break;
        case '#c':
          if (board[0][2] === 'empty') {
              board[0][2] = 'x';
          };
          break;
        case '#d':
          if (board[1][0] === 'empty') {
              board[1][0] = 'x';
          };
          break;
        case '#e':
          if (board[1][1] === 'empty') {
              board[1][1] = 'x';
          };
          break;
        case '#f':
          if (board[1][2] === 'empty') {
              board[1][2] = 'x';
          };
          break;
        case '#g':
          if (board[2][0] === 'empty') {
              board[2][0] = 'x';
          };
          break;
        case '#h':
          if (board[2][1] === 'empty') {
              board[2][1] = 'x';
          };
          break;
        case '#i':
          if (board[2][2] === 'empty') {
              board[2][2] = 'x';
          };
          break;
        default:
          console.log('Error');
      };//End of switch

      $(key).html('<p>X</p>'); //Updating HTML

    } else {

      //Same switch as above except for O rather than X
      switch (key) {
        case '#a':
          if (board[0][0] === 'empty') {
              board[0][0] = 'o';
          };
          break;
        case '#b':
          if (board[0][1] === 'empty') {
              board[0][1] = 'o';
          };
          break;
        case '#c':
          if (board[0][2] === 'empty') {
              board[0][2] = 'o';
          };
          break;
        case '#d':
          if (board[1][0] === 'empty') {
              board[1][0] = 'o';
          };
          break;
        case '#e':
          if (board[1][1] === 'empty') {
              board[1][1] = 'o';
          };
          break;
        case '#f':
          if (board[1][2] === 'empty') {
              board[1][2] = 'o';
          };
          break;
        case '#g':
          if (board[2][0] === 'empty') {
              board[2][0] = 'o';
          };
          break;
        case '#h':
          if (board[2][1] === 'empty') {
              board[2][1] = 'o';
          };
          break;
        case '#i':
          if (board[2][2] === 'empty') {
              board[2][2] = 'o';
          };
          break;
        default:
          console.log('Error');
      };//End of switch
      $(key).html('<p>O</p>');
    };//End of whose turn check

    //Changing cursor and incrementing turn
    $(key).css('cursor', 'default');
    turn++

  };//End of updateAndDraw function

  var checkVictory = function(player, AI) {

    if (player === 'X') {//Checking victory for X
      if (board[0][0] === 'x' && board[0][1] === 'x' && board[0][2] === 'x' || //Looking for horizontal victory row 0
          board[1][0] === 'x' && board[1][1] === 'x' && board[1][2] === 'x' || //Looking for horizontal victory row 1
          board[2][0] === 'x' && board[2][1] === 'x' && board[2][2] === 'x' || //Looking for horizontal victory row 2
          board[0][0] === 'x' && board[1][0] === 'x' && board[2][0] === 'x' || //Looking for vertical victory column 0
          board[0][1] === 'x' && board[1][1] === 'x' && board[2][1] === 'x' || //Looking for vertical victory column 1
          board[0][2] === 'x' && board[1][2] === 'x' && board[2][2] === 'x' || //Looking for vertical victory column 2
          board[0][0] === 'x' && board[1][1] === 'x' && board[2][2] === 'x' || //Looking for backward diagonal
          board[0][2] === 'x' && board[1][1] === 'x' && board[2][0] === 'x') { //Looking for forward diagonal

            //This code only runs if one of the above conditions evaluates to true

            if (board[0][0] === 'x' && board[0][1] === 'x' && board[0][2] === 'x') {

                //This calls the drawVictory function with the appropriate victory type
                drawVictory('h1');

            } else if (board[1][0] === 'x' && board[1][1] === 'x' && board[1][2] === 'x') {
                drawVictory('h2');
            } else if (board[2][0] === 'x' && board[2][1] === 'x' && board[2][2] === 'x') {
                drawVictory('h3');
            } else if (board[0][0] === 'x' && board[1][0] === 'x' && board[2][0] === 'x') {
                drawVictory('v1');
            } else if (board[0][1] === 'x' && board[1][1] === 'x' && board[2][1] === 'x') {
                drawVictory('v2');
            } else if (board[0][2] === 'x' && board[1][2] === 'x' && board[2][2] === 'x') {
                drawVictory('v3');
            } else if (board[0][0] === 'x' && board[1][1] === 'x' && board[2][2] === 'x') {
                drawVictory('d1');
            } else if (board[0][2] === 'x' && board[1][1] === 'x' && board[2][0] === 'x') {
                drawVictory('d2');
            };//End of inner block

            victory = true;//Triggering victory

            //Changing CSS
            if (AI === true) {
                $('.win').text('Computer Wins!');
            } else {
                $('.win').text('X Wins!');
            };
            $('.win').css('display', 'block');
            $('.status').css('display', 'none');
            $('.tile').css('cursor', 'default');

            //Turning click listener off for all elements of tile class
            $('.tile').off('click');

      };//End of checking victory for X

    } else {

      //Checking victory for O
      //Same logic as the block above for X
      if (board[0][0] === 'o' && board[0][1] === 'o' && board[0][2] === 'o' ||
          board[1][0] === 'o' && board[1][1] === 'o' && board[1][2] === 'o' ||
          board[2][0] === 'o' && board[2][1] === 'o' && board[2][2] === 'o' ||
          board[0][0] === 'o' && board[1][0] === 'o' && board[2][0] === 'o' ||
          board[0][1] === 'o' && board[1][1] === 'o' && board[2][1] === 'o' ||
          board[0][2] === 'o' && board[1][2] === 'o' && board[2][2] === 'o' ||
          board[0][0] === 'o' && board[1][1] === 'o' && board[2][2] === 'o' ||
          board[0][2] === 'o' && board[1][1] === 'o' && board[2][0] === 'o') {
            if (board[0][0] === 'o' && board[0][1] === 'o' && board[0][2] === 'o') {
                drawVictory('h1');
            } else if (board[1][0] === 'o' && board[1][1] === 'o' && board[1][2] === 'o') {
                drawVictory('h2');
            } else if (board[2][0] === 'o' && board[2][1] === 'o' && board[2][2] === 'o') {
                drawVictory('h3');
            } else if (board[0][0] === 'o' && board[1][0] === 'o' && board[2][0] === 'o') {
                drawVictory('v1');
            } else if (board[0][1] === 'o' && board[1][1] === 'o' && board[2][1] === 'o') {
                drawVictory('v2');
            } else if (board[0][2] === 'o' && board[1][2] === 'o' && board[2][2] === 'o') {
                drawVictory('v3');
            } else if (board[0][0] === 'o' && board[1][1] === 'o' && board[2][2] === 'o') {
                drawVictory('d1');
            } else if (board[0][2] === 'o' && board[1][1] === 'o' && board[2][0] === 'o') {
                drawVictory('d2');
            };//End if inner block
        victory = true;
        if (AI === true) {
          $('.win').text('Computer Wins!');
        } else {
          $('.win').text('O Wins!');
        };
        $('.win').css('display', 'block');
        $('.status').css('display', 'none');
        $('.tile').css('cursor', 'default');
        $('.tile').off('click');
      };//End of checking victory for O
    };//End of checking whose victory it is
  };//End of checking victory

  var checkDraw = function() {

    //Checking for Draw
    //This code only runs if the turn counter reaches 9 and no victory has been triggered
    if (turn === 9 && victory === false) {

      //Updating CSS
      $('.win').text('It\'s a Draw!');
      $('.win').css('display', 'block');
      $('.status').css('display', 'none');
      $('.tile').css('cursor', 'default');

      //Turning off click listener off for all elements of tile class
      $('.tile').off('click');

    };//End of inner block
  };//End of checking for draw

  var drawVictory = function(victoryType) {
    switch (victoryType) {
      case 'h1':

        //The following statements execute an appropriate response for this case
        $('#a p').css('color', 'red');
        $('#b p').css('color', 'red');
        $('#c p').css('color', 'red');
        break;

      case 'h2':
        $('#d p').css('color', 'red');
        $('#e p').css('color', 'red');
        $('#f p').css('color', 'red');
        break;
      case 'h3':
        $('#g p').css('color', 'red');
        $('#h p').css('color', 'red');
        $('#i p').css('color', 'red');
        break;
      case 'v1':
        $('#a p').css('color', 'red');
        $('#d p').css('color', 'red');
        $('#g p').css('color', 'red');
        break;
      case 'v2':
        $('#b p').css('color', 'red');
        $('#e p').css('color', 'red');
        $('#h p').css('color', 'red');
        break;
      case 'v3':
        $('#c p').css('color', 'red');
        $('#f p').css('color', 'red');
        $('#i p').css('color', 'red');
        break;
      case 'd1':
        $('#a p').css('color', 'red');
        $('#e p').css('color', 'red');
        $('#i p').css('color', 'red');
        break;
      case 'd2':
        $('#c p').css('color', 'red');
        $('#e p').css('color', 'red');
        $('#g p').css('color', 'red');
        break;
      default:
        console.log('Error');
    };//End of switch
  };//End of drawVictory

  var changeStatus = function() {
    if (turn % 2 === 0) {
      $('.status').text('Xs Turn');
    } else {
      $('.status').text('Os Turn');
    };//End of Status Toggle
  };//End of change status

  //Menu Option 1
  $('#op1').on('click', function() {

    //Changing CSS from menu to game
    $('#welcome').css('display', 'none');
    $('table').css('display', 'table');
    $('.status').css('display', 'block');

    //Click event for one X/O game turn
    $('.tile').on('click', function(event) {

      //Updating board array, table css and incrementing turn variable by +1
      switch (event.target.id) {

        //Checking each case systematically
        case 'a':

          updateAndDraw('#a');//Updating the appropriate tile
          break;//Breaking the switch

        case 'b':
          updateAndDraw('#b');
          break;
        case 'c':
          updateAndDraw('#c');
          break;
        case 'd':
          updateAndDraw('#d');
          break;
        case 'e':
          updateAndDraw('#e');
          break;
        case 'f':
          updateAndDraw('#f');
          break;
        case 'g':
          updateAndDraw('#g');
          break;
        case 'h':
          updateAndDraw('#h');
          break;
        case 'i':
          updateAndDraw('#i');
          break;
        default:
          console.log('Error');
      };

      //Checking for victory or draw at the end of each turn
      checkVictory('X');
      checkVictory('O');
      checkDraw();

      //Change the status text
      changeStatus();

    });//End of click event (one turn)
  });//End of Human vs Human game option

  //Menu Option 2
  $('#op2').on('click', function() {
    $('#op1').css('display', 'none'); //Turning first menu off
    $('#op2').css('display', 'none'); //
    $('#op3').css('display', 'block'); //Turning second menu on
    $('#op4').css('display', 'block'); //
  });

  //Menu Option 3
  $('#op3').on('click', function() {

    //Changing CSS from menu to game
    $('#welcome').css('display', 'none');
    $('table').css('display', 'table');
    $('.status').css('display', 'block');
    $('.status').text('Humans Turn');

    $('.tile').on('click', function() {

      //Updating board array, table css and incrementing turn variable by +1
      switch (event.target.id) {

        //Checking each case systematically
        case 'a':

          updateAndDraw('#a');//Updating the appropriate tile
          break;//Breaking the switch

        case 'b':
          updateAndDraw('#b');
          break;
        case 'c':
          updateAndDraw('#c');
          break;
        case 'd':
          updateAndDraw('#d');
          break;
        case 'e':
          updateAndDraw('#e');
          break;
        case 'f':
          updateAndDraw('#f');
          break;
        case 'g':
          updateAndDraw('#g');
          break;
        case 'h':
          updateAndDraw('#h');
          break;
        case 'i':
          updateAndDraw('#i');
          break;
        default:
          console.log('Error');
      };

      //Turn one for Computer
      if (turn === 1) {

        if (board[1][1] === 'x') { //Checking if human took center tile

            //If human took center tile respond by taking upper right tile

            updateAndDraw('#c');

        } else { //Take the center tile if the human didnt
            updateAndDraw('#e');
        }; //End of inner Block
      }; //End of turn one

      //Turn two for Computer
      if (turn === 3) {

        //First checking if the center tile is an X
        if (board[1][1] === 'x') {

          //If the center tile is an X and the lower left corner isn't the following code will execute
          //This indicates that human didn't play in the opposite corner of the first O
          //This also implies that the human has two in a row/diagonal and must be stopped
          if (board[2][0] != 'x') {

            //The following statements check all possible spots for the second X
            if (board[0][0] === 'x') {

                //Respond by blocking the potential three in a row/diagonal

                updateAndDraw('#i');

            } else if (board[0][1] === 'x') {
                updateAndDraw('#h');
            } else if (board[1][0] === 'x') {
                updateAndDraw('#f');
            } else if (board[1][2] === 'x') {
                updateAndDraw('#d');
            } else if (board[2][1] === 'x') {
                updateAndDraw('#b');
            } else if (board[2][2] === 'x') {
                updateAndDraw('#a');
            };//End of inner block

          } else {

            //If the human took the corner opposite the first O
            //Respond by taking the upper left corner
            updateAndDraw('#a');
          };//End of corner check

        } else { //If the center tile isn't an X

          //The following logic checks all potential human victories
          //If a potential victorie is found it must be blocked
          if (board[0][0] === 'x' && board[0][1] === 'x' || //Checking possible victories with an X in the upper left corner
              board[0][0] === 'x' && board[0][2] === 'x' || //
              board[0][0] === 'x' && board[1][0] === 'x' || //
              board[0][0] === 'x' && board[2][0] === 'x' || //
              board[0][0] === 'x' && board[1][2] === 'x' || //
              board[0][0] === 'x' && board[2][1] === 'x' || //
              board[0][2] === 'x' && board[0][1] === 'x' || //Checking possible victories with an X in the upper right corner
              board[0][2] === 'x' && board[1][2] === 'x' || //
              board[0][2] === 'x' && board[2][2] === 'x' || //
              board[0][2] === 'x' && board[1][0] === 'x' || //
              board[0][2] === 'x' && board[2][1] === 'x' || //
              board[2][2] === 'x' && board[1][2] === 'x' || //Checking possible victories with an X in the lower right corner
              board[2][2] === 'x' && board[2][1] === 'x' || //
              board[2][2] === 'x' && board[2][0] === 'x' || //
              board[2][2] === 'x' && board[0][1] === 'x' || //
              board[2][2] === 'x' && board[1][0] === 'x' || //
              board[2][0] === 'x' && board[2][1] === 'x' || //Checking possible victories with an X in the lower left corner
              board[2][0] === 'x' && board[1][0] === 'x' || //
              board[2][0] === 'x' && board[0][1] === 'x' || //
              board[2][0] === 'x' && board[1][2] === 'x' || //
              board[0][1] === 'x' && board[1][2] === 'x' || //Checking for two edge tile combo
              board[0][1] === 'x' && board[1][0] === 'x' || //
              board[2][1] === 'x' && board[1][2] === 'x' || //
              board[2][1] === 'x' && board[1][0] === 'x') { //

                //The following only runs if one of the above statements evaluates to true
                //The following statements execute an appropriate response for each case
                if (board[0][0] === 'x' && board[0][1] === 'x') {
                    updateAndDraw('#c');
                } else if (board[0][0] === 'x' && board[0][2] === 'x') {
                    updateAndDraw('#b');
                } else if (board[0][0] === 'x' && board[1][0] === 'x') {
                    updateAndDraw('#g');
                } else if (board[0][0] === 'x' && board[2][0] === 'x') {
                    updateAndDraw('#d');
                } else if (board[0][0] === 'x' && board[1][2] === 'x') {
                    updateAndDraw('#c');
                } else if (board[0][0] === 'x' && board[2][1] === 'x') {
                    updateAndDraw('#g');
                } else if (board[0][2] === 'x' && board[0][1] === 'x') {
                    updateAndDraw('#a');
                } else if (board[0][2] === 'x' && board[1][2] === 'x') {
                    updateAndDraw('#i');
                } else if (board[0][2] === 'x' && board[2][2] === 'x') {
                    updateAndDraw('#f');
                } else if (board[0][2] === 'x' && board[1][0] === 'x') {
                    updateAndDraw('#a');
                } else if (board[0][2] === 'x' && board[2][1] === 'x') {
                    updateAndDraw('#i');
                } else if (board[2][2] === 'x' && board[1][2] === 'x') {
                    updateAndDraw('#c');
                } else if (board[2][2] === 'x' && board[2][1] === 'x') {
                    updateAndDraw('#g');
                } else if (board[2][2] === 'x' && board[2][0] === 'x') {
                    updateAndDraw('#h');
                } else if (board[2][2] === 'x' && board[0][1] === 'x') {
                    updateAndDraw('#c');
                } else if (board[2][2] === 'x' && board[1][0] === 'x') {
                    updateAndDraw('#g');
                } else if (board[2][0] === 'x' && board[2][1] === 'x') {
                    updateAndDraw('#i');
                } else if (board[2][0] === 'x' && board[1][0] === 'x') {
                    updateAndDraw('#a');
                } else if (board[2][0] === 'x' && board[0][1] === 'x') {
                    updateAndDraw('#a');
                } else if (board[2][0] === 'x' && board[1][2] === 'x') {
                    updateAndDraw('#i');
                } else if (board[0][1] === 'x' && board[1][2] === 'x') {
                    updateAndDraw('#c');
                } else if (board[0][1] === 'x' && board[1][0] === 'x') {
                    updateAndDraw('#a');
                } else if (board[2][1] === 'x' && board[1][2] === 'x') {
                    updateAndDraw('#i');
                } else if (board[2][1] === 'x' && board[1][0] === 'x') {
                    updateAndDraw('#g');
                };//End if inner block
          } else { //The only possible combination left is with X in two opposite corners

            //Respond by taking the top center tile
            updateAndDraw('#b');
          };//End of potential human history checks
        };//End of main block for turn 2
      };//End if turn two

      //Turn three for Computer
      if (turn === 5) {

        if (board[1][1] === 'x') {
          if (board[0][0] === 'o' && board[0][1] === 'empty' ||
              board[0][1] === 'o' && board[0][0] === 'empty' ||
              board[2][2] === 'o' && board[1][2] === 'empty' ||
              board[1][2] === 'o' && board[2][2] === 'empty') {
                if (board[0][0] === 'o' && board[0][1] === 'empty') {
                    updateAndDraw('#b');
                } else if (board[0][1] === 'o' && board[0][0] === 'empty') {
                    updateAndDraw('#a');
                } else if (board[2][2] === 'o' && board[1][2] === 'empty') {
                    updateAndDraw('#f');
                } else if (board[1][2] === 'o' && board[2][2] === 'empty') {
                    updateAndDraw('#i');
                };//End of inner block
          } else if (board[0][0] === 'x' && board[2][2] === 'empty' ||
                     board[0][1] === 'x' && board[2][1] === 'empty' ||
                     board[1][0] === 'x' && board[1][2] === 'empty' ||
                     board[1][2] === 'x' && board[1][0] === 'empty' ||
                     board[2][1] === 'x' && board[0][1] === 'empty' ||
                     board[2][2] === 'x' && board[0][0] === 'empty') {
                        if (board[0][0] === 'x' && board[2][2] === 'empty') {
                            updateAndDraw('#i');
                        } else if (board[0][1] === 'x' && board[2][1] === 'empty') {
                            updateAndDraw('#h');
                        } else if (board[1][0] === 'x' && board[1][2] === 'empty') {
                            updateAndDraw('#f');
                        } else if (board[1][2] === 'x' && board[1][0] === 'empty') {
                            updateAndDraw('#d');
                        } else if (board[2][1] === 'x' && board[0][1] === 'empty') {
                            updateAndDraw('#b');
                        } else if (board[2][2] === 'x' && board[0][0] === 'empty') {
                            updateAndDraw('#a');
                        };//End of inner block
          };//End of victory checks
        } else {//If the center tile is not an X
          if (board[0][0] === 'o' && board[2][2] === 'empty' ||
              board[0][1] === 'o' && board[2][1] === 'empty' ||
              board[0][2] === 'o' && board[2][0] === 'empty' ||
              board[1][0] === 'o' && board[1][2] === 'empty' ||
              board[1][2] === 'o' && board[1][0] === 'empty' ||
              board[2][0] === 'o' && board[0][2] === 'empty' ||
              board[2][1] === 'o' && board[0][1] === 'empty' ||
              board[2][2] === 'o' && board[0][0] === 'empty') {
                if (board[0][0] === 'o' && board[2][2] === 'empty') {
                    updateAndDraw('#i');
                } else if (board[0][1] === 'o' && board[2][1] === 'empty') {
                    updateAndDraw('#h');
                } else if (board[0][2] === 'o' && board[2][0] === 'empty') {
                    updateAndDraw('#g');
                } else if (board[1][0] === 'o' && board[1][2] === 'empty') {
                    updateAndDraw('#f');
                } else if (board[1][2] === 'o' && board[1][0] === 'empty') {
                    updateAndDraw('#d');
                } else if (board[2][0] === 'o' && board[0][2] === 'empty') {
                    updateAndDraw('#c');
                } else if (board[2][1] === 'o' && board[0][1] === 'empty') {
                    updateAndDraw('#b');
                } else if (board[2][2] === 'o' && board[0][0] === 'empty') {
                    updateAndDraw('#a');
                };//End of inner block
          } else if (board[0][0] === 'x' && board[0][2] === 'x' && board[0][1] === 'empty' ||
                     board[0][0] === 'x' && board[0][1] === 'x' && board[0][2] === 'empty' ||
                     board[0][0] === 'x' && board[1][0] === 'x' && board[2][0] === 'empty' ||
                     board[0][2] === 'x' && board[2][2] === 'x' && board[1][2] === 'empty' ||
                     board[0][2] === 'x' && board[0][1] === 'x' && board[0][0] === 'empty' ||
                     board[0][2] === 'x' && board[1][2] === 'x' && board[2][2] === 'empty' ||
                     board[2][2] === 'x' && board[2][0] === 'x' && board[2][1] === 'empty' ||
                     board[2][2] === 'x' && board[2][1] === 'x' && board[2][0] === 'empty' ||
                     board[2][2] === 'x' && board[1][2] === 'x' && board[0][2] === 'empty' ||
                     board[2][0] === 'x' && board[0][0] === 'x' && board[1][0] === 'empty' ||
                     board[2][0] === 'x' && board[1][0] === 'x' && board[0][0] === 'empty' ||
                     board[2][0] === 'x' && board[2][1] === 'x' && board[2][2] === 'empty') {
                        if (board[0][0] === 'x' && board[0][2] === 'x' && board[0][1] === 'empty') {
                            updateAndDraw('#b');
                        } else if (board[0][0] === 'x' && board[0][1] === 'x' && board[0][2] === 'empty') {
                            updateAndDraw('#c');
                        } else if (board[0][0] === 'x' && board[1][0] === 'x' && board[2][0] === 'empty') {
                            updateAndDraw('#g');
                        } else if (board[0][2] === 'x' && board[2][2] === 'x' && board[1][2] === 'empty') {
                            updateAndDraw('#f');
                        } else if (board[0][2] === 'x' && board[0][1] === 'x' && board[0][0] === 'empty') {
                            updateAndDraw('#a');
                        } else if (board[0][2] === 'x' && board[1][2] === 'x' && board[2][2] === 'empty') {
                            updateAndDraw('#i');
                        } else if (board[2][2] === 'x' && board[2][0] === 'x' && board[2][1] === 'empty') {
                            updateAndDraw('#h');
                        } else if (board[2][2] === 'x' && board[2][1] === 'x' && board[2][0] === 'empty') {
                            updateAndDraw('#g');
                        } else if (board[2][2] === 'x' && board[1][2] === 'x' && board[0][2] === 'empty') {
                            updateAndDraw('#c');
                        } else if (board[2][0] === 'x' && board[0][0] === 'x' && board[1][0] === 'empty') {
                            updateAndDraw('#d');
                        } else if (board[2][0] === 'x' && board[1][0] === 'x' && board[0][0] === 'empty') {
                            updateAndDraw('#a');
                        } else if (board[2][0] === 'x' && board[2][1] === 'x' && board[2][2] === 'empty') {
                            updateAndDraw('#i');
                        };//End of inner block
          } else {//Take an avalible edge tile
            if (board[0][1] === 'empty') {
                updateAndDraw('#b');
            } else if (board[1][0] === 'empty') {
                updateAndDraw('#d');
            } else if (board[1][2] === 'empty') {
                updateAndDraw('#f');
            } else if (board[2][1] === 'empty') {
                updateAndDraw('#h');
            };//End of inner block
          };//End of the center tile is not an X
        };//End of checking if center tile is an X
      };//End of turn three

      //Turn four for Computer
      if (turn === 7) {

        if (board[1][1] === 'x') {
          if (board[0][0] === 'o' && board[0][1] === 'empty' ||
              board[0][1] === 'o' && board[0][0] === 'empty' ||
              board[2][2] === 'o' && board[1][2] === 'empty' ||
              board[1][2] === 'o' && board[2][2] === 'empty') {
                if (board[0][0] === 'o' && board[0][1] === 'empty') {
                    updateAndDraw('#b');
                } else if (board[0][1] === 'o' && board[0][0] === 'empty') {
                    updateAndDraw('#a');
                } else if (board[2][2] === 'o' && board[1][2] === 'empty') {
                    updateAndDraw('#f');
                } else if (board[1][2] === 'o' && board[2][2] === 'empty') {
                    updateAndDraw('#i');
                };//End of inner block
          } else if (board[0][0] === 'x' && board[2][2] === 'empty' ||
                     board[0][1] === 'x' && board[2][1] === 'empty' ||
                     board[1][0] === 'x' && board[1][2] === 'empty' ||
                     board[1][2] === 'x' && board[1][0] === 'empty' ||
                     board[2][1] === 'x' && board[0][1] === 'empty' ||
                     board[2][2] === 'x' && board[0][0] === 'empty') {
                        if (board[0][0] === 'x' && board[2][2] === 'empty') {
                            updateAndDraw('#i');
                        } else if (board[0][1] === 'x' && board[2][1] === 'empty') {
                            updateAndDraw('#h');
                        } else if (board[1][0] === 'x' && board[1][2] === 'empty') {
                            updateAndDraw('#f');
                        } else if (board[1][2] === 'x' && board[1][0] === 'empty') {
                            updateAndDraw('#d');
                        } else if (board[2][1] === 'x' && board[0][1] === 'empty') {
                            updateAndDraw('#b');
                        } else if (board[2][2] === 'x' && board[0][0] === 'empty') {
                            updateAndDraw('#a');
                        };//End of inner block
          } else if (board[0][0] === 'empty' && board[2][2] === 'empty' ||
                     board[1][0] === 'empty' && board[1][2] === 'empty') {
                        if (board[0][0] === 'empty' && board[2][2] === 'empty') {
                            updateAndDraw('#a');
                        } else {
                            updateAndDraw('#d');
                        };//End of inner block
          };//End of victory checks
        } else {//If the center tile is not an X
          if (board[0][1] === 'o' && board[2][1] === 'empty' ||
              board[1][0] === 'o' && board[1][2] === 'empty' ||
              board[1][2] === 'o' && board[1][0] === 'empty' ||
              board[2][1] === 'o' && board[0][1] === 'empty') {
                if (board[0][1] === 'o' && board[2][1] === 'empty') {
                    updateAndDraw('#h');
                } else if (board[1][0] === 'o' && board[1][2] === 'empty') {
                    updateAndDraw('#f');
                } else if (board[1][2] === 'o' && board[1][0] === 'empty') {
                    updateAndDraw('#d');
                } else if (board[2][1] === 'o' && board[0][1] === 'empty') {
                    updateAndDraw('#b');
                };//End of inner block
          } else if (board[0][0] === 'x' && board[0][1] === 'x' && board[0][2] === 'empty' ||
                     board[0][0] === 'x' && board[1][0] === 'x' && board[2][0] === 'empty' ||
                     board[0][0] === 'x' && board[0][2] === 'x' && board[0][1] === 'empty' ||
                     board[0][2] === 'x' && board[0][1] === 'x' && board[0][0] === 'empty' ||
                     board[0][2] === 'x' && board[1][2] === 'x' && board[2][2] === 'empty' ||
                     board[0][2] === 'x' && board[2][2] === 'x' && board[1][2] === 'empty' ||
                     board[2][0] === 'x' && board[1][0] === 'x' && board[0][0] === 'empty' ||
                     board[2][0] === 'x' && board[2][1] === 'x' && board[2][2] === 'empty' ||
                     board[2][0] === 'x' && board[0][0] === 'x' && board[1][0] === 'empty' ||
                     board[2][2] === 'x' && board[1][2] === 'x' && board[0][2] === 'empty' ||
                     board[2][2] === 'x' && board[2][1] === 'x' && board[2][0] === 'empty' ||
                     board[2][2] === 'x' && board[2][0] === 'x' && board[2][1] === 'empty') {
                        if (board[0][0] === 'x' && board[0][1] === 'x' && board[0][2] === 'empty') {
                            updateAndDraw('#c');
                        } else if (board[0][0] === 'x' && board[1][0] === 'x' && board[2][0] === 'empty') {
                            updateAndDraw('#g');
                        } else if (board[0][0] === 'x' && board[0][2] === 'x' && board[0][1] === 'empty') {
                            updateAndDraw('#b');
                        } else if (board[0][2] === 'x' && board[0][1] === 'x' && board[0][0] === 'empty') {
                            updateAndDraw('#a');
                        } else if (board[0][2] === 'x' && board[1][2] === 'x' && board[2][2] === 'empty') {
                            updateAndDraw('#i');
                        } else if (board[0][2] === 'x' && board[2][2] === 'x' && board[1][2] === 'empty') {
                            updateAndDraw('#f');
                        } else if (board[2][0] === 'x' && board[1][0] === 'x' && board[0][0] === 'empty') {
                            updateAndDraw('#a');
                        } else if (board[2][0] === 'x' && board[2][1] === 'x' && board[2][2] === 'empty') {
                            updateAndDraw('#i');
                        } else if (board[2][0] === 'x' && board[0][0] === 'x' && board[1][0] === 'empty') {
                            updateAndDraw('#d');
                        } else if (board[2][2] === 'x' && board[1][2] === 'x' && board[0][2] === 'empty') {
                            updateAndDraw('#c');
                        } else if (board[2][2] === 'x' && board[2][1] === 'x' && board[2][0] === 'empty') {
                            updateAndDraw('#g');
                        } else if (board[2][2] === 'x' && board[2][0] === 'x' && board[2][1] === 'empty') {
                            updateAndDraw('#h');
                        };//End of inner block
          } else {//Go anywhere its going to be a draw
            if (board[0][0] === 'empty') {
                updateAndDraw('#a');
            } else if (board[0][1] === 'empty') {
                updateAndDraw('#b');
            } else if (board[0][2] === 'empty') {
                updateAndDraw('#c');
            } else if (board[1][0] === 'empty') {
                updateAndDraw('#d');
            } else if (board[1][2] === 'empty') {
                updateAndDraw('#f');
            } else if (board[2][0] === 'empty') {
                updateAndDraw('#g');
            } else if (board[2][1] === 'empty') {
                updateAndDraw('#h');
            } else if (board[2][2] === 'empty') {
                updateAndDraw('#i');
            };//End of inner block
          };//End of the center tile is not an X
        };//End of checking if center tile is an X
      };//End of turn four

      //Checking for victory or draw at the end of each turn
      checkVictory('O', true);
      checkDraw();

    });//End of click event (one turn)
  });//End of Human vs Computer game option

  //Menu Option 4
  $('#op4').on('click', function() {

    //Changing CSS from menu to game
    $('#welcome').css('display', 'none');
    $('table').css('display', 'table');
    $('.status').css('display', 'block');
    $('.status').text('Humans Turn');

    //Always starting in the center
    $('#e').css('cursor', 'default');
    $('#e').html('<p>X</p>');
    board[1][1] = 'x';

    //Click event for one X/O game turn
    $('.tile').on('click', function(event) {

      //Updating board array, table css and incrementing turn variable by +1
      switch (event.target.id) {

        case 'a':

          if (board[0][0] === 'empty') { //Ensuring tile isn't already occupied
            $(this).html('<p>O</p>'); //Updating HTML
            board[0][0] = 'o'; //Updating Array
          };

          //Changing cursor and incrementing turn
          $('#a').css('cursor', 'default');
          turn++

          break;

        case 'b':
          if (board[0][1] === 'empty') {
            $(this).html('<p>O</p>');
            board[0][1] = 'o';
          };
          $('#b').css('cursor', 'default');
          turn++
          break;
        case 'c':
          if (board[0][2] === 'empty') {
            $(this).html('<p>O</p>');
            board[0][2] = 'o';
          };
          $('#c').css('cursor', 'default');
          turn++
          break;
        case 'd':
          if (board[1][0] === 'empty') {
            $(this).html('<p>O</p>');
            board[1][0] = 'o';
          };
          $('#d').css('cursor', 'default');
          turn++
          break;
        case 'e':
          if (board[1][1] === 'empty') {
            $(this).html('<p>O</p>');
            board[1][1] = 'o';
          };
          $('#e').css('cursor', 'default');
          turn++
          break;
        case 'f':
          if (board[1][2] === 'empty') {
            $(this).html('<p>O</p>');
            board[1][2] = 'o';
          };
          $('#f').css('cursor', 'default');
          turn++
          break;
        case 'g':
          if (board[2][0] === 'empty') {
            $(this).html('<p>O</p>');
            board[2][0] = 'o';
          };
          $('#g').css('cursor', 'default');
          turn++
          break;
        case 'h':
          if (board[2][1] === 'empty') {
            $(this).html('<p>O</p>');
            board[2][1] = 'o';
          };
          $('#h').css('cursor', 'default');
          turn++
          break;
        case 'i':
          if (board[2][2] === 'empty') {
            $(this).html('<p>O</p>');
            board[2][2] = 'o';
          };
          $('#i').css('cursor', 'default');
          turn++
          break;
        default:
          console.log('Error');
      };

      //Turn one for Computer
      if (turn === 1) {

        //If Human placed on an edge tile
        if (board[0][1] === 'o' || board[1][0] === 'o' || board[1][2] === 'o' || board[2][1] === 'o') {

          //This code only runs if one of the above conditions evaluates to true
          if (board[0][1] === 'o') {

            //Respond by taking an opposite corner tile

            //Updating CSS and HTML
            $('#i').css('cursor', 'default');
            $('#i').html('<p>X</p>');

            //Updating array
            board[2][2] = 'x';

          } else if (board[1][0] === 'o') {
            $('#c').css('cursor', 'default');
            $('#c').html('<p>X</p>');
            board[0][2] = 'x';
          } else if (board[1][2] === 'o') {
            $('#g').css('cursor', 'default');
            $('#g').html('<p>X</p>');
            board[2][0] = 'x';
          } else if (board[2][1] === 'o') {
            $('#a').css('cursor', 'default');
            $('#a').html('<p>X</p>');
            board[0][0] = 'x';
          }; //End of inner block
        }; //End off edge tile was taken

        //If Human placed in the corner
        if (board[0][0] === 'o' || board[0][2] === 'o' || board[2][0] === 'o' || board[2][2] === 'o') {

          //This code only runs if one of the above conditions evaluates to true
          if (board[0][0] === 'o') {

            //Respond by taking the opposite corner tile

            //Updating CSS and HTML
            $('#i').css('cursor', 'default');
            $('#i').html('<p>X</p>');

            //Updating array
            board[2][2] = 'x';

          } else if (board[0][2] === 'o') {
            $('#g').css('cursor', 'default');
            $('#g').html('<p>X</p>');
            board[2][0] = 'x';
          } else if (board[2][0] === 'o') {
            $('#c').css('cursor', 'default');
            $('#c').html('<p>X</p>');
            board[0][2] = 'x';
          } else if (board[2][2] === 'o') {
            $('#a').css('cursor', 'default');
            $('#a').html('<p>X</p>');
            board[0][0] = 'x';
          }; //End of inner block
        }; //End of corner tile was taken
      }; //End of turn one

      //Turn two for Computer
      if (turn === 2) {

        //Checking for win possibility
        //Because X is always in the center and turn one always takes a corner tile, only the corners must be checked
        if (board[0][0] === 'empty' || board[0][2] === 'empty' || board[2][0] === 'empty' || board[2][2] === 'empty') {

          //This code only runs if one of the above conditions evaluates to true
          if (board[0][0] === 'x' && board[2][2] === 'empty') {

            //Respond by taking the appropriate corner to trigger a victory

            //Updating CSS and HTML
            $('#i').css('cursor', 'default');
            $('#i').html('<p>X</p>');

            //Updating array
            board[2][2] = 'x';

            //Updating move status
            lastmove = '2';

          } else if (board[0][2] === 'x' && board[2][0] === 'empty') {
            $('#g').css('cursor', 'default');
            $('#g').html('<p>X</p>');
            board[2][0] = 'x';
            lastmove = '2';
          } else if (board[2][0] === 'x' && board[0][2] === 'empty') {
            $('#c').css('cursor', 'default');
            $('#c').html('<p>X</p>');
            board[0][2] = 'x';
            lastmove = '2';
          } else if (board[2][2] === 'x' && board[0][0] === 'empty') {
            $('#a').css('cursor', 'default');
            $('#a').html('<p>X</p>');
            board[0][0] = 'x';
            lastmove = '2';
          }; //End of inner block
        }; //End of win possibility :(

        //Checking if O has two corners in which case the center edge tile must be blocked
        if (board[0][0] === 'o' && board[0][2] === 'o' ||
            board[0][0] === 'o' && board[2][0] === 'o' ||
            board[0][2] === 'o' && board[2][2] === 'o' ||
            board[2][0] === 'o' && board[2][2] === 'o') {

              //This code only runs if one of the above conditions evaluates to true
              if (board[0][0] === 'o' && board[0][2] === 'o') {

                //Respond by taking the appropriate center edge tile

                //Updating CSS and HTML
                $('#b').css('cursor', 'default');
                $('#b').html('<p>X</p>');

                //Updating array
                board[0][1] = 'x';

                //Updating move status
                lastmove = '2';

              } else if (board[0][0] === 'o' && board[2][0] === 'o') {
                 $('#d').css('cursor', 'default');
                 $('#d').html('<p>X</p>');
                 board[1][0] = 'x';
                 lastmove = '2';
               } else if (board[0][2] === 'o' && board[2][2] === 'o') {
                 $('#f').css('cursor', 'default');
                 $('#f').html('<p>X</p>');
                 board[1][2] = 'x';
                 lastmove = '2';
               } else if (board[2][0] === 'o' && board[2][2] === 'o') {
                 $('#h').css('cursor', 'default');
                 $('#h').html('<p>X</p>');
                 board[2][1] = 'x';
                 lastmove = '2';
               }; //End of inner block
        }; //End of two corner check

        //Checking if O has two in a row in which case the third tile must be blocked
        if (board[0][0] === 'o' && board[0][1] === 'o' ||
            board[0][0] === 'o' && board[1][0] === 'o' ||
            board[0][2] === 'o' && board[0][1] === 'o' ||
            board[0][2] === 'o' && board[1][2] === 'o' ||
            board[2][0] === 'o' && board[1][0] === 'o' ||
            board[2][0] === 'o' && board[2][1] === 'o' ||
            board[2][2] === 'o' && board[2][1] === 'o' ||
            board[2][2] === 'o' && board[1][2] === 'o') {

              //This code only runs if one of the above conditions evaluates to true
              if (board[0][0] === 'o' && board[0][1] === 'o') {

                  //Respond by taking the appropriate center edge tile

                  //Updateing CSS and HTML
                  $('#c').css('cursor', 'default');
                  $('#c').html('<p>X</p>');

                  //Updateing array
                  board[0][2] = 'x';

                  //Updating move status
                  lastmove = '2';

              } else if (board[0][0] === 'o' && board[1][0] === 'o') {
                  $('#g').css('cursor', 'default');
                  $('#g').html('<p>X</p>');
                  board[2][0] = 'x';
                  lastmove = '2';
              } else if (board[0][2] === 'o' && board[0][1] === 'o') {
                  $('#a').css('cursor', 'default');
                  $('#a').html('<p>X</p>');
                  board[0][0] = 'x';
                  lastmove = '2';
              } else if (board[0][2] === 'o' && board[1][2] === 'o') {
                  $('#i').css('cursor', 'default');
                  $('#i').html('<p>X</p>');
                  board[2][2] = 'x';
                  lastmove = '2';
              } else if (board[2][0] === 'o' && board[1][0] === 'o') {
                  $('#a').css('cursor', 'default');
                  $('#a').html('<p>X</p>');
                  board[0][0] = 'x';
                  lastmove = '2';
              } else if (board[2][0] === 'o' && board[2][1] === 'o') {
                  $('#i').css('cursor', 'default');
                  $('#i').html('<p>X</p>');
                  board[2][2] = 'x';
                  lastmove = '2';
              } else if (board[2][2] === 'o' && board[2][1] === 'o') {
                  $('#g').css('cursor', 'default');
                  $('#g').html('<p>X</p>');
                  board[2][0] = 'x';
                  lastmove = '2';
              } else if (board[2][2] === 'o' && board[1][2] === 'o') {
                  $('#c').css('cursor', 'default');
                  $('#c').html('<p>X</p>');
                  board[0][2] = 'x';
                  lastmove = '2';
              }; //End of inner block
            }; //End of two in a row check

        //Taking an avalible corner
        if (lastmove != '2') { //Stops double play if one of the above blocks already executed a move

          //The following statements check for an available corner with two empty adjacent edge tiles
          if (board[0][0] === 'empty' && board[0][1] === 'empty' && board[1][0] === 'empty') {

            //Respond by taking the empty corner tile

            //Updateing CSS and HTML
            $('#a').css('cursor', 'default');
            $('#a').html('<p>X</p>');

            //Updateing array
            board[0][0] = 'x';

          } else if (board[0][2] === 'empty'  && board[0][1] === 'empty' && board[1][2] === 'empty') {
            $('#c').css('cursor', 'default');
            $('#c').html('<p>X</p>');
            board[0][2] = 'x';
          } else if (board[2][0] === 'empty'  && board[1][0] === 'empty' && board[2][1] === 'empty') {
            $('#g').css('cursor', 'default');
            $('#g').html('<p>X</p>');
            board[2][0] = 'x';
          } else if (board[2][2] === 'empty'  && board[2][1] === 'empty' && board[1][2] === 'empty') {
            $('#i').css('cursor', 'default');
            $('#i').html('<p>X</p>');
            board[2][2] = 'x';
          }; //End of inner block
        }; //End of taking an avalible corner
      }; //End of turn two

      //Turn three for Computer
      if (turn === 3) {

        //Checking for win possibility
        //Checking if X has two corner tiles
        if (board[0][0] === 'x' && board[0][2] === 'x' ||
            board[0][0] === 'x' && board[2][0] === 'x' ||
            board[0][2] === 'x' && board[2][2] === 'x' ||
            board[2][0] === 'x' && board[2][2] === 'x') {

              //This code only runs if one of the above conditions evaluates to true
              if (board[0][0] === 'x' && board[0][2] === 'x') {

                //Respond by checking if the center edge tile is empty

                //If the center edge tile is empty take it
                if (board[0][1] === 'empty') {

                    //Updateing CSS and HTML
                    $('#b').css('cursor', 'default');
                    $('#b').html('<p>X</p>');

                    //Updateing array
                    board[0][1] = 'x';

                    //Updateing move status
                    lastmove = '3';

                //If the center edge tile is taken then take an available corner tile
                } else if (board[2][0] === 'empty') {
                    $('#g').css('cursor', 'default');
                    $('#g').html('<p>X</p>');
                    board[2][0] = 'x';
                    lastmove = '3';
                } else if (board[2][2] === 'empty') {
                    $('#i').css('cursor', 'default');
                    $('#i').html('<p>X</p>');
                    board[2][2] = 'x';
                    lastmove = '3';
                };

              } else if (board[0][0] === 'x' && board[2][0] === 'x') {
                if (board[1][0] === 'empty') {
                    $('#d').css('cursor', 'default');
                    $('#d').html('<p>X</p>');
                    board[1][0] = 'x';
                    lastmove = '3';
                } else if (board[0][2] === 'empty') {
                    $('#c').css('cursor', 'default');
                    $('#c').html('<p>X</p>');
                    board[0][2] = 'x';
                    lastmove = '3';
                } else if (board[2][2] === 'empty') {
                    $('#i').css('cursor', 'default');
                    $('#i').html('<p>X</p>');
                    board[2][2] = 'x';
                    lastmove = '3';
                };
              } else if (board[0][2] === 'x' && board[2][2] === 'x') {
                if (board[1][2] === 'empty') {
                    $('#f').css('cursor', 'default');
                    $('#f').html('<p>X</p>');
                    board[1][2] = 'x';
                    lastmove = '3';
                } else if (board[0][0] === 'empty') {
                    $('#a').css('cursor', 'default');
                    $('#a').html('<p>X</p>');
                    board[0][0] = 'x';
                    lastmove = '3';
                } else if (board[2][0] === 'empty') {
                    $('#g').css('cursor', 'default');
                    $('#g').html('<p>X</p>');
                    board[2][0] = 'x';
                    lastmove = '3';
                };
              } else if (board[2][0] === 'x' && board[2][2] === 'x') {
                if (board[2][1] === 'empty') {
                       $('#h').css('cursor', 'default');
                       $('#h').html('<p>X</p>');
                       board[2][1] = 'x';
                       lastmove = '3';
                } else if (board[0][0] === 'empty') {
                       $('#a').css('cursor', 'default');
                       $('#a').html('<p>X</p>');
                       board[0][0] = 'x';
                       lastmove = '3';
                } else if (board[0][2] === 'empty') {
                       $('#c').css('cursor', 'default');
                       $('#c').html('<p>X</p>');
                       board[0][2] = 'x';
                       lastmove = '3';
                };
              }; //End of inner block

        //Still checking for win possibility
        //Because X does not have two corner tiles
        //Check if X has an edge tile with an empty opposite edge tile
        } else if (board[0][1] === 'x' && board[2][1] === 'empty' ||
                   board[1][0] === 'x' && board[1][2] === 'empty' ||
                   board[1][2] === 'x' && board[1][0] === 'empty' ||
                   board[2][1] === 'x' && board[0][1] === 'empty' ) {

                    //This code only runs if one of the above conditions evaluates to true
                    if (board[0][1] === 'x') {

                      //Respond by taking the available edge tile

                      //Updateing CSS and HTML
                      $('#h').css('cursor', 'default');
                      $('#h').html('<p>X</p>');

                      //Updateing array
                      board[2][1] = 'x';

                      //Updateing move status
                      lastmove = '3';

                    } else if (board[1][0] === 'x') {
                      $('#f').css('cursor', 'default');
                      $('#f').html('<p>X</p>');
                      board[1][2] = 'x';
                      lastmove = '3';
                    } else if (board[1][2] === 'x') {
                      $('#d').css('cursor', 'default');
                      $('#d').html('<p>X</p>');
                      board[1][0] = 'x';
                      lastmove = '3';
                    } else if (board[2][1] === 'x') {
                      $('#b').css('cursor', 'default');
                      $('#b').html('<p>X</p>');
                      board[0][1] = 'x';
                      lastmove = '3';
                    }; //End of inner block
        }; //End of win possibility :(

        //Go anywhere its going to be a Draw
        if (lastmove != '3') { //Stops double play if one of the above blocks already executed a move
          if (board[0][1] === 'empty') {

            //Updateing CSS and HTML
            $('#b').css('cursor', 'default');
            $('#b').html('<p>X</p>');

            //Updateing array
            board[0][1] = 'x';

          } else if (board[1][0] === 'empty') {
            $('#d').css('cursor', 'default');
            $('#d').html('<p>X</p>');
            board[1][0] = 'x';
          } else if (board[1][2] === 'empty') {
            $('#f').css('cursor', 'default');
            $('#f').html('<p>X</p>');
            board[1][2] = 'x';
          } else if (board[2][1] === 'empty') {
            $('#h').css('cursor', 'default');
            $('#h').html('<p>X</p>');
            board[2][1] = 'x';
          } else if (board[0][0] === 'empty') {
            $('#a').css('cursor', 'default');
            $('#a').html('<p>X</p>');
            board[0][0] = 'x';
          } else if (board[0][2] === 'empty') {
            $('#c').css('cursor', 'default');
            $('#c').html('<p>X</p>');
            board[0][2] = 'x';
          } else if (board[2][0] === 'empty') {
            $('#g').css('cursor', 'default');
            $('#g').html('<p>X</p>');
            board[2][0] = 'x';
          } else if (board[2][2] === 'empty') {
            $('#i').css('cursor', 'default');
            $('#i').html('<p>X</p>');
            board[2][2] = 'x';
          }; //End of inner block
        }; //End of go anywhere
      }; // End of turn three

      //Turn four for Computer
      //Go anywhere its going to be a Draw
      if (turn === 4) {
        if (board[0][1] === 'empty') {

          //Updateing CSS and HTML
          $('#b').css('cursor', 'default');
          $('#b').html('<p>X</p>');

          //Victory only triggered if the last empty tile is an edge tile
          victory = true;

          //Updateing array
          board[0][1] = 'x';

        } else if (board[1][0] === 'empty') {
          $('#d').css('cursor', 'default');
          $('#d').html('<p>X</p>');
          victory = true;
          board[1][0] = 'x';
        } else if (board[1][2] === 'empty') {
          $('#f').css('cursor', 'default');
          $('#f').html('<p>X</p>');
          victory = true;
          board[1][2] = 'x';
        } else if (board[2][1] === 'empty') {
          $('#h').css('cursor', 'default');
          $('#h').html('<p>X</p>');
          victory = true;
          board[2][1] = 'x';
        } else if (board[0][0] === 'empty') {
          $('#a').css('cursor', 'default');
          $('#a').html('<p>X</p>');
          board[0][0] = 'x';
        } else if (board[0][2] === 'empty') {
          $('#c').css('cursor', 'default');
          $('#c').html('<p>X</p>');
          board[0][2] = 'x';
        } else if (board[2][0] === 'empty') {
          $('#g').css('cursor', 'default');
          $('#g').html('<p>X</p>');
          board[2][0] = 'x';
        } else if (board[2][2] === 'empty') {
          $('#i').css('cursor', 'default');
          $('#i').html('<p>X</p>');
          board[2][2] = 'x';
        }; //End of inner block
      }; // End of turn four

      //Checking victory for X, no victory checked for O because human can't win
      if (board[0][0] === 'x' && board[0][1] === 'x' && board[0][2] === 'x' || //Looking for horizontal victory row 0
          board[1][0] === 'x' && board[1][1] === 'x' && board[1][2] === 'x' || //Looking for horizontal victory row 1
          board[2][0] === 'x' && board[2][1] === 'x' && board[2][2] === 'x' || //Looking for horizontal victory row 2
          board[0][0] === 'x' && board[1][0] === 'x' && board[2][0] === 'x' || //Looking for vertical victory column 0
          board[0][1] === 'x' && board[1][1] === 'x' && board[2][1] === 'x' || //Looking for vertical victory column 1
          board[0][2] === 'x' && board[1][2] === 'x' && board[2][2] === 'x' || //Looking for vertical victory column 2
          board[0][0] === 'x' && board[1][1] === 'x' && board[2][2] === 'x' || //Looking for backward diagonal
          board[0][2] === 'x' && board[1][1] === 'x' && board[2][0] === 'x') { //Looking for forward diagonal

            //This code only runs if one of the above conditions evaluates to true

            if (board[0][0] === 'x' && board[0][1] === 'x' && board[0][2] === 'x') {

              //The following statements execute an appropriate response for this case

              $('#a p').css('color', 'red');
              $('#b p').css('color', 'red');
              $('#c p').css('color', 'red');

            } else if (board[1][0] === 'x' && board[1][1] === 'x' && board[1][2] === 'x') {
              $('#d p').css('color', 'red');
              $('#e p').css('color', 'red');
              $('#f p').css('color', 'red');
            } else if (board[2][0] === 'x' && board[2][1] === 'x' && board[2][2] === 'x') {
              $('#g p').css('color', 'red');
              $('#h p').css('color', 'red');
              $('#i p').css('color', 'red');
            } else if (board[0][0] === 'x' && board[1][0] === 'x' && board[2][0] === 'x') {
              $('#a p').css('color', 'red');
              $('#d p').css('color', 'red');
              $('#g p').css('color', 'red');
            } else if (board[0][1] === 'x' && board[1][1] === 'x' && board[2][1] === 'x') {
              $('#b p').css('color', 'red');
              $('#e p').css('color', 'red');
              $('#h p').css('color', 'red');
            } else if (board[0][2] === 'x' && board[1][2] === 'x' && board[2][2] === 'x') {
              $('#c p').css('color', 'red');
              $('#f p').css('color', 'red');
              $('#i p').css('color', 'red');
            } else if (board[0][0] === 'x' && board[1][1] === 'x' && board[2][2] === 'x') {
              $('#a p').css('color', 'red');
              $('#e p').css('color', 'red');
              $('#i p').css('color', 'red');
            } else if (board[0][2] === 'x' && board[1][1] === 'x' && board[2][0] === 'x') {
              $('#c p').css('color', 'red');
              $('#e p').css('color', 'red');
              $('#g p').css('color', 'red');
            };

        victory = true;//Triggering victory

        //Changing CSS
        $('.win').text('X Wins!');
        $('.win').css('display', 'block');
        $('.status').css('display', 'none');
        $('.tile').css('cursor', 'default');

        //Turning off click listener off for all elements of tile class
        $('.tile').off('click');

      };

      //Checking for Draw
      //This code only runs if the turn counter reaches 4 and no victory has been triggered
      if (turn === 4 && victory === false) {

        //Updating CSS
        $('.win').text('Its a Draw!');
        $('.win').css('display', 'block');
        $('.status').css('display', 'none');
        $('.tile').css('cursor', 'default');

        //Turning off click listener off for all elements of tile class
        $('.tile').off('click');
      };//End of checking for draw
    });//End of click event (one turn)
  });//End of Computer vs Human game option
});//End of game file
