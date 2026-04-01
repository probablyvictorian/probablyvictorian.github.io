const logo = document.querySelector('.logo');

logo.addEventListener('mouseenter', function() {
    document.body.classList.add('inverted');
});

logo.addEventListener('mouseleave', function() {
    document.body.classList.remove('inverted');
});
