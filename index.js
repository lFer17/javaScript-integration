const $ = (selector) => {
   return document.querySelector(selector)
} 

let navbarEmail = $('.navbar-email');

let desktopSubMenuEmail = $('.desktop-menu');

const displayMenu = () =>{
    desktopSubMenuEmail.classList.toggle('inactive');   
}

navbarEmail.addEventListener('click',displayMenu);
