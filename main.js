const navEmail=document.querySelector('.navbar-email');
const DeskTopMenu=document.querySelector('.desktop-menu')

navEmail.addEventListener('click',toggleDesktopMenu);

function toggleDesktopMenu(){

    DeskTopMenu.classList.toggle('inactive');

}