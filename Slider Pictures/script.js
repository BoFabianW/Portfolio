/* Variablen */
let index = 0;
let playLoop;
let start = false;

/* Da es ingesamt 6 Elemente mit der Klasse 'picture' gibt, wird aus dieser Variable ein Array */
let pictures = document.getElementsByClassName('picture');

let next = document.getElementById('next');
let rev = document.getElementById('rev');
let play = document.getElementById('play');

next.addEventListener('click', nextPic);
rev.addEventListener('click', revPic);
play.addEventListener('click', startStop);

/* Eigenschaft 'opacity' für das erste Element aus dem Array (pictures) auf '1' setzen. */
pictures[0].style.opacity = '1'; 


// Nächstes Picture anzeigen.
function nextPic() {

    index++;
    if (index >= pictures.length) index = 0;

    for(let p = 0; p < pictures.length; p++) {
        if (p == index) { 
            pictures[p].style.opacity = '1';  
        } else {
           pictures[p].style.opacity = '0';
        }
    }  
}

// Vorheriges Picture anzeigen.
function revPic() {

    if (index <= 0) index = pictures.length;
    index --;

    for(let p = 0; p < pictures.length; p++) {
        if (p == index) {
            pictures[p].style.opacity = '1';  
        } else {
           pictures[p].style.opacity = '0'; 
        }
    } 
}

/* Automatische Show starten/stoppen */
function startStop() {
    if (start) {
        start = false;
        stopPicShow();
    } else {
        start = true;
        playPicShow();
    }
}

/* Steuerelemente ausblenden und Interval starten. */
function playPicShow() {
    next.style.display = 'none';
    rev.style.display = 'none';
    play.innerHTML = '<i class="far fa-stop-circle"></i>';
    playLoop = setInterval(nextPic, 3000); /* Zuweisung eines Intervals. */
}

/* Steuerelemente einblenden und Interval stoppen. */
function stopPicShow() {
    next.style.display = 'block';
    rev.style.display = 'block';
    play.innerHTML = '<i class="far fa-play-circle"></i>';
    clearInterval(playLoop); /* Übergebenen Intervall stoppen. */
}