const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

window.onscroll = function () {
    let nav = document.querySelector('.second-navbar');
    if (window.scrollY > 100) {
        nav.classList.add('sticky');
    }
    else {
        nav.classList.remove('sticky');
    }
}