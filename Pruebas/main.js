function createCirle(top, left){

    let circle = document.createElement("div");
    circle.className = "circle";
    circle.style.top = `${top}px`;
    circle.style.left = `${left}px`;
    
    previousCircleElement = circle;
    mouseArea.appendChild(circle);

};

let  mouseArea = document.getElementById("mouse-area");

let previousCircleElement = null;

mouseArea.onmousedown = function (e){

    createCirle(e.clientY - this.offsetTop ,e.clientX - this.offsetLeft);

}

mouseArea.onmouseup = function (e){

    previousCircleElement.parentNode.removeChild(previousCircleElement);


}