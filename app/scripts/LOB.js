$(document).ready(function() {

  var socket = io.connect("http://" + document.domain + ":" + location.port)

  function changeClientCount(clientCount) {
    if (clientCount == 1) {
      $("#client-count").text(clientCount + " player ")
    } else {
      $("#client-count").text(clientCount + " players ")
    }
  }

  socket.on("clientConnect", function(clientCount) {
    changeClientCount(clientCount)
  })

  socket.on("clientDisconnect", function(clientCount) {
    changeClientCount(clientCount)
  })

})
