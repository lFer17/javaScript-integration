let productList = [{
    name:'Bike',
    price: 12700,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},{
    name:'Bicycle helmet',
    price: 1200,
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
},
{
    name:'Bicycle helmet',
    price: 1600,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
},
{
    name:'Bicycle helmet',
    price: 1500,
    image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
},
{
    name:'Seat',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
},
{
    name:'Tennis Montain Bike',
    price: 2200,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
},
{
    name:'Sunglasses',
    price: 800,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
},
{
    name:'Sunglasses',
    price: 600,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
},
{
    name:'Bicycle seat bag',
    price: 876,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
}
]


const $ = (selector) => {
    return document.querySelector(selector)
}

let navbarEmail = $('.navbar-email');

let desktopSubMenuEmail = $('.desktop-menu');

let burgerIcon = $('.menu');
let mobileMenu  = $('.mobile-menu');

let shoppingCart = $('.navbar-shopping-cart');
let shoppingCartProducts = $('.product-detail');

let productCardContainer = $('.cards-container');


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




function createHtmlCardElement (arrProducts){

    for (product of arrProducts) {
       
        let productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        let image = document.createElement('img')
        image.src = product.image  
        
        productCard.appendChild(image)

        let productinfo = document.createElement('div');
        productinfo.classList.add('product-info');
        
        let textProductinfoContainer = document.createElement('div');
        
        productinfo.appendChild(textProductinfoContainer)

        let productInfoPrice = document.createElement('p');
        productInfoPrice.innerText = "$ " + product.price;
        
        let productInfoName = document.createElement('p');
        productInfoName.innerText = product.name 

        textProductinfoContainer.append(productInfoPrice,productInfoName)
        
        let productInfoFigure = document.createElement('figure');
        
        let cartImage = document.createElement('img')
        cartImage.src = './icons/bt_add_to_cart.svg'  
        
        productInfoFigure.appendChild(cartImage)
        
        productinfo.appendChild(productInfoFigure)

        productCard.appendChild(productinfo)

        productCardContainer.appendChild(productCard)
        
    }
}

createHtmlCardElement(productList)