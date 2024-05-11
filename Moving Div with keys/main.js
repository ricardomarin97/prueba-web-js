let first = document.querySelector("#first");

let velocity = 10;
let sprint = 2;
let slow = 0.5;

let x = (y = z = velocity);
var map = {};

setInterval(() => {
  window.onkeydown = window.onkeyup = function (e) {
    e.preventDefault();
    map[e.key] = e.type;
  };

  if (map["Shift"] === "keydown") {
    x = y = z = velocity * sprint;
  } else {
    x = y = z = velocity;
  }

  if (map["Control"] === "keydown") {
    x = y = z = velocity * slow;
  }

  if (map["ArrowUp"] === "keydown" || map["w"] === "keydown")
    first.style.top = `${parseFloat(getComputedStyle(first).top) - y}px`;
  if (map["ArrowDown"] === "keydown" || map["s"] === "keydown")
    first.style.top = `${parseFloat(getComputedStyle(first).top) + y}px`;
  if (map["ArrowRight"] === "keydown" || map["d"] === "keydown")
    first.style.left = `${parseFloat(getComputedStyle(first).left) + x}px`;
  if (map["ArrowLeft"] === "keydown" || map["a"] === "keydown")
    first.style.left = `${parseFloat(getComputedStyle(first).left) - x}px`;
}, 24);
