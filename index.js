const $ = (selector) => {
    return document.querySelector(selector)
}

let navbarEmail = $('.navbar-email');

let desktopSubMenuEmail = $('.desktop-menu');

let burgerIcon = $('.menu');
let mobileMenu  = $('.mobile-menu');

let shoppingCart = $('.navbar-shopping-cart');
let shoppingCartProducts = $('.product-detail');


const displayMenu = () => {
    desktopSubMenuEmail.classList.toggle('inactive');
}

const showMobileMenu = () =>{
    mobileMenu.classList.toggle('inactive')
    shoppingCartProducts.classList.add('inactive')
}

navbarEmail.addEventListener('click', displayMenu);

burgerIcon.addEventListener('click',showMobileMenu);


const showShoppingCart = () =>{
    shoppingCartProducts.classList.toggle('inactive')
    mobileMenu.classList.add('inactive')
}

shoppingCart.addEventListener('click',showShoppingCart)