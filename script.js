let slideIndex = 0;

function moveSlide(n) {
    const slides = document.querySelectorAll('.gallery-slide');
    slideIndex += n;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    const offset = -slideIndex * 100;
    document.querySelector('.gallery-slider').style.transform = `translateX(${offset}%)`;
}