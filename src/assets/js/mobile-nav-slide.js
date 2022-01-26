const mobileNavOpenToggle = document.getElementById('mobile-nav-open-toggle')
const mobileNavContainer = document.getElementById('mobile-nav-container')
const mobileNavCloseButton = document.getElementById('mobile-nav-close-button')

mobileNavOpenToggle.addEventListener("click", function () {
    toggleMobileNav()
});

mobileNavCloseButton.addEventListener("click", function () {
    toggleMobileNav()
});

function toggleMobileNav() {
        if (mobileNavContainer.classList.contains('open')) {
            mobileNavContainer.classList.remove('open')
            document.body.style.overflow = 'auto'
        } else {
            mobileNavContainer.classList.add('open')
            document.body.style.overflow = 'hidden'
        }
}