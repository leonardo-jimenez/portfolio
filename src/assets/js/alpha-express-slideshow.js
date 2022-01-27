const slideshowContainer = document.getElementById('slideshow-container')
const slideshowNavContainer = document.getElementById('slideshow-nav-container')
const slideShowItems = slideshowContainer.querySelectorAll(':scope > *')
const previousArrow = document.getElementById('previous-arrow')
const nextArrow = document.getElementById('next-arrow')

let currentSlide = 0;
let slidesAmount = slideShowItems.length

slideShowItems.forEach((el, index) => {
    el.setAttribute("slidePosition", index)
    if (index == 0) {
        el.classList.add('slide')
        el.classList.add('current')
    } else {
        el.classList.add('slide')
    }
});


const slideshowNavItems = slideshowNavContainer.querySelectorAll(':scope > *')
slideshowNavItems[0].classList.add('current');

slideshowNavItems.forEach((el, index) => {
    el.addEventListener("click", function () {
        changeSlide(index)
    });
});

previousArrow.addEventListener("click", function () {
    changeSlide(currentSlide - 1)
});

nextArrow.addEventListener("click", function () {
    changeSlide(currentSlide + 1)
});

function changeSlide(index) {
    if (index != currentSlide) {
        clearInterval(slideInterval)

        slideShowItems[currentSlide].classList.remove('current');
        slideshowNavItems[currentSlide].classList.remove('current');
        if (index >= slidesAmount) {
            currentSlide = 0
        } else if (index < 0) {
            currentSlide = slidesAmount - 1
        } else {
            currentSlide = index;
        }
        slideShowItems[currentSlide].classList.add('current')
        slideshowNavItems[currentSlide].classList.add('current')

        slideInterval = window.setInterval(function () {
            changeSlide(currentSlide + 1)
        }, 4000);

    }
}

let slideInterval = window.setInterval(function () {
    changeSlide(currentSlide + 1)
}, 4000);