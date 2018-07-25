const elementCurrentPhoto = document.getElementById('currentPhoto');

const arraySrc = ['i/breuer-building.jpg','i/guggenheim-museum.jpg','i/headquarters.jpg','i/IAC.jpg','i/new-museum.jpg'];

let step = 0;
function replaceSrcNext() {
    step ++;

    elementCurrentPhoto.src = arraySrc[step];

    if (step == arraySrc.length-1 ) {
        step =-1;
    }
}

function replaceSrcPrev() {
    step --;

    if (step == -1 ) {
        step =arraySrc.length-1;
    }
    elementCurrentPhoto.src = arraySrc[step];
}

const elementPrevPhoto = document.getElementById('prevPhoto');
elementPrevPhoto.onclick = replaceSrcPrev;

const elementNextPhoto = document.getElementById('nextPhoto');
elementNextPhoto.onclick = replaceSrcNext;

