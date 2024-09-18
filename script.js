let burger = document.querySelector('.menu-burger');
let sidebar = document.querySelector('.side-bar');
let background = document.querySelector('.overlay')
let cross = document.querySelector('.exit');



burger.addEventListener('click', toggleBurger);
cross.addEventListener('click', toggleBurger);
background.addEventListener('click', toggleBurger);

function toggleBurger (){
sidebar.classList.toggle('active');
background.classList.toggle('active');
}

// let app = document.querySelector('.content');
// const abount = '1';
// const contact = '2';

// const routes = {
//     '/': '<div class="hero-image"> <h1 class="text-hero">Всем привет! <br> Меня зовут Чарли <br> и это история <br> о моей жизни</h1></div>',
//     '/about': abount,
//     '/contact': '<div class="down-form"> <h1 class="title-form">Подпишись на мои соцсети, ведь я хороший мальчик:</h1> <div class="block-icon"> <a class="icon" href="https://t.me/+1rW7mZsnql82ODY6" target="_blank"> <img class="logo" src="picture/telegram.png" title="click me"> </a>  <a class="icon inst" href="https://www.instagram.com/charlie.charun?igsh=MWRpeHE0aDhmcHlybA==" target="_blank"> <img class="logoinst" src="picture/inst.png" title="click me"> </a> </div> </div>'
// }

// function renderPage() {
//     const hash = window.location.hash.slice(1) || '/'; 
//     const pageContent = routes[hash]; 
//     app.innerHTML = pageContent ? pageContent : '404 - Страница не найдена';
// }

// window.addEventListener('hashchange', () => {
//     renderPage();
// });

// renderPage();





