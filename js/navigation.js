document.querySelector('header .nav-btn').addEventListener('click', openNav)

function openNav() {
    document.querySelector('header .nav-container').classList.toggle('expanded')
    document.querySelector('header .nav-btn').classList.toggle('expanded')
}
