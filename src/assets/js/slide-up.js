const scrollOffset = 0;
const angledScrollOffset = 175;
const scrollElements = document.querySelectorAll(".js-scroll");

scrollElements.forEach((el) =>  {
    el.style.opacity = 0;
    if(el.classList.contains('comes-from-upper-left')) {
        el.style.transform = `translate(-${angledScrollOffset}px, -${angledScrollOffset}px)`
    } else if(el.classList.contains('comes-from-upper-right')) {
        el.style.transform = `translate(${angledScrollOffset}px, -${angledScrollOffset}px)`
    } else if(el.classList.contains('comes-from-bottom-right')) {
        el.style.transform = 'translate(75px, 75px)'
    }else {
        el.style.transform = 'translateY(75px)';
    }
});

const elementInView = (el, scrollOffset = 0) => {
    const elementTop = el.getBoundingClientRect().top;

    if(el.classList.contains('comes-from-upper-left') || el.classList.contains('comes-from-upper-right')) {
        scrollOffset += angledScrollOffset + 100
    }

    return (
        elementTop <=
        ((window.innerHeight || document.documentElement.clientHeight) - scrollOffset)
    );
};

const displayScrollElement = (element) => {
    element.classList.add("scrolled");
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, scrollOffset)) {
            displayScrollElement(el);
        }
    })
}

window.addEventListener('scroll', () => {
    handleScrollAnimation();
})

handleScrollAnimation();