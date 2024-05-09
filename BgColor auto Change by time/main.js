let r = 0,
  g = 0,
  b = 0;
let rPos = 2,
  gPos = 3,
  bPos = 4;

  let h1 = document.createElement("div");
  document.body.appendChild(h1);

let id = setInterval(() => {
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;

  (r > 255 || r < 0) ? ((rPos *= -1), r+=rPos) : (r += rPos);
  (g > 255 || g < 0) ? ((gPos *= -1), g+=gPos) : (g += gPos);
  (b > 255 || b < 0) ? ((bPos *= -1), b+=bPos) : (b += bPos);


}, 20);

let p = setInterval(() => {
  
  h1.textContent = `rgb(${r}, ${g}, ${b})`;
  h1.style.color = `rgb(${255-r}, ${255-g}, ${255-b})`

}, 20);