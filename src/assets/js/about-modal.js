const headerContainer = document.getElementById('header-container')
const aboutButton = document.getElementById('header-about')
const aboutModal = document.getElementById('about-modal')
const aboutModalCloseButton = document.getElementById('about-modal-close-button')
const modalBackground = document.getElementById('modal-background')

window.addEventListener('resize', function(event) {
    if (modalBackground.classList.contains('open-modal') && screen.width < 1024) {
        document.body.style.overflow = 'auto'
        modalBackground.classList.remove('open-modal')
    }
}, true);

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

if(window.scrollY <= 5){
    headerContainer.style.border = 'none'
} else {
    headerContainer.style.removeProperty('border');
}

window.addEventListener("scroll", function(){
    if(window.scrollY <= 5){
        headerContainer.style.border = 'none'
    } else {
        headerContainer.style.removeProperty('border');
    }
  });


window.addEventListener('resize', function (event) {
}, true);

function toggleModal() {
    console.log(modalBackground.style.display)
    if (!modalBackground.classList.contains('open-modal')) {
        modalBackground.classList.add('open-modal')
        document.body.style.overflow = 'hidden'
    } else {
        modalBackground.classList.remove('open-modal')
        document.body.style.overflow = 'auto'
    }
}

// window.addEventListener('click', function(e){   
//     if (modalBackground.style.display == 'block' && !modalBackground.contains(e.target) && !aboutButton.contains(e.target)){
//         console.log('click')
//         toggleModal()
//     }
//   });
