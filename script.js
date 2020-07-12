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

/* 
// Centers div.divider
function reCenter() {
    let divider = document.getElementsByClassName('divider');
    let divW;
    let parW;
    for (let i = 0; i < divider.length; i++) {
        divW = divider[i].offsetWidth;
        parW = divider[i].parentElement.offsetWidth;
        divider[i].style.position = "relative";
        divider[i].style.left = (parW - divW) / 2 + "px";
    }
} */


/* reCenter();
window.addEventListener("resize", reCenter); */


/* Main page carousel */

let nextA = document.getElementsByClassName('nextA');
let banner = document.getElementById('banner');
let index = 0;


function changeImg(e, add) {
    e.preventDefault();

    index += add;

    if (index > 2)
        index = 0;
    else if (index < 0) {
        index = 2;
    }

    switch (index) {
        case 0:
            banner.style.background = 'url(\'img/banner/banner1.jpg\') center center/cover no-repeat';

            break;
        case 1:
            banner.style.background = 'url(\'img/banner/banner2.jpg\') center center/cover no-repeat'

            break;
        case 2:
            banner.style.background = 'url(\'img/banner/banner3.jpg\') center center/cover no-repeat';
            banner.style.backgroundPosition = '0px 50px';

            break;
        default:
            console.error(`An error has occurred: index does not have an acceptable value: ${index}.`);
    }

}