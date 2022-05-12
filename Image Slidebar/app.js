$(document).ready(function() {

    window.addEventListener('resize', resizeSlider);

    document.querySelector('.next').addEventListener('click', next);
    document.querySelector('.prev').addEventListener('click', prev);
    document.querySelector('#close').addEventListener('click', close);

    let sliderItems = document.querySelectorAll('.slider-item');
    sliderItems.forEach(function(item) {
        item.addEventListener('click', openPicture);
    });

    let position = 0;

    function openPicture() {
        document.querySelector('.loadPic').setAttribute('src', this.getAttribute('src'));
        document.querySelector('.picture-box').style.display = 'flex';
    }

    function move() {
        let moveTo = $('.slider-item').width() * (position) + 10 * (position);
        $('.slider').css('transform', 'translateX(-' + moveTo + 'px)');
    }

    function next() {      
        if (position <= sliderItems.length - 4) {
            position++;
            move();
        }
    }

    function prev() {
        if (position > 0) {
            position--;
            move();
        }
    }

    function close() {
        document.querySelector('.picture-box').style.display = 'none';
    }

    function resizeSlider() {
        move();
    }
})


    
    


