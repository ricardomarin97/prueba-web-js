// var rectTop = null;
// var rectTop = null;
// var rectWidth = null;
// var rectHeight = null;

window.onmousedown = function(e){

    rectTop = `${e.clientY}px`;
    rectLeft = `${e.clientX}px`;

    console.log(rectTop, rectLeft);
    
    let rect = document.createElement("div");
    let prueba = document.createElement("div");
    prueba.className = "prueba";
    prueba.style.top = rectTop;
    prueba.style.left = rectLeft;
    document.body.prepend(prueba);
    rect.className = "rect";
    rect.style.top = rectTop;
    rect.style.left = rectLeft;
    document.body.prepend(rect);

}

window.onmousemove = function(e){

    let rect = document.querySelector(".rect");

    if(rect !== null){

    rectWidth = e.clientX-parseInt(rectLeft);
    rectHeight = e.clientY-parseInt(rectTop);

    rect.style.top = (rectHeight >= 0)? `${rectTop}px` : `${e.clientY}px`;
    rect.style.left = (rectWidth >= 0)? `${rectLeft}px` : `${e.clientX}px`;
    rect.style.width = (rectWidth >= 0)? `${rectWidth}px` : `${-rectWidth}px`;
    rect.style.height = (rectHeight >= 0)? `${rectHeight}px`: `${-rectHeight}px`;


    }

};