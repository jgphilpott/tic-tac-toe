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

  $("#host-a-game").click(function(){
    $("#open-games").css("visibility", "hidden")
    $(this).css("display", "none")
    $("#go-back").css("display", "block")
    $("#host-box").css("display", "block")
  })

  $("#go-back").click(function(){
    $("#open-games").css("visibility", "visible")
    $(this).css("display", "none")
    $("#host-a-game").css("display", "block")
    $("#host-box").css("display", "none")
  })

  $("#name-input").keypress(function (event) {
    if (event.key.replace(/[^A-Za-z0-9]/g,"") == "") {
      event.preventDefault()
    }
  })

  $("#host-now").click(function(){
    var name = $("#name-input").val()
    if (name != "") {
      socket.emit("makeGame", {name: name + "s"})
    }
  })

  socket.on("gameReady", function(token) {
    window.location.href = "/online-game/" + token
  })

  socket.on("newGame", function(game) {
    console.log("yolo")
  })

})
