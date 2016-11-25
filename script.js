$(document).on('ready', function () {

  var turn = 0;

  var board = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];

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
      $('.win').text('O Wins!');
      $('.win').css('display', 'block');
      $('.status').css('display', 'none');
      $('.tile').css('cursor', 'default');
      $('.tile').off('click');
    };

    //Checking for Draw
    if (turn === 9) {
      $('.win').text('It\'s a Draw!');
      $('.win').css('display', 'block');
      $('.status').css('display', 'none');
      $('.tile').css('cursor', 'default');
      $('.tile').off('click');
    }

    // Change Status
    if (turn % 2 === 0) {
      $('.status').text('X\'s Turn');
    } else {
      $('.status').text('O\'s Turn');
    };

  });

});
