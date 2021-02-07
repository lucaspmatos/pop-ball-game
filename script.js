function addBall() {
  var ball = document.createElement("div");
  ball.setAttribute("class", "ball");

  var p1 = Math.floor(Math.random() * 500);
  var p2 = Math.floor(Math.random() * 400);

  ball.setAttribute("style", "left:" + p1 + "px;top:" + p2 + "px;");
  ball.setAttribute("onclick", "popBall(this)");

  document.body.appendChild(ball);
}

function popBall(object) {
  document.body.removeChild(object);
}

function startGame() {
  setInterval(addBall, 1000);
}
