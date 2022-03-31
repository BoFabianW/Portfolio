let pictures = document.querySelectorAll('.picture');

pictures.forEach(function(item) {
    item.addEventListener('click', function() {
        document.querySelector('.active').classList.remove('active');
        this.classList.add('active');
    })
});