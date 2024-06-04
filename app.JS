document.addEventListener('DOMContentLoaded', function() {
    const myElement = document.querySelector('#gridMid');

    myElement.addEventListener('mouseenter', function() {
        myElement.classList.add('hover-border');
    });

    myElement.addEventListener('mouseleave', function() {
        myElement.classList.remove('hover-border');
    });
});