// Centers div.optionInnerBox inside div.optionOuterBox
// div.optionInnerBox represents a box with white borders

function resize() {
    let innerDiv = document.getElementsByClassName('optionInnerBox');
    let outerDiv = document.getElementsByClassName('optionOuterBox');

    let oH;
    let oW;
    let iW;
    let iH;

    for (let i = 0; i < innerDiv.length; i++) {
        oH = outerDiv[i].offsetHeight;
        oW = outerDiv[i].offsetWidth;
        iW = innerDiv[i].offsetWidth;
        iH = innerDiv[i].offsetHeight;

        innerDiv[i].style.top = (oH - iH) / 2 + "px";
        innerDiv[i].style.left = (oW - iW) / 2 + "px";
    }
}

resize();
window.addEventListener("resize", resize);


// Centers div.divider
function recenter() {
    let divider = document.getElementsByClassName('divider');
    let divW;
    let parW;
    for (let i = 0; i < divider.length; i++) {
        divW = divider[i].offsetWidth;
        parW = divider[i].parentElement.offsetWidth;
        divider[i].style.position = "relative";
        divider[i].style.left = (parW - divW) / 2 + "px";
    }
}


recenter();
window.addEventListener("resize", recenter);