window.addEventListener("mousedown", function createRect(e1) {

    let initX = e1.clientX;
    let initY = e1.clientY;
    let rectWidth, rectHeight;

    let rect = document.createElement("div");
    let initPoint = document.createElement("div");
    initPoint.className = "prueba";
    initPoint.style.top = `${initY}px`;
    initPoint.style.left = `${initX}px`;
    rect.className = "rect";
    document.body.appendChild(rect);
    document.body.appendChild(initPoint);

    function moveRect(e2) {

        rectWidth = e2.clientX-initX;
        rectHeight = e2.clientY-initY;

        rect.style.top = (rectHeight >= 0)? `${initY}px` : `${e2.clientY}px`;
        rect.style.left = (rectWidth >= 0)? `${initX}px` : `${e2.clientX}px`;
        rect.style.width = (rectWidth >= 0)? `${rectWidth}px` : `${-rectWidth}px`;
        rect.style.height = (rectHeight >= 0)? `${rectHeight}px`: `${-rectHeight}px`;


    }

    window.addEventListener("mousemove", moveRect);

    window.addEventListener("mouseup", function(){
        
        window.removeEventListener("mousemove", moveRect);
    })

})