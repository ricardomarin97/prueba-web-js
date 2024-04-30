function createGrid(elem, lineDist = 10, isThick = false) {

    if (!(elem instanceof Element)) {
        
        throw new TypeError(`Not an Element: ${elem}`)
    }
    else if ((typeof lineDist !== "number")) {

        throw new TypeError(`Not a Number: ${lineDist}`)

    }
    else if (typeof isThick !== "boolean") {

        throw new TypeError(`Not a Boolean: ${isThick}`);

    }

    let divWidth = (isThick) ? 2 : 1;
    let divHeight = (isThick) ? 2 : 1;
    let cartX = elem.getClientRects()[0].width;;
    let cartY = elem.getClientRects()[0].height;
    let count = 0;
    let isVertReady = false;
    let fragBlackLines = document.createDocumentFragment();
    let fragGreyLines = document.createDocumentFragment();
    let fragLightgreyLines = document.createDocumentFragment();
    let colorCase = ["black", "grey", "lightgrey"];
    let colorCount = 0;

    while (count < cartX || count < cartY) {

        let div = document.createElement("div");
        div.style.position = "absolute";
        div.style.height = (!isVertReady) ? `${cartY}px` : `${divHeight}px`;
        div.style.width = (!isVertReady) ? `${divWidth}px` : `${cartX}px`;
        div.style.backgroundColor = (!colorCount) ? colorCase[0] : ((colorCount % 5) ? colorCase[2] : colorCase[1]);

        if (!isVertReady) {
            div.style.left = `${cartX / 2 - (divWidth / 2) + count}px`;
        } else {
            div.style.top = `${cartY / 2 - (divHeight / 2) + count}px`;
        }

        switch (div.style.backgroundColor) {
            case colorCase[0]: fragBlackLines.appendChild(div); break;
            case colorCase[1]: fragGreyLines.appendChild(div); break;
            case colorCase[2]: fragLightgreyLines.appendChild(div); break;
        }

        if (count > 0) {
            count = -count;
        } else if (!isVertReady) {
            count = -count;
            isVertReady = !isVertReady;
        } else {
            count = -count + lineDist;
            isVertReady = !isVertReady;
            colorCount++;
        };

    };

    elem.appendChild(fragLightgreyLines);
    elem.appendChild(fragGreyLines);
    elem.appendChild(fragBlackLines);

};

createGrid(document.querySelector('#d1'));
