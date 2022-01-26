const slideshowContainer = document.getElementById('slideshow-container')
const slideshowDotsContainer = document.getElementById('slideshow-dots-container')
const slideShowItems = slideshowContainer.querySelectorAll(':scope > *')
const previousArrow = document.getElementById('previous-arrow')
const nextArrow = document.getElementById('next-arrow')

let currentSlide = 0;
let slidesAmount = slideShowItems.length

slideShowItems.forEach((el, index) => {
    let slideDot = document.createElement('div')
    slideDot.setAttribute("slidePosition", index)
    el.setAttribute("slidePosition", index)
    if (index == 0) {
        slideDot.classList.add('current')
        el.classList.add('slide')
        el.classList.add('current')
    } else {
        el.classList.add('slide')
    }
    slideshowDotsContainer.appendChild(slideDot)
    console.log(index)
});


const slideshowDots = slideshowDotsContainer.querySelectorAll(':scope > *')

slideshowDots.forEach((el, index) => {
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
        slideshowDots[currentSlide].classList.remove('current');
        if (index >= slidesAmount) {
            currentSlide = 0
        } else if (index < 0) {
            currentSlide = slidesAmount - 1
        } else {
            currentSlide = index;
        }
        slideShowItems[currentSlide].classList.add('current')
        slideshowDots[currentSlide].classList.add('current')

        slideInterval = window.setInterval(function () {
            changeSlide(currentSlide + 1)
        }, 4000);

    }
}

let slideInterval = window.setInterval(function () {
    changeSlide(currentSlide + 1)
}, 4000);