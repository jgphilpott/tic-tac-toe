$(document).on('ready', function () {

  var turn = 0;
  var gameType = 'none';
  var victory = 'no';
  var last = '0';

  var board = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];

  //Menu Option 1
  $('#op1').on('click', function() {
    gameType = 'HvH';
    $('#welcome').css('display', 'none');
    $('table').css('display', 'table');
    $('.status').css('display', 'block');

    //Click event for one X/O game turn
    $('.tile').on('click', function(event) {

      // Updateing Board
      switch (event.target.id) {
        case 'a':
          if (board[0][0] === false) {
            if (turn % 2 === 0) {
              $(this).html('<p>X</p>');
              board[0][0] = 'x';
            } else {
              $(this).html('<p>O</p>');
              board[0][0] = 'o';
            };
            $('#a').css('cursor', 'default');
            turn++
          }
          break;
        case 'b':
          if (board[0][1] === false) {
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
          if (board[0][2] === false) {
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
          if (board[1][0] === false) {
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
          if (board[1][1] === false) {
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
          if (board[1][2] === false) {
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
          if (board[2][0] === false) {
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
          if (board[2][1] === false) {
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
          if (board[2][2] === false) {
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
      }

      //Checking for Victory for X
      if (board[0][0] === 'x' && board[0][1] === 'x' && board[0][2] === 'x' ||
          board[1][0] === 'x' && board[1][1] === 'x' && board[1][2] === 'x' ||
          board[2][0] === 'x' && board[2][1] === 'x' && board[2][2] === 'x' ||
          board[0][0] === 'x' && board[1][0] === 'x' && board[2][0] === 'x' ||
          board[0][1] === 'x' && board[1][1] === 'x' && board[2][1] === 'x' ||
          board[0][2] === 'x' && board[1][2] === 'x' && board[2][2] === 'x' ||
          board[0][0] === 'x' && board[1][1] === 'x' && board[2][2] === 'x' ||
          board[0][2] === 'x' && board[1][1] === 'x' && board[2][0] === 'x') {
            if (board[0][0] === 'x' && board[0][1] === 'x' && board[0][2] === 'x') {
              $('#a p').css('color', 'red');
              $('#b p').css('color', 'red');
              $('#c p').css('color', 'red');
            };
            if (board[1][0] === 'x' && board[1][1] === 'x' && board[1][2] === 'x') {
              $('#d p').css('color', 'red');
              $('#e p').css('color', 'red');
              $('#f p').css('color', 'red');
            };
            if (board[2][0] === 'x' && board[2][1] === 'x' && board[2][2] === 'x') {
              $('#g p').css('color', 'red');
              $('#h p').css('color', 'red');
              $('#i p').css('color', 'red');
            };
            if (board[0][0] === 'x' && board[1][0] === 'x' && board[2][0] === 'x') {
              $('#a p').css('color', 'red');
              $('#d p').css('color', 'red');
              $('#g p').css('color', 'red');
            };
            if (board[0][1] === 'x' && board[1][1] === 'x' && board[2][1] === 'x') {
              $('#b p').css('color', 'red');
              $('#e p').css('color', 'red');
              $('#h p').css('color', 'red');
            };
            if (board[0][2] === 'x' && board[1][2] === 'x' && board[2][2] === 'x') {
              $('#c p').css('color', 'red');
              $('#f p').css('color', 'red');
              $('#i p').css('color', 'red');
            };
            if (board[0][0] === 'x' && board[1][1] === 'x' && board[2][2] === 'x') {
              $('#a p').css('color', 'red');
              $('#e p').css('color', 'red');
              $('#i p').css('color', 'red');
            };
            if (board[0][2] === 'x' && board[1][1] === 'x' && board[2][0] === 'x') {
              $('#c p').css('color', 'red');
              $('#e p').css('color', 'red');
              $('#g p').css('color', 'red');
            };
            victory = 'yes';
        $('.win').text('X Wins!');
        $('.win').css('display', 'block');
        $('.status').css('display', 'none');
        $('.tile').css('cursor', 'default');
        $('.tile').off('click');
      };

      //Checking for Victory for O
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
            };
            if (board[1][0] === 'o' && board[1][1] === 'o' && board[1][2] === 'o') {
              $('#d p').css('color', 'red');
              $('#e p').css('color', 'red');
              $('#f p').css('color', 'red');
            };
            if (board[2][0] === 'o' && board[2][1] === 'o' && board[2][2] === 'o') {
              $('#g p').css('color', 'red');
              $('#h p').css('color', 'red');
              $('#i p').css('color', 'red');
            };
            if (board[0][0] === 'o' && board[1][0] === 'o' && board[2][0] === 'o') {
              $('#a p').css('color', 'red');
              $('#d p').css('color', 'red');
              $('#g p').css('color', 'red');
            };
            if (board[0][1] === 'o' && board[1][1] === 'o' && board[2][1] === 'o') {
              $('#b p').css('color', 'red');
              $('#e p').css('color', 'red');
              $('#h p').css('color', 'red');
            };
            if (board[0][2] === 'o' && board[1][2] === 'o' && board[2][2] === 'o') {
              $('#c p').css('color', 'red');
              $('#f p').css('color', 'red');
              $('#i p').css('color', 'red');
            };
            if (board[0][0] === 'o' && board[1][1] === 'o' && board[2][2] === 'o') {
              $('#a p').css('color', 'red');
              $('#e p').css('color', 'red');
              $('#i p').css('color', 'red');
            };
            if (board[0][2] === 'o' && board[1][1] === 'o' && board[2][0] === 'o') {
              $('#c p').css('color', 'red');
              $('#e p').css('color', 'red');
              $('#g p').css('color', 'red');
            };
            victory = 'yes';
        $('.win').text('O Wins!');
        $('.win').css('display', 'block');
        $('.status').css('display', 'none');
        $('.tile').css('cursor', 'default');
        $('.tile').off('click');
      };

      //Checking for Draw
      if (turn === 9 && victory === 'no') {
        $('.win').text('It\'s a Draw!');
        $('.win').css('display', 'block');
        $('.status').css('display', 'none');
        $('.tile').css('cursor', 'default');
        $('.tile').off('click');
      }

      // Change Status
      if (turn % 2 === 0) {
        $('.status').text('Xs Turn');
      } else {
        $('.status').text('Os Turn');
      };

    });

  });

  //Menu Option 2
  $('#op2').on('click', function() {
    $('#op1').css('display', 'none');
    $('#op2').css('display', 'none');
    $('#op3').css('display', 'block');
    $('#op4').css('display', 'block');
  });

  //Menu Option 3
  // $('#op3').on('click', function() {
  //   gameType = 'HvC';
  //   $('#welcome').css('display', 'none');
  //   $('table').css('display', 'table');
  //   $('.status').css('display', 'block');
  // });

  //Menu Option 4
  $('#op4').on('click', function() {
    gameType = 'CvH';
    $('#welcome').css('display', 'none');
    $('table').css('display', 'table');
    $('.status').css('display', 'block');
    $('.status').text('Humans Turn');
    $('#e').css('cursor', 'default');
    $('#e').html('<p>X</p>');
    board[1][1] = 'x';

    $('.tile').on('click', function(event) {
      switch (event.target.id) {
        case 'a':
          if (board[0][0] === false) {
            $(this).html('<p>O</p>');
            board[0][0] = 'o';
          };
          turn++
          $('#a').css('cursor', 'default');
          break;
        case 'b':
          if (board[0][1] === false) {
            $(this).html('<p>O</p>');
            board[0][1] = 'o';
          };
          $('#b').css('cursor', 'default');
          turn++
          break;
        case 'c':
          if (board[0][2] === false) {
            $(this).html('<p>O</p>');
            board[0][2] = 'o';
          };
          $('#c').css('cursor', 'default');
          turn++
          break;
        case 'd':
          if (board[1][0] === false) {
            $(this).html('<p>O</p>');
            board[1][0] = 'o';
          };
          $('#d').css('cursor', 'default');
          turn++
          break;
        case 'e':
          if (board[1][1] === false) {
            $(this).html('<p>O</p>');
            board[1][1] = 'o';
          };
          $('#e').css('cursor', 'default');
          turn++
          break;
        case 'f':
          if (board[1][2] === false) {
            $(this).html('<p>O</p>');
            board[1][2] = 'o';
          };
          $('#f').css('cursor', 'default');
          turn++
          break;
        case 'g':
          if (board[2][0] === false) {
            $(this).html('<p>O</p>');
            board[2][0] = 'o';
          };
          $('#g').css('cursor', 'default');
          turn++
          break;
        case 'h':
          if (board[2][1] === false) {
            $(this).html('<p>O</p>');
            board[2][1] = 'o';
          };
          $('#h').css('cursor', 'default');
          turn++
          break;
        case 'i':
          if (board[2][2] === false) {
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

        //If Human placed on the edge
        if (board[0][1] === 'o' || board[1][0] === 'o' || board[1][2] === 'o' || board[2][1] === 'o') {
          if (board[0][1] === 'o') {
            $('#i').css('cursor', 'default');
            $('#i').html('<p>X</p>');
            board[2][2] = 'x';
          };
          if (board[1][0] === 'o') {
            $('#c').css('cursor', 'default');
            $('#c').html('<p>X</p>');
            board[0][2] = 'x';
          };
          if (board[1][2] === 'o') {
            $('#g').css('cursor', 'default');
            $('#g').html('<p>X</p>');
            board[2][0] = 'x';
          };
          if (board[2][1] === 'o') {
            $('#a').css('cursor', 'default');
            $('#a').html('<p>X</p>');
            board[0][0] = 'x';
          };
        };

        //If Human placed in the corner
        if (board[0][0] === 'o' || board[0][2] === 'o' || board[2][0] === 'o' || board[2][2] === 'o') {
          if (board[0][0] === 'o') {
            $('#i').css('cursor', 'default');
            $('#i').html('<p>X</p>');
            board[2][2] = 'x';
          };
          if (board[0][2] === 'o') {
            $('#g').css('cursor', 'default');
            $('#g').html('<p>X</p>');
            board[2][0] = 'x';
          };
          if (board[2][0] === 'o') {
            $('#c').css('cursor', 'default');
            $('#c').html('<p>X</p>');
            board[0][2] = 'x';
          };
          if (board[2][2] === 'o') {
            $('#a').css('cursor', 'default');
            $('#a').html('<p>X</p>');
            board[0][0] = 'x';
          };
        };

      };

      //Turn two for Computer
      if (turn === 2) {

        //Checking for win
        if (board[0][0] === false || board[0][2] === false || board[2][0] === false || board[2][2] === false) {
          if (board[0][0] === 'x' && board[2][2] === false) {
            $('#i').css('cursor', 'default');
            $('#i').html('<p>X</p>');
            board[2][2] = 'x';
            last = '2';
          };
          if (board[0][2] === 'x' && board[2][0] === false) {
            $('#g').css('cursor', 'default');
            $('#g').html('<p>X</p>');
            board[2][0] = 'x';
            last = '2';
          };
          if (board[2][0] === 'x' && board[0][2] === false) {
            $('#c').css('cursor', 'default');
            $('#c').html('<p>X</p>');
            board[0][2] = 'x';
            last = '2';
          };
          if (board[2][2] === 'x' && board[0][0] === false) {
            $('#a').css('cursor', 'default');
            $('#a').html('<p>X</p>');
            board[0][0] = 'x';
            last = '2';
          };
        };

        //Checking if O has two corners
           if (board[0][0] === 'o' && board[0][2] === 'o' ||
               board[0][0] === 'o' && board[2][0] === 'o' ||
               board[0][2] === 'o' && board[2][2] === 'o' ||
               board[2][0] === 'o' && board[2][2] === 'o') {
                 if (board[0][0] === 'o' && board[0][2] === 'o') {
                   $('#b').css('cursor', 'default');
                   $('#b').html('<p>X</p>');
                   board[0][1] = 'x';
                   last = '2';
                 };
                 if (board[0][0] === 'o' && board[2][0] === 'o') {
                   $('#d').css('cursor', 'default');
                   $('#d').html('<p>X</p>');
                   board[1][0] = 'x';
                   last = '2';
                 };
                 if (board[0][2] === 'o' && board[2][2] === 'o') {
                   $('#f').css('cursor', 'default');
                   $('#f').html('<p>X</p>');
                   board[1][2] = 'x';
                   last = '2';
                 };
                 if (board[2][0] === 'o' && board[2][2] === 'o') {
                   $('#h').css('cursor', 'default');
                   $('#h').html('<p>X</p>');
                   board[2][1] = 'x';
                   last = '2';
                 };
           };

         //Checking if O has two in a row
            if (board[0][0] === 'o' && board[0][1] === 'o' || board[0][0] === 'o' && board[1][0] === 'o' ||
                board[0][2] === 'o' && board[0][1] === 'o' || board[0][2] === 'o' && board[1][2] === 'o' ||
                board[2][0] === 'o' && board[1][0] === 'o' || board[2][0] === 'o' && board[2][1] === 'o' ||
                board[2][2] === 'o' && board[2][1] === 'o' || board[2][2] === 'o' && board[1][2] === 'o') {
                  if (board[0][0] === 'o' && board[0][1] === 'o') {
                    $('#c').css('cursor', 'default');
                    $('#c').html('<p>X</p>');
                    board[0][2] = 'x';
                    last = '2';
                  };
                  if (board[0][0] === 'o' && board[1][0] === 'o') {
                    $('#g').css('cursor', 'default');
                    $('#g').html('<p>X</p>');
                    board[2][0] = 'x';
                    last = '2';
                  };
                  if (board[0][2] === 'o' && board[0][1] === 'o') {
                    $('#a').css('cursor', 'default');
                    $('#a').html('<p>X</p>');
                    board[0][0] = 'x';
                    last = '2';
                  };
                  if (board[0][2] === 'o' && board[1][2] === 'o') {
                    $('#i').css('cursor', 'default');
                    $('#i').html('<p>X</p>');
                    board[2][2] = 'x';
                    last = '2';
                  };
                  if (board[2][0] === 'o' && board[1][0] === 'o') {
                    $('#a').css('cursor', 'default');
                    $('#a').html('<p>X</p>');
                    board[0][0] = 'x';
                    last = '2';
                  };
                  if (board[2][0] === 'o' && board[2][1] === 'o') {
                    $('#i').css('cursor', 'default');
                    $('#i').html('<p>X</p>');
                    board[2][2] = 'x';
                    last = '2';
                  };
                  if (board[2][2] === 'o' && board[2][1] === 'o') {
                    $('#g').css('cursor', 'default');
                    $('#g').html('<p>X</p>');
                    board[2][0] = 'x';
                    last = '2';
                  };
                  if (board[2][2] === 'o' && board[1][2] === 'o') {
                    $('#c').css('cursor', 'default');
                    $('#c').html('<p>X</p>');
                    board[0][2] = 'x';
                    last = '2';
                  };
            };

      //Taking any avalible corner
      if (last != '2') {
        if (board[0][0] === false || board[0][2] === false || board[2][0] === false || board[2][2] === false) {
          if (board[0][0] === false) {
            $('#a').css('cursor', 'default');
            $('#a').html('<p>X</p>');
            board[0][0] = 'x';
          } else if (board[0][2] === false) {
            $('#c').css('cursor', 'default');
            $('#c').html('<p>X</p>');
            board[0][2] = 'x';
          } else if (board[2][0] === false) {
            $('#g').css('cursor', 'default');
            $('#g').html('<p>X</p>');
            board[2][0] = 'x';
          } else if (board[2][2] === false) {
            $('#i').css('cursor', 'default');
            $('#i').html('<p>X</p>');
            board[2][2] = 'x';
          };
        };
      };
      };

      //Turn three for Computer
      if (turn === 3) {

        //Checking for win
             if (board[0][0] === 'x' && board[0][2] === 'x' ||
                 board[0][0] === 'x' && board[2][0] === 'x' ||
                 board[0][2] === 'x' && board[2][2] === 'x' ||
                 board[2][0] === 'x' && board[2][2] === 'x') {
                   if (board[0][0] === 'x' && board[0][2] === 'x') {
                    if (board[0][1] === false) {
                      $('#b').css('cursor', 'default');
                      $('#b').html('<p>X</p>');
                      board[0][1] = 'x';
                    } else if (board[2][0] === false) {
                      $('#g').css('cursor', 'default');
                      $('#g').html('<p>X</p>');
                      board[2][0] = 'x';
                    } else if (board[2][2] === false) {
                      $('#i').css('cursor', 'default');
                      $('#i').html('<p>X</p>');
                      board[2][2] = 'x';
                    };
                  } else if (board[0][0] === 'x' && board[2][0] === 'x') {
                     if (board[1][0] === false) {
                       $('#d').css('cursor', 'default');
                       $('#d').html('<p>X</p>');
                       board[1][0] = 'x';
                     } else if (board[0][2] === false) {
                       $('#c').css('cursor', 'default');
                       $('#c').html('<p>X</p>');
                       board[0][2] = 'x';
                     } else if (board[2][2] === false) {
                       $('#i').css('cursor', 'default');
                       $('#i').html('<p>X</p>');
                       board[2][2] = 'x';
                     };
                   } else if (board[0][2] === 'x' && board[2][2] === 'x') {
                     if (board[1][2] === false) {
                       $('#f').css('cursor', 'default');
                       $('#f').html('<p>X</p>');
                       board[1][2] = 'x';
                     } else if (board[0][0] === false) {
                       $('#a').css('cursor', 'default');
                       $('#a').html('<p>X</p>');
                       board[0][0] = 'x';
                     } else if (board[2][0] === false) {
                       $('#g').css('cursor', 'default');
                       $('#g').html('<p>X</p>');
                       board[2][2] = 'x';
                     };
                   } else if (board[2][0] === 'x' && board[2][2] === 'x') {
                     if (board[2][1] === false) {
                       $('#h').css('cursor', 'default');
                       $('#h').html('<p>X</p>');
                       board[2][1] = 'x';
                     } else if (board[0][0] === false) {
                       $('#a').css('cursor', 'default');
                       $('#a').html('<p>X</p>');
                       board[0][0] = 'x';
                     } else if (board[0][2] === false) {
                       $('#c').css('cursor', 'default');
                       $('#c').html('<p>X</p>');
                       board[0][2] = 'x';
                     };
                   };
             } else if (board[0][1] === 'x' && board[2][1] === false ||
                        board[1][0] === 'x' && board[1][2] === false ||
                        board[1][2] === 'x' && board[1][0] === false ||
                        board[2][1] === 'x' && board[0][1] === false ) {
                          if (board[0][1] === 'x') {
                            $('#h').css('cursor', 'default');
                            $('#h').html('<p>X</p>');
                            board[2][1] = 'x';
                          } else if (board[1][0] === 'x') {
                            $('#f').css('cursor', 'default');
                            $('#f').html('<p>X</p>');
                            board[1][2] = 'x';
                          } else if (board[1][2] === 'x') {
                            $('#d').css('cursor', 'default');
                            $('#d').html('<p>X</p>');
                            board[1][0] = 'x';
                          } else if (board[2][1] === 'x') {
                            $('#b').css('cursor', 'default');
                            $('#b').html('<p>X</p>');
                            board[0][1] = 'x';
                          };
             };

        //Go anywhere its going to be a Draw
          if (board[0][1] === false) {
            $('#b').css('cursor', 'default');
            $('#b').html('<p>X</p>');
            board[0][1] = 'x';
          } else if (board[1][0] === false) {
            $('#d').css('cursor', 'default');
            $('#d').html('<p>X</p>');
            board[1][0] = 'x';
          } else if (board[1][2] === false) {
            $('#f').css('cursor', 'default');
            $('#f').html('<p>X</p>');
            board[1][2] = 'x';
          } else if (board[2][1] === false) {
            $('#h').css('cursor', 'default');
            $('#h').html('<p>X</p>');
            board[2][1] = 'x';
          } else if (board[0][0] === false) {
            $('#a').css('cursor', 'default');
            $('#a').html('<p>X</p>');
            board[0][0] = 'x';
          } else if (board[0][2] === false) {
            $('#c').css('cursor', 'default');
            $('#c').html('<p>X</p>');
            board[0][2] = 'x';
          } else if (board[2][0] === false) {
            $('#g').css('cursor', 'default');
            $('#g').html('<p>X</p>');
            board[2][0] = 'x';
          } else if (board[2][2] === false) {
            $('#i').css('cursor', 'default');
            $('#i').html('<p>X</p>');
            board[2][2] = 'x';
          };

        };

      //Turn four for Computer
      if (turn === 4) {
        if (board[0][1] === false) {
          $('#b').css('cursor', 'default');
          $('#b').html('<p>X</p>');
          victory = 'yes';
          board[0][1] = 'x';
        } else if (board[1][0] === false) {
          $('#d').css('cursor', 'default');
          $('#d').html('<p>X</p>');
          victory = 'yes';
          board[1][0] = 'x';
        } else if (board[1][2] === false) {
          $('#f').css('cursor', 'default');
          $('#f').html('<p>X</p>');
          victory = 'yes';
          board[1][2] = 'x';
        } else if (board[2][1] === false) {
          $('#h').css('cursor', 'default');
          $('#h').html('<p>X</p>');
          victory = 'yes';
          board[2][1] = 'x';
        } else if (board[0][0] === false) {
          $('#a').css('cursor', 'default');
          $('#a').html('<p>X</p>');
          board[0][0] = 'x';
        } else if (board[0][2] === false) {
          $('#c').css('cursor', 'default');
          $('#c').html('<p>X</p>');
          board[0][2] = 'x';
        } else if (board[2][0] === false) {
          $('#g').css('cursor', 'default');
          $('#g').html('<p>X</p>');
          board[2][0] = 'x';
        } else if (board[2][2] === false) {
          $('#i').css('cursor', 'default');
          $('#i').html('<p>X</p>');
          board[2][2] = 'x';
        };
      }

      //Checking for Victory for X
      if (board[0][0] === 'x' && board[0][1] === 'x' && board[0][2] === 'x' ||
          board[1][0] === 'x' && board[1][1] === 'x' && board[1][2] === 'x' ||
          board[2][0] === 'x' && board[2][1] === 'x' && board[2][2] === 'x' ||
          board[0][0] === 'x' && board[1][0] === 'x' && board[2][0] === 'x' ||
          board[0][1] === 'x' && board[1][1] === 'x' && board[2][1] === 'x' ||
          board[0][2] === 'x' && board[1][2] === 'x' && board[2][2] === 'x' ||
          board[0][0] === 'x' && board[1][1] === 'x' && board[2][2] === 'x' ||
          board[0][2] === 'x' && board[1][1] === 'x' && board[2][0] === 'x') {
            if (board[0][0] === 'x' && board[0][1] === 'x' && board[0][2] === 'x') {
              $('#a p').css('color', 'red');
              $('#b p').css('color', 'red');
              $('#c p').css('color', 'red');
            };
            if (board[1][0] === 'x' && board[1][1] === 'x' && board[1][2] === 'x') {
              $('#d p').css('color', 'red');
              $('#e p').css('color', 'red');
              $('#f p').css('color', 'red');
            };
            if (board[2][0] === 'x' && board[2][1] === 'x' && board[2][2] === 'x') {
              $('#g p').css('color', 'red');
              $('#h p').css('color', 'red');
              $('#i p').css('color', 'red');
            };
            if (board[0][0] === 'x' && board[1][0] === 'x' && board[2][0] === 'x') {
              $('#a p').css('color', 'red');
              $('#d p').css('color', 'red');
              $('#g p').css('color', 'red');
            };
            if (board[0][1] === 'x' && board[1][1] === 'x' && board[2][1] === 'x') {
              $('#b p').css('color', 'red');
              $('#e p').css('color', 'red');
              $('#h p').css('color', 'red');
            };
            if (board[0][2] === 'x' && board[1][2] === 'x' && board[2][2] === 'x') {
              $('#c p').css('color', 'red');
              $('#f p').css('color', 'red');
              $('#i p').css('color', 'red');
            };
            if (board[0][0] === 'x' && board[1][1] === 'x' && board[2][2] === 'x') {
              $('#a p').css('color', 'red');
              $('#e p').css('color', 'red');
              $('#i p').css('color', 'red');
            };
            if (board[0][2] === 'x' && board[1][1] === 'x' && board[2][0] === 'x') {
              $('#c p').css('color', 'red');
              $('#e p').css('color', 'red');
              $('#g p').css('color', 'red');
            };
            victory = 'yes';
        $('.win').text('Computer Wins!');
        $('.win').css('display', 'block');
        $('.status').css('display', 'none');
        $('.tile').css('cursor', 'default');
        $('.tile').off('click');
      };

      //Checking for Victory for O
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
            };
            if (board[1][0] === 'o' && board[1][1] === 'o' && board[1][2] === 'o') {
              $('#d p').css('color', 'red');
              $('#e p').css('color', 'red');
              $('#f p').css('color', 'red');
            };
            if (board[2][0] === 'o' && board[2][1] === 'o' && board[2][2] === 'o') {
              $('#g p').css('color', 'red');
              $('#h p').css('color', 'red');
              $('#i p').css('color', 'red');
            };
            if (board[0][0] === 'o' && board[1][0] === 'o' && board[2][0] === 'o') {
              $('#a p').css('color', 'red');
              $('#d p').css('color', 'red');
              $('#g p').css('color', 'red');
            };
            if (board[0][1] === 'o' && board[1][1] === 'o' && board[2][1] === 'o') {
              $('#b p').css('color', 'red');
              $('#e p').css('color', 'red');
              $('#h p').css('color', 'red');
            };
            if (board[0][2] === 'o' && board[1][2] === 'o' && board[2][2] === 'o') {
              $('#c p').css('color', 'red');
              $('#f p').css('color', 'red');
              $('#i p').css('color', 'red');
            };
            if (board[0][0] === 'o' && board[1][1] === 'o' && board[2][2] === 'o') {
              $('#a p').css('color', 'red');
              $('#e p').css('color', 'red');
              $('#i p').css('color', 'red');
            };
            if (board[0][2] === 'o' && board[1][1] === 'o' && board[2][0] === 'o') {
              $('#c p').css('color', 'red');
              $('#e p').css('color', 'red');
              $('#g p').css('color', 'red');
            };
            victory = 'yes';
        $('.win').text('Human Wins!');
        $('.win').css('display', 'block');
        $('.status').css('display', 'none');
        $('.tile').css('cursor', 'default');
        $('.tile').off('click');
      };

      //Checking for Draw
      if (turn === 4 && victory === 'no') {
        $('.win').text('Its a Draw!');
        $('.win').css('display', 'block');
        $('.status').css('display', 'none');
        $('.tile').css('cursor', 'default');
        $('.tile').off('click');
      }

    });

  });

});
