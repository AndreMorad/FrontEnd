const responsive = document.querySelector('.resp');
const navBars = document.querySelector('.nav');
const links = document.querySelectorAll('.nar li')

responsive.addEventListener('click', () => {
    navBars.classList.toggle('open');
})