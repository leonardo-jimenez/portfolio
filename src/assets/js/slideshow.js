const slideshowContainer = document.getElementById('slideshow-container')
const slideshowDotsContainer = document.getElementById('slideshow-dots-container')
const slideShowItems = slideshowContainer.querySelectorAll(':scope > *')

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


function nextSlide() {
    slideShowItems[currentSlide].classList.remove('current');
    slideshowDots[currentSlide].classList.remove('current');
    currentSlide == slidesAmount - 1 ? currentSlide = 0 : currentSlide += 1;
    slideShowItems[currentSlide].classList.add('current')
    slideshowDots[currentSlide].classList.add('current')
}

function changeSlide(index) {
    if (index != currentSlide) {
        slideShowItems[currentSlide].classList.remove('current');
        slideshowDots[currentSlide].classList.remove('current');
        currentSlide = index
        slideShowItems[currentSlide].classList.add('current')
        slideshowDots[currentSlide].classList.add('current')
        clearInterval(slideInterval)
        setInterval(nextSlide, 4000);
    }
}

let slideInterval = window.setInterval(function () {
    nextSlide()
}, 4000);