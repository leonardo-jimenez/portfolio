window.addEventListener('load', function () {

    const scrollOffset = 0;
    const angledScrollOffset = 175;
    const scrollElements = document.querySelectorAll(".js-scroll");
    const scrollElementsOnPageLoad = document.querySelectorAll(".js-scroll-on-page-load");

    scrollElements.forEach((el) => {
        el.style.opacity = 0;
        if (el.classList.contains('comes-from-upper-left')) {
            el.style.transform = `translate(-${angledScrollOffset}px, -${angledScrollOffset}px)`
        } else if (el.classList.contains('comes-from-upper-right')) {
            el.style.transform = `translate(${angledScrollOffset}px, -${angledScrollOffset}px)`
        } else if (el.classList.contains('comes-from-bottom-right')) {
            el.style.transform = 'translate(75px, 75px)'
        } else {
            el.style.transform = 'translateY(75px)';
        }
    });

    scrollElementsOnPageLoad.forEach((el) => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(75px)';
        // el.classList.add('js-scroll')
    });

    const elementInView = (el, scrollOffset = 0) => {
        const elementTop = el.getBoundingClientRect().top;

        if (el.classList.contains('comes-from-upper-left') || el.classList.contains('comes-from-upper-right')) {
            scrollOffset += angledScrollOffset + 100
        }

        return (
            elementTop <=
            ((window.innerHeight || document.documentElement.clientHeight) - scrollOffset)
        );
    };

    const displayScrollElement = (el) => {
        el.classList.add("scrolled");
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, scrollOffset)) {
                displayScrollElement(el);
            }
        })
    }

    const handleOnPageLoadElements = () => {
        scrollElementsOnPageLoad.forEach((el) => {
            setTimeout(function () { 
                el.classList.add("js-scroll"); 
                el.classList.add("scrolled"); 
            }, 500);
        })
    }

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    })
    window.addEventListener('resize', () => {
        handleScrollAnimation();
    })

    handleScrollAnimation()

    handleOnPageLoadElements()

})