// js codes for responsive navigations
// elements
const bars = document.querySelector(".bars")
const navbar = document.querySelector('.nav-items')
// listenet OnClick
bars.addEventListener('click', (e) => {
    navbar.classList.toggle('activeBars')
})
