window.onmousedown = function (e) {

    e.preventDefault();
    let circle = document.createElement("div");
    let circleDiameter = "20";
    circle.className = "mouseCircle";
    circle.style.position = "fixed";
    circle.style.backgroundColor = (e.button == 0)? "blue" : ((e.button ==1)?"orange":"pink");
    circle.style.borderRadius = `10px`;
    circle.style.width = `${circleDiameter}px`;
    circle.style.height = `${circleDiameter}px`;
    circle.style.top = `${e.clientY - circleDiameter / 2}px`;
    circle.style.left = `${e.clientX - circleDiameter / 2}px`;
    document.body.appendChild(circle);

}

window.onmousemove = function (e) {


    let circle = document.querySelectorAll(".mouseCircle");
    circle.forEach(v => {
        if (v !== null) {

            let circleDiameter = parseInt(v.style.width, 10);
            v.style.top = `${e.clientY - circleDiameter / 2}px`;
            v.style.left = `${e.clientX - circleDiameter / 2}px`;
    
        };
    })
};

window.onmouseup = function (e){
    let circle = document.querySelector(".mouseCircle");
    circle.parentNode.removeChild(circle);
};

window.oncontextmenu = function(e){
    e.preventDefault();
}