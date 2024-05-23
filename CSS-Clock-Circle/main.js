let clock = document.querySelector("#clock");

clock.textContent = 0;
let count = 0;

let a = setInterval(()=>{

    count++;
    clock.textContent = (count == 60)? count=0: count;


}, 100)