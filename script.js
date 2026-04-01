const logo = document.querySelector('#logo');
const body = document.body;

logo.addEventListener('mouseenter', function() {
    body.style.backgroundImage = "url('images/bg02.gif')";
});

logo.addEventListener('mouseleave', function() {
    body.style.backgroundImage = "url('images/bg01.gif')";
});
