const headerContainer = document.getElementById('header-container')
const aboutButton = document.getElementById('header-about')
const aboutModal = document.getElementById('about-modal')
const aboutModalArrow = document.getElementById('about-modal-arrow')
const aboutModalCloseButton = document.getElementById('about-modal-close-button')

aboutButton.addEventListener("click", function () {
    toggleModal()
    setModalPosition()
});

aboutModalCloseButton.addEventListener("click", function () {
    toggleModal()
});

window.addEventListener('resize', function (event) {
    setModalPosition()
}, true);

function toggleModal() {
    console.log(aboutModal.style.display)
    if (aboutModal.style.display != 'block') {
        aboutModal.style.display = 'block'
    } else {
        aboutModal.style.display = 'none'
    }
}

window.addEventListener('click', function(e){   
    if (aboutModal.style.display == 'block' && !aboutModal.contains(e.target) && !aboutButton.contains(e.target)){
        console.log('click')
        toggleModal()
    }
  });

function setModalPosition() {
    aboutModal.style.top = headerContainer.offsetHeight - 7 + 'px'
    let aboutButtonBounding = aboutButton.getBoundingClientRect()
    let aboutModalBounding = aboutModal.getBoundingClientRect()
    aboutModalArrow.style.left = aboutButtonBounding.left - aboutModalBounding.left + 'px'
}