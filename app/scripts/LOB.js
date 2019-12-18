$(document).ready(function() {

  var socket = io.connect("http://" + document.domain + ":" + location.port)

  socket.on('clientConnect', function(clientCount) {
    console.log(clientCount);
  });

  socket.on('clientDisconnect', function(clientCount) {
    console.log(clientCount);
  });

})
