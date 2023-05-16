const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const iconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarrito = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container');


// Toggle es para gestionar el estado
menuEmail.addEventListener('click', toggleDesktopMenu);
// Se usa toggle para ver si tiene o no tiene el evento y classlist para acceder
// al listado de clases de desktop-menu
function toggleDesktopMenu() {
    // Primero consultamos si el aside está abierto ( abierto = no tiene inactive)
    const isAsideOpen = !aside.classList.contains('inactive');

    // Si no tiene inactive, se lo añade para cerrarlo
    if (isAsideOpen) {
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

// El menú carrito tiene conflicto con el menú ícono 
// entonces antes de abrir el menú ícono hay que cerrar el carrito
iconMenu.addEventListener('click', toggleMobileMenu);
function toggleMobileMenu() {
    // Primero consultamos si el aside está abierto ( abierto = no tiene inactive)
    const isAsideOpen = !aside.classList.contains('inactive');

    // Si no tiene inactive, se lo añade para cerrarlo
    if (isAsideOpen) {
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

// El menú carrito tiene conflicto con el menú ícono 
// entonces antes de abrir el menú carrito hay que cerrar el menú ícono
menuCarrito.addEventListener('click', toggleAside);
function toggleAside() {
    // Primero consultamos si el menú movil está abierto ( abierto = no tiene inactive)
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    // Si no tiene inactive, se lo añade para cerrarlo
    if (isMobileMenuOpen) {
        mobileMenu.classList.add('inactive');
    }

    const isMenuDesktopOpen = !desktopMenu.classList.contains('inactive');
    // Si no tiene inactive, se lo añade para cerrarlo
    if (isMenuDesktopOpen) {
        desktopMenu.classList.add('inactive');
    }
    // Hacemos el toggle del inactive para el aside
    aside.classList.toggle('inactive'); 
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