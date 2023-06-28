let icon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navigation')


icon.addEventListener('click', ()=>{
    icon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});
