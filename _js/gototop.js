var mybutton = document.getElementById("gototop");

function scrollFunction() {
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

    if (mybutton) {
        if (scrollTop > 400) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
}

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', scrollFunction);
window.addEventListener('resize', scrollFunction);

document.addEventListener('click', function(e) {
    var clickedSpan = e.target.closest('.main-playlist span');

    if (clickedSpan) {
        e.preventDefault();
        topFunction();
    }
});

if (mybutton) {
    mybutton.addEventListener('click', topFunction);
}