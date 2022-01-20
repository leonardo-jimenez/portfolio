const headerContainer = document.getElementById('header-container')
const aboutButton = document.getElementById('header-about')
const aboutModal = document.getElementById('about-modal')
const aboutModalCloseButton = document.getElementById('about-modal-close-button')
const modalBackground = document.getElementById('modal-background')

aboutButton.addEventListener("click", function () {
    toggleModal()
});

aboutModalCloseButton.addEventListener("click", function () {
    toggleModal()
});

modalBackground.addEventListener("click", function () {
    console.log('modalBackground')
    toggleModal()
});


window.addEventListener('resize', function (event) {
}, true);

function toggleModal() {
    console.log(modalBackground.style.display)
    if (modalBackground.style.display != 'flex') {
        modalBackground.style.display = 'flex'
        document.body.style.overflow = 'hidden'
    } else {
        modalBackground.style.display = 'none'
        document.body.style.overflow = 'auto'
    }
}

// window.addEventListener('click', function(e){   
//     if (modalBackground.style.display == 'block' && !modalBackground.contains(e.target) && !aboutButton.contains(e.target)){
//         console.log('click')
//         toggleModal()
//     }
//   });
