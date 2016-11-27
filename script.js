$(document).on('ready', function() { //Only loads JavaScript once DOM is ready

  var turn = 0;
  var lastmove = '0';
  var victory = false;

  var board = [
    ['empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty'],
  ];

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

        case 'a':

          if (board[0][0] === 'empty') { //Ensuring tile isn't already occupied
            if (turn % 2 === 0) { //Checking whose turn it is
              $(this).html('<p>X</p>'); //Updating HTML
              board[0][0] = 'x'; //Updating array
            } else {
              $(this).html('<p>O</p>');
              board[0][0] = 'o';
            };

            //Changing cursor and incrementing turn
            $('#a').css('cursor', 'default');
            turn++

          }
          break;

        case 'b':
          if (board[0][1] === 'empty') {
            if (turn % 2 === 0) {
              $(this).html('<p>X</p>');
              board[0][1] = 'x';
            } else {
              $(this).html('<p>O</p>');
              board[0][1] = 'o';
            };
            $('#b').css('cursor', 'default');
            turn++
          }
          break;
        case 'c':
          if (board[0][2] === 'empty') {
            if (turn % 2 === 0) {
              $(this).html('<p>X</p>');
              board[0][2] = 'x';
            } else {
              $(this).html('<p>O</p>');
              board[0][2] = 'o';
            };
            $('#c').css('cursor', 'default');
            turn++
          }
          break;
        case 'd':
          if (board[1][0] === 'empty') {
            if (turn % 2 === 0) {
              $(this).html('<p>X</p>');
              board[1][0] = 'x';
            } else {
              $(this).html('<p>O</p>');
              board[1][0] = 'o';
            };
            $('#d').css('cursor', 'default');
            turn++
          }
          break;
        case 'e':
          if (board[1][1] === 'empty') {
            if (turn % 2 === 0) {
              $(this).html('<p>X</p>');
              board[1][1] = 'x';
            } else {
              $(this).html('<p>O</p>');
              board[1][1] = 'o';
            };
            $('#e').css('cursor', 'default');
            turn++
          }
          break;
        case 'f':
          if (board[1][2] === 'empty') {
            if (turn % 2 === 0) {
              $(this).html('<p>X</p>');
              board[1][2] = 'x';
            } else {
              $(this).html('<p>O</p>');
              board[1][2] = 'o';
            };
            $('#f').css('cursor', 'default');
            turn++
          }
          break;
        case 'g':
          if (board[2][0] === 'empty') {
            if (turn % 2 === 0) {
              $(this).html('<p>X</p>');
              board[2][0] = 'x';
            } else {
              $(this).html('<p>O</p>');
              board[2][0] = 'o';
            };
            $('#g').css('cursor', 'default');
            turn++
          }
          break;
        case 'h':
          if (board[2][1] === 'empty') {
            if (turn % 2 === 0) {
              $(this).html('<p>X</p>');
              board[2][1] = 'x';
            } else {
              $(this).html('<p>O</p>');
              board[2][1] = 'o';
            };
            $('#h').css('cursor', 'default');
            turn++
          }
          break;
        case 'i':
          if (board[2][2] === 'empty') {
            if (turn % 2 === 0) {
              $(this).html('<p>X</p>');
              board[2][2] = 'x';
            } else {
              $(this).html('<p>O</p>');
              board[2][2] = 'o';
            };
            $('#i').css('cursor', 'default');
            turn++
          }
          break;
        default:
          console.log('Error');
      };

      //Checking victory for X
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
              $('#a p').css('color', 'red');
              $('#b p').css('color', 'red');
              $('#c p').css('color', 'red');
            } else if (board[1][0] === 'o' && board[1][1] === 'o' && board[1][2] === 'o') {
              $('#d p').css('color', 'red');
              $('#e p').css('color', 'red');
              $('#f p').css('color', 'red');
            } else if (board[2][0] === 'o' && board[2][1] === 'o' && board[2][2] === 'o') {
              $('#g p').css('color', 'red');
              $('#h p').css('color', 'red');
              $('#i p').css('color', 'red');
            } else if (board[0][0] === 'o' && board[1][0] === 'o' && board[2][0] === 'o') {
              $('#a p').css('color', 'red');
              $('#d p').css('color', 'red');
              $('#g p').css('color', 'red');
            } else if (board[0][1] === 'o' && board[1][1] === 'o' && board[2][1] === 'o') {
              $('#b p').css('color', 'red');
              $('#e p').css('color', 'red');
              $('#h p').css('color', 'red');
            } else if (board[0][2] === 'o' && board[1][2] === 'o' && board[2][2] === 'o') {
              $('#c p').css('color', 'red');
              $('#f p').css('color', 'red');
              $('#i p').css('color', 'red');
            } else if (board[0][0] === 'o' && board[1][1] === 'o' && board[2][2] === 'o') {
              $('#a p').css('color', 'red');
              $('#e p').css('color', 'red');
              $('#i p').css('color', 'red');
            } else if (board[0][2] === 'o' && board[1][1] === 'o' && board[2][0] === 'o') {
              $('#c p').css('color', 'red');
              $('#e p').css('color', 'red');
              $('#g p').css('color', 'red');
            };
        victory = true;
        $('.win').text('O Wins!');
        $('.win').css('display', 'block');
        $('.status').css('display', 'none');
        $('.tile').css('cursor', 'default');
        $('.tile').off('click');
      };

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
      };

      //Change the status text
      if (turn % 2 === 0) {
        $('.status').text('Xs Turn');
      } else {
        $('.status').text('Os Turn');
      };//End of Status Toggle
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

        case 'a':

          if (board[0][0] === 'empty') { //Ensuring tile isn't already occupied
            $(this).html('<p>X</p>'); //Updating HTML
            board[0][0] = 'x'; //Updating Array
          };

          //Changing cursor and incrementing turn
          $('#a').css('cursor', 'default');
          turn++

          break;

        case 'b':
          if (board[0][1] === 'empty') {
            $(this).html('<p>X</p>');
            board[0][1] = 'x';
          };
          $('#b').css('cursor', 'default');
          turn++
          break;
        case 'c':
          if (board[0][2] === 'empty') {
            $(this).html('<p>X</p>');
            board[0][2] = 'x';
          };
          $('#c').css('cursor', 'default');
          turn++
          break;
        case 'd':
          if (board[1][0] === 'empty') {
            $(this).html('<p>X</p>');
            board[1][0] = 'x';
          };
          $('#d').css('cursor', 'default');
          turn++
          break;
        case 'e':
          if (board[1][1] === 'empty') {
            $(this).html('<p>X</p>');
            board[1][1] = 'x';
          };
          $('#e').css('cursor', 'default');
          turn++
          break;
        case 'f':
          if (board[1][2] === 'empty') {
            $(this).html('<p>X</p>');
            board[1][2] = 'x';
          };
          $('#f').css('cursor', 'default');
          turn++
          break;
        case 'g':
          if (board[2][0] === 'empty') {
            $(this).html('<p>X</p>');
            board[2][0] = 'x';
          };
          $('#g').css('cursor', 'default');
          turn++
          break;
        case 'h':
          if (board[2][1] === 'empty') {
            $(this).html('<p>X</p>');
            board[2][1] = 'x';
          };
          $('#h').css('cursor', 'default');
          turn++
          break;
        case 'i':
          if (board[2][2] === 'empty') {
            $(this).html('<p>X</p>');
            board[2][2] = 'x';
          };
          $('#i').css('cursor', 'default');
          turn++
          break;
        default:
          console.log('Error');
      };

      //Turn one for Computer
      if (turn === 1) {

        if (board[1][1] === 'x') { //Checking if human took center tile

          //If human took center tile respond by taking upper right tile

          //Updating CSS and HTML
          $('#c').css('cursor', 'default');
          $('#c').html('<p>O</p>');

          //Updateing Array
          board[0][2] = 'o';

        } else { //Take the center tile if the human didnt
          $('#e').css('cursor', 'default');
          $('#e').html('<p>O</p>');
          board[1][1] = 'o';
        }; //End of inner Block
      }; //End of turn one

      //Turn two for Computer
      if (turn === 2) {

        //First checking if the center tile is an X
        if (board[1][1] === 'x') {

          //If the center tile is an X and the lower left corner isn't the following code will execute
          //This indicates that human didn't play in the opposite corner of the first O
          //This also implies that the human has two in a row/diagonal and must be stopped
          if (board[2][0] != 'x') {

            //The following statements check all possible spots for the second X
            if (board[0][0] === 'x') {

              //Respond by blocking the potential three in a row/diagonal

              //Updateing CSS and HTML
              $('#i').css('cursor', 'default');
              $('#i').html('<p>O</p>');

              //Updateing array
              board[2][2] = 'o';

            } else if (board[0][1] === 'x') {
              $('#h').css('cursor', 'default');
              $('#h').html('<p>O</p>');
              board[2][1] = 'o';
            } else if (board[1][0] === 'x') {
              $('#f').css('cursor', 'default');
              $('#f').html('<p>O</p>');
              board[1][2] = 'o';
            } else if (board[1][2] === 'x') {
              $('#d').css('cursor', 'default');
              $('#d').html('<p>O</p>');
              board[1][0] = 'o';
            } else if (board[2][1] === 'x') {
              $('#b').css('cursor', 'default');
              $('#b').html('<p>O</p>');
              board[0][1] = 'o';
            } else if (board[2][2] === 'x') {
              $('#a').css('cursor', 'default');
              $('#a').html('<p>O</p>');
              board[0][0] = 'o';
            };//End of inner block

          } else {

            //If the human took the corner opposite the first O
            //Respond by taking the upper left corner
            $('#a').css('cursor', 'default');
            $('#a').html('<p>O</p>');
            board[0][0] = 'o';
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

                    //Updateing CSS and HTML
                    $('#c').css('cursor', 'default');
                    $('#c').html('<p>O</p>');

                    //Updateing array
                    board[0][2] = 'o';

                } else if (board[0][0] === 'x' && board[0][2] === 'x') {
                    $('#b').css('cursor', 'default');
                    $('#b').html('<p>O</p>');
                    board[0][1] = 'o';
                } else if (board[0][0] === 'x' && board[1][0] === 'x') {
                    $('#g').css('cursor', 'default');
                    $('#g').html('<p>O</p>');
                    board[2][0] = 'o';
                } else if (board[0][0] === 'x' && board[2][0] === 'x') {
                    $('#d').css('cursor', 'default');
                    $('#d').html('<p>O</p>');
                    board[1][0] = 'o';
                } else if (board[0][0] === 'x' && board[1][2] === 'x') {
                    $('#c').css('cursor', 'default');
                    $('#c').html('<p>O</p>');
                    board[0][2] = 'o';
                } else if (board[0][0] === 'x' && board[2][1] === 'x') {
                    $('#g').css('cursor', 'default');
                    $('#g').html('<p>O</p>');
                    board[2][0] = 'o';
                } else if (board[0][2] === 'x' && board[0][1] === 'x') {
                    $('#a').css('cursor', 'default');
                    $('#a').html('<p>O</p>');
                    board[0][0] = 'o';
                } else if (board[0][2] === 'x' && board[1][2] === 'x') {
                    $('#i').css('cursor', 'default');
                    $('#i').html('<p>O</p>');
                    board[2][2] = 'o';
                } else if (board[0][2] === 'x' && board[2][2] === 'x') {
                    $('#f').css('cursor', 'default');
                    $('#f').html('<p>O</p>');
                    board[1][2] = 'o';
                } else if (board[0][2] === 'x' && board[1][0] === 'x') {
                    $('#a').css('cursor', 'default');
                    $('#a').html('<p>O</p>');
                    board[0][0] = 'o';
                } else if (board[0][2] === 'x' && board[2][1] === 'x') {
                    $('#i').css('cursor', 'default');
                    $('#i').html('<p>O</p>');
                    board[2][2] = 'o';
                } else if (board[2][2] === 'x' && board[1][2] === 'x') {
                    $('#c').css('cursor', 'default');
                    $('#c').html('<p>O</p>');
                    board[0][2] = 'o';
                } else if (board[2][2] === 'x' && board[2][1] === 'x') {
                    $('#g').css('cursor', 'default');
                    $('#g').html('<p>O</p>');
                    board[2][0] = 'o';
                } else if (board[2][2] === 'x' && board[2][0] === 'x') {
                    $('#h').css('cursor', 'default');
                    $('#h').html('<p>O</p>');
                    board[2][1] = 'o';
                } else if (board[2][2] === 'x' && board[0][1] === 'x') {
                    $('#c').css('cursor', 'default');
                    $('#c').html('<p>O</p>');
                    board[0][2] = 'o';
                } else if (board[2][2] === 'x' && board[1][0] === 'x') {
                    $('#g').css('cursor', 'default');
                    $('#g').html('<p>O</p>');
                    board[2][0] = 'o';
                } else if (board[2][0] === 'x' && board[2][1] === 'x') {
                    $('#i').css('cursor', 'default');
                    $('#i').html('<p>O</p>');
                    board[2][2] = 'o';
                } else if (board[2][0] === 'x' && board[1][0] === 'x') {
                    $('#a').css('cursor', 'default');
                    $('#a').html('<p>O</p>');
                    board[0][0] = 'o';
                } else if (board[2][0] === 'x' && board[0][1] === 'x') {
                    $('#a').css('cursor', 'default');
                    $('#a').html('<p>O</p>');
                    board[0][0] = 'o';
                } else if (board[2][0] === 'x' && board[1][2] === 'x') {
                    $('#i').css('cursor', 'default');
                    $('#i').html('<p>O</p>');
                    board[2][2] = 'o';
                } else if (board[0][1] === 'x' && board[1][2] === 'x') {
                    $('#c').css('cursor', 'default');
                    $('#c').html('<p>O</p>');
                    board[0][2] = 'o';
                } else if (board[0][1] === 'x' && board[1][0] === 'x') {
                    $('#a').css('cursor', 'default');
                    $('#a').html('<p>O</p>');
                    board[0][0] = 'o';
                } else if (board[2][1] === 'x' && board[1][2] === 'x') {
                    $('#i').css('cursor', 'default');
                    $('#i').html('<p>O</p>');
                    board[2][2] = 'o';
                } else if (board[2][1] === 'x' && board[1][0] === 'x') {
                    $('#g').css('cursor', 'default');
                    $('#g').html('<p>O</p>');
                    board[2][0] = 'o';
                };//End if inner block
          } else { //The only possible combination left is with X in two opposite corners

            //Respond by taking the top center tile
            $('#b').css('cursor', 'default');
            $('#b').html('<p>O</p>');
            board[0][1] = 'o';
          };//End of potential human history checks
        };//End of main block for turn 2
      };//End if turn two

      //Turn three for Computer
      if (turn === 3) {

        if (board[1][1] === 'x') {
          if (board[0][0] === 'o' && board[0][1] === 'empty' ||
              board[0][1] === 'o' && board[0][0] === 'empty' ||
              board[2][2] === 'o' && board[1][2] === 'empty' ||
              board[1][2] === 'o' && board[2][2] === 'empty') {
                if (board[0][0] === 'o' && board[0][1] === 'empty') {
                    $('#b').css('cursor', 'default');
                    $('#b').html('<p>O</p>');
                    board[0][1] = 'o';
                } else if (board[0][1] === 'o' && board[0][0] === 'empty') {
                    $('#a').css('cursor', 'default');
                    $('#a').html('<p>O</p>');
                    board[0][0] = 'o';
                } else if (board[2][2] === 'o' && board[1][2] === 'empty') {
                    $('#f').css('cursor', 'default');
                    $('#f').html('<p>O</p>');
                    board[1][2] = 'o';
                } else if (board[1][2] === 'o' && board[2][2] === 'empty') {
                    $('#i').css('cursor', 'default');
                    $('#i').html('<p>O</p>');
                    board[2][2] = 'o';
                };//End of inner block
          } else if (board[0][0] === 'x' && board[2][2] === 'empty' ||
                     board[0][1] === 'x' && board[2][1] === 'empty' ||
                     board[1][0] === 'x' && board[1][2] === 'empty' ||
                     board[1][2] === 'x' && board[1][0] === 'empty' ||
                     board[2][1] === 'x' && board[0][1] === 'empty' ||
                     board[2][2] === 'x' && board[0][0] === 'empty') {
                        if (board[0][0] === 'x' && board[2][2] === 'empty') {
                            $('#i').css('cursor', 'default');
                            $('#i').html('<p>O</p>');
                            board[2][2] = 'o';
                        } else if (board[0][1] === 'x' && board[2][1] === 'empty') {
                            $('#h').css('cursor', 'default');
                            $('#h').html('<p>O</p>');
                            board[2][1] = 'o';
                        } else if (board[1][0] === 'x' && board[1][2] === 'empty') {
                            $('#f').css('cursor', 'default');
                            $('#f').html('<p>O</p>');
                            board[1][2] = 'o';
                        } else if (board[1][2] === 'x' && board[1][0] === 'empty') {
                            $('#d').css('cursor', 'default');
                            $('#d').html('<p>O</p>');
                            board[1][0] = 'o';
                        } else if (board[2][1] === 'x' && board[0][1] === 'empty') {
                            $('#b').css('cursor', 'default');
                            $('#b').html('<p>O</p>');
                            board[0][1] = 'o';
                        } else if (board[2][2] === 'x' && board[0][0] === 'empty') {
                            $('#a').css('cursor', 'default');
                            $('#a').html('<p>O</p>');
                            board[0][0] = 'o';
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
                    $('#i').css('cursor', 'default');
                    $('#i').html('<p>O</p>');
                    board[2][2] = 'o';
                } else if (board[0][1] === 'o' && board[2][1] === 'empty') {
                    $('#h').css('cursor', 'default');
                    $('#h').html('<p>O</p>');
                    board[2][1] = 'o';
                } else if (board[0][2] === 'o' && board[2][0] === 'empty') {
                    $('#g').css('cursor', 'default');
                    $('#g').html('<p>O</p>');
                    board[2][0] = 'o';
                } else if (board[1][0] === 'o' && board[1][2] === 'empty') {
                    $('#f').css('cursor', 'default');
                    $('#f').html('<p>O</p>');
                    board[1][2] = 'o';
                } else if (board[1][2] === 'o' && board[1][0] === 'empty') {
                    $('#d').css('cursor', 'default');
                    $('#d').html('<p>O</p>');
                    board[1][0] = 'o';
                } else if (board[2][0] === 'o' && board[0][2] === 'empty') {
                    $('#c').css('cursor', 'default');
                    $('#c').html('<p>O</p>');
                    board[0][2] = 'o';
                } else if (board[2][1] === 'o' && board[0][1] === 'empty') {
                    $('#b').css('cursor', 'default');
                    $('#b').html('<p>O</p>');
                    board[0][1] = 'o';
                } else if (board[2][2] === 'o' && board[0][0] === 'empty') {
                    $('#a').css('cursor', 'default');
                    $('#a').html('<p>O</p>');
                    board[0][0] = 'o';
                };//End of inner block
          } else if (board[0][0] === 'x' && board[0][2] === 'x' && board[0][1] === 'empty' ||
                     board[0][2] === 'x' && board[2][2] === 'x' && board[1][2] === 'empty' ||
                     board[2][2] === 'x' && board[2][0] === 'x' && board[2][1] === 'empty' ||
                     board[2][0] === 'x' && board[0][0] === 'x' && board[1][0] === 'empty') {
                        if (board[0][0] === 'x' && board[0][2] === 'x' && board[0][1] === 'empty') {
                            $('#b').css('cursor', 'default');
                            $('#b').html('<p>O</p>');
                            board[0][1] = 'o';
                        } else if (board[0][2] === 'x' && board[2][2] === 'x' && board[1][2] === 'empty') {
                            $('#f').css('cursor', 'default');
                            $('#f').html('<p>O</p>');
                            board[1][2] = 'o';
                        } else if (board[2][2] === 'x' && board[2][0] === 'x' && board[2][1] === 'empty') {
                            $('#h').css('cursor', 'default');
                            $('#h').html('<p>O</p>');
                            board[2][1] = 'o';
                        } else if (board[2][0] === 'x' && board[0][0] === 'x' && board[1][0] === 'empty') {
                            $('#d').css('cursor', 'default');
                            $('#d').html('<p>O</p>');
                            board[1][0] = 'o';
                        };//End of inner block
          } else {//Take an avalible edge tile
            if (board[0][1] === 'empty') {
                $('#b').css('cursor', 'default');
                $('#b').html('<p>O</p>');
                board[0][1] = 'o';
            } else if (board[1][0] === 'empty') {
                $('#d').css('cursor', 'default');
                $('#d').html('<p>O</p>');
                board[1][0] = 'o';
            } else if (board[1][2] === 'empty') {
                $('#f').css('cursor', 'default');
                $('#f').html('<p>O</p>');
                board[1][2] = 'o';
            } else if (board[2][1] === 'empty') {
                $('#h').css('cursor', 'default');
                $('#h').html('<p>O</p>');
                board[2][1] = 'o';
            };//End of inner block
          };//End of the center tile is not an X
        };//End of checking if center tile is an X
      };//End of turn three

      //Turn four for Computer
      if (turn === 4) {

        if (board[1][1] === 'x') {
          if (board[0][0] === 'o' && board[0][1] === 'empty' ||
              board[0][1] === 'o' && board[0][0] === 'empty' ||
              board[2][2] === 'o' && board[1][2] === 'empty' ||
              board[1][2] === 'o' && board[2][2] === 'empty') {
                if (board[0][0] === 'o' && board[0][1] === 'empty') {
                    $('#b').css('cursor', 'default');
                    $('#b').html('<p>O</p>');
                    board[0][1] = 'o';
                } else if (board[0][1] === 'o' && board[0][0] === 'empty') {
                    $('#a').css('cursor', 'default');
                    $('#a').html('<p>O</p>');
                    board[0][0] = 'o';
                } else if (board[2][2] === 'o' && board[1][2] === 'empty') {
                    $('#f').css('cursor', 'default');
                    $('#f').html('<p>O</p>');
                    board[1][2] = 'o';
                } else if (board[1][2] === 'o' && board[2][2] === 'empty') {
                    $('#i').css('cursor', 'default');
                    $('#i').html('<p>O</p>');
                    board[2][2] = 'o';
                };//End of inner block
          } else if (board[0][0] === 'x' && board[2][2] === 'empty' ||
                     board[0][1] === 'x' && board[2][1] === 'empty' ||
                     board[1][0] === 'x' && board[1][2] === 'empty' ||
                     board[1][2] === 'x' && board[1][0] === 'empty' ||
                     board[2][1] === 'x' && board[0][1] === 'empty' ||
                     board[2][2] === 'x' && board[0][0] === 'empty') {
                        if (board[0][0] === 'x' && board[2][2] === 'empty') {
                            $('#i').css('cursor', 'default');
                            $('#i').html('<p>O</p>');
                            board[2][2] = 'o';
                        } else if (board[0][1] === 'x' && board[2][1] === 'empty') {
                            $('#h').css('cursor', 'default');
                            $('#h').html('<p>O</p>');
                            board[2][1] = 'o';
                        } else if (board[1][0] === 'x' && board[1][2] === 'empty') {
                            $('#f').css('cursor', 'default');
                            $('#f').html('<p>O</p>');
                            board[1][2] = 'o';
                        } else if (board[1][2] === 'x' && board[1][0] === 'empty') {
                            $('#d').css('cursor', 'default');
                            $('#d').html('<p>O</p>');
                            board[1][0] = 'o';
                        } else if (board[2][1] === 'x' && board[0][1] === 'empty') {
                            $('#b').css('cursor', 'default');
                            $('#b').html('<p>O</p>');
                            board[0][1] = 'o';
                        } else if (board[2][2] === 'x' && board[0][0] === 'empty') {
                            $('#a').css('cursor', 'default');
                            $('#a').html('<p>O</p>');
                            board[0][0] = 'o';
                        };//End of inner block
          } else if (board[0][0] === 'empty' && board[2][2] === 'empty' ||
                     board[1][0] === 'empty' && board[1][2] === 'empty') {
                        if (board[0][0] === 'empty' && board[2][2] === 'empty') {
                            $('#a').css('cursor', 'default');
                            $('#a').html('<p>O</p>');
                            board[0][0] = 'o';
                        } else {
                            $('#d').css('cursor', 'default');
                            $('#d').html('<p>O</p>');
                            board[1][0] = 'o';
                        };//End of inner block
          };//End of victory checks
        } else {//If the center tile is not an X
          if (board[0][1] === 'o' && board[2][1] === 'empty' ||
              board[1][0] === 'o' && board[1][2] === 'empty' ||
              board[1][2] === 'o' && board[1][0] === 'empty' ||
              board[2][1] === 'o' && board[0][1] === 'empty') {
                if (board[0][1] === 'o' && board[2][1] === 'empty') {
                    $('#h').css('cursor', 'default');
                    $('#h').html('<p>O</p>');
                    board[2][1] = 'o';
                } else if (board[1][0] === 'o' && board[1][2] === 'empty') {
                    $('#f').css('cursor', 'default');
                    $('#f').html('<p>O</p>');
                    board[1][2] = 'o';
                } else if (board[1][2] === 'o' && board[1][0] === 'empty') {
                    $('#d').css('cursor', 'default');
                    $('#d').html('<p>O</p>');
                    board[1][0] = 'o';
                } else if (board[2][1] === 'o' && board[0][1] === 'empty') {
                    $('#b').css('cursor', 'default');
                    $('#b').html('<p>O</p>');
                    board[0][1] = 'o';
                };//End of inner block
          } else if (board[0][0] === 'x' && board[0][1] === 'x' && board[0][2] === 'empty' ||
                     board[0][0] === 'x' && board[1][0] === 'x' && board[2][0] === 'empty' ||
                     board[0][2] === 'x' && board[0][1] === 'x' && board[0][0] === 'empty' ||
                     board[0][2] === 'x' && board[1][2] === 'x' && board[2][2] === 'empty' ||
                     board[2][0] === 'x' && board[1][0] === 'x' && board[0][0] === 'empty' ||
                     board[2][0] === 'x' && board[2][1] === 'x' && board[2][2] === 'empty' ||
                     board[2][2] === 'x' && board[1][2] === 'x' && board[0][2] === 'empty' ||
                     board[2][2] === 'x' && board[2][1] === 'x' && board[2][0] === 'empty') {
                        if (board[0][0] === 'x' && board[0][1] === 'x' && board[0][2] === 'empty') {
                            $('#c').css('cursor', 'default');
                            $('#c').html('<p>O</p>');
                            board[0][2] = 'o';
                        } else if (board[0][0] === 'x' && board[1][0] === 'x' && board[2][0] === 'empty') {
                            $('#g').css('cursor', 'default');
                            $('#g').html('<p>O</p>');
                            board[2][0] = 'o';
                        } else if (board[0][2] === 'x' && board[0][1] === 'x' && board[0][0] === 'empty') {
                            $('#a').css('cursor', 'default');
                            $('#a').html('<p>O</p>');
                            board[0][0] = 'o';
                        } else if (board[0][2] === 'x' && board[1][2] === 'x' && board[2][2] === 'empty') {
                            $('#i').css('cursor', 'default');
                            $('#i').html('<p>O</p>');
                            board[2][2] = 'o';
                        } else if (board[2][0] === 'x' && board[1][0] === 'x' && board[0][0] === 'empty') {
                            $('#a').css('cursor', 'default');
                            $('#a').html('<p>O</p>');
                            board[0][0] = 'o';
                        } else if (board[2][0] === 'x' && board[2][1] === 'x' && board[2][2] === 'empty') {
                            $('#i').css('cursor', 'default');
                            $('#i').html('<p>O</p>');
                            board[2][2] = 'o';
                        } else if (board[2][2] === 'x' && board[1][2] === 'x' && board[0][2] === 'empty') {
                            $('#c').css('cursor', 'default');
                            $('#c').html('<p>O</p>');
                            board[0][2] = 'o';
                        } else if (board[2][2] === 'x' && board[2][1] === 'x' && board[2][0] === 'empty') {
                            $('#g').css('cursor', 'default');
                            $('#g').html('<p>O</p>');
                            board[2][0] = 'o';
                        };//End of inner block
          } else {//Go anywhere its going to be a draw
            if (board[0][0] === 'empty') {
                $('#a').css('cursor', 'default');
                $('#a').html('<p>O</p>');
                board[0][0] = 'o';
            } else if (board[0][1] === 'empty') {
                $('#b').css('cursor', 'default');
                $('#b').html('<p>O</p>');
                board[0][1] = 'o';
            } else if (board[0][2] === 'empty') {
                $('#c').css('cursor', 'default');
                $('#c').html('<p>O</p>');
                board[0][2] = 'o';
            } else if (board[1][0] === 'empty') {
                $('#d').css('cursor', 'default');
                $('#d').html('<p>O</p>');
                board[1][0] = 'o';
            } else if (board[1][2] === 'empty') {
                $('#f').css('cursor', 'default');
                $('#f').html('<p>O</p>');
                board[1][2] = 'o';
            } else if (board[2][0] === 'empty') {
                $('#g').css('cursor', 'default');
                $('#g').html('<p>O</p>');
                board[2][0] = 'o';
            } else if (board[2][1] === 'empty') {
                $('#h').css('cursor', 'default');
                $('#h').html('<p>O</p>');
                board[2][1] = 'o';
            } else if (board[2][2] === 'empty') {
                $('#i').css('cursor', 'default');
                $('#i').html('<p>O</p>');
                board[2][2] = 'o';
            };//End of inner block
          };//End of the center tile is not an X
        };//End of checking if center tile is an X
      };//End of turn four

      //Checking victory for O
      if (board[0][0] === 'o' && board[0][1] === 'o' && board[0][2] === 'o' || //Looking for horizontal victory row 0
          board[1][0] === 'o' && board[1][1] === 'o' && board[1][2] === 'o' || //Looking for horizontal victory row 1
          board[2][0] === 'o' && board[2][1] === 'o' && board[2][2] === 'o' || //Looking for horizontal victory row 2
          board[0][0] === 'o' && board[1][0] === 'o' && board[2][0] === 'o' || //Looking for vertical victory column 0
          board[0][1] === 'o' && board[1][1] === 'o' && board[2][1] === 'o' || //Looking for vertical victory column 1
          board[0][2] === 'o' && board[1][2] === 'o' && board[2][2] === 'o' || //Looking for vertical victory column 2
          board[0][0] === 'o' && board[1][1] === 'o' && board[2][2] === 'o' || //Looking for backward diagonal
          board[0][2] === 'o' && board[1][1] === 'o' && board[2][0] === 'o') { //Looking for forward diagonal

            //This code only runs if one of the above conditions evaluates to true

            if (board[0][0] === 'o' && board[0][1] === 'o' && board[0][2] === 'o') {

              //The following statements execute an appropriate response for this case

              $('#a p').css('color', 'red');
              $('#b p').css('color', 'red');
              $('#c p').css('color', 'red');

            } else if (board[1][0] === 'o' && board[1][1] === 'o' && board[1][2] === 'o') {
              $('#d p').css('color', 'red');
              $('#e p').css('color', 'red');
              $('#f p').css('color', 'red');
            } else if (board[2][0] === 'o' && board[2][1] === 'o' && board[2][2] === 'o') {
              $('#g p').css('color', 'red');
              $('#h p').css('color', 'red');
              $('#i p').css('color', 'red');
            } else if (board[0][0] === 'o' && board[1][0] === 'o' && board[2][0] === 'o') {
              $('#a p').css('color', 'red');
              $('#d p').css('color', 'red');
              $('#g p').css('color', 'red');
            } else if (board[0][1] === 'o' && board[1][1] === 'o' && board[2][1] === 'o') {
              $('#b p').css('color', 'red');
              $('#e p').css('color', 'red');
              $('#h p').css('color', 'red');
            } else if (board[0][2] === 'o' && board[1][2] === 'o' && board[2][2] === 'o') {
              $('#c p').css('color', 'red');
              $('#f p').css('color', 'red');
              $('#i p').css('color', 'red');
            } else if (board[0][0] === 'o' && board[1][1] === 'o' && board[2][2] === 'o') {
              $('#a p').css('color', 'red');
              $('#e p').css('color', 'red');
              $('#i p').css('color', 'red');
            } else if (board[0][2] === 'o' && board[1][1] === 'o' && board[2][0] === 'o') {
              $('#c p').css('color', 'red');
              $('#e p').css('color', 'red');
              $('#g p').css('color', 'red');
            };

        victory = true;//Triggering victory

        //Changing CSS
        $('.win').text('Computer Wins!');
        $('.win').css('display', 'block');
        $('.status').css('display', 'none');
        $('.tile').css('cursor', 'default');

        //Turning off click listener off for all elements of tile class
        $('.tile').off('click');

      };

      //Checking for Draw
      //This code only runs if the turn counter reaches 9 and no victory has been triggered
      if (turn === 5 && victory === false) {

        //Updating CSS
        $('.win').text('It\'s a Draw!');
        $('.win').css('display', 'block');
        $('.status').css('display', 'none');
        $('.tile').css('cursor', 'default');

        //Turning off click listener off for all elements of tile class
        $('.tile').off('click');
      };
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
