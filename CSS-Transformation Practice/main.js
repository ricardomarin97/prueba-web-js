let div = document.querySelector("#circle");

let i = 0;
let animChange = 0.01;

let trans = getComputedStyle(div).transform;

let b = setInterval(() => {

    i += animChange;
  

  div.style.transform = `${trans} 
    
    
    skewX(-${i}turn)
    
  `;

  if(i >= 1 || i <= 0){
    animChange*=-1;
  }

}, 24);
