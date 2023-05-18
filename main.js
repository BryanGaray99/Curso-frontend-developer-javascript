// const screenSelector = document.querySelector('body');
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const iconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarrito = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

const productDetailContainer = document.querySelector('#productDetail');
const productDetailClose = document.querySelector('.product-detail-close');

const cardsContainer = document.querySelector('.cards-container');


// Toggle es para gestionar el estado
// Se usa toggle para ver si tiene o no tiene el evento y classlist para acceder
// al listado de clases de desktop-menu
// El menú carrito tiene conflicto con el menú ícono 
// entonces antes de abrir el menú carrito hay que cerrar el menú ícono

// screenSelector.addEventListener('click', toggleScreenSelector);
menuEmail.addEventListener('click', toggleDesktopMenu);
iconMenu.addEventListener('click', toggleMobileMenu);
menuCarrito.addEventListener('click', toggleOrderDetail);
productDetailClose.addEventListener('click', closeProductDetail);

// function toggleScreenSelector() {
//     shoppingCartContainer.classList.add('inactive');
//     productDetailContainer.classList.add('inactive');
//     mobileMenu.classList.add('inactive');
//     desktopMenu.classList.add('inactive');
// }

function toggleDesktopMenu() {
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleOrderDetail() {
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    shoppingCartContainer.classList.toggle('inactive'); 
}

function openProductDetail() {
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}
function closeProductDetail() {
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bicicleta',
    price: '60',
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productList.push({
    name: 'Laptop',
    price: '1000',
    image:'https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
productList.push({
    name: 'Tablet',
    price: '500',
    image:'https://images.pexels.com/photos/221185/pexels-photo-221185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
productList.push({
    name: 'iPhone',
    price: '700',
    image:'https://images.pexels.com/photos/693267/pexels-photo-693267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
productList.push({
    name: 'Scooter',
    price: '1300',
    image:'https://images.pexels.com/photos/2727413/pexels-photo-2727413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
productList.push({
    name: 'Impresora',
    price: '320',
    image:'https://images.pexels.com/photos/7218517/pexels-photo-7218517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})

//Maquetación HTML desde JS
{/* <div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div> */}

function renderProducts(array) {
    for (product of array) {
        // open: <div class="product-card">
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // open-close <img>
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetail);

        // open: <div class="product-info">
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info'); 

        // open: <div>
        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$ ' + product.price;
        const productName = document.createElement('p');
        productName.innerText =product.name;

        productInfoDiv.append(productPrice, productName);
        // close: </div>

        // open: <figure>
        const productInfoFig =document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFig.append(productImgCart);
        // close: </figure>
        
        productInfo.append(productInfoDiv, productInfoFig);
        // close: </div>
        
        productCard.append(productImg, productInfo);
        // close: </div>

        cardsContainer.append(productCard);
    }
}

renderProducts(productList);