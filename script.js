const logo = document.querySelector('#logo');
const body = document.body;

logo.addEventListener('mouseenter', function() {
    body.classList.add('inverted');
});

logo.addEventListener('mouseleave', function() {
    body.classList.remove('inverted');
});
