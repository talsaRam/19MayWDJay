AOS.init({
    duration: 800,
    easing: 'slide',
    once: true,
});

// search bar 
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');

}
// search bar end 

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('.cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');

}

let loginForm = document.querySelector('.login-form');
    document.querySelector('.login-btn').onclick = () => {
        loginForm.classList.toggle('active');
        shoppingCart.classList.remove('active');
        searchForm.classList.remove('active');
        navbar.classList.remove('active');
    }

let navbar = document.querySelector('nav');
document.querySelector('.menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
}




// cart btn
// $(document).ready(function (){
//     $('.cart-btn').on('click', function (){
//         $('.shopping-cart').toggleClass('active');
//     })
// })

// $(document).ready(function (){
//     $('.shopping-cart').on('click', function (){
//         $('.shopping-cart').toggleClass('active');
//     })
// })

// cart end


// nav start
// $(document).ready(function () {
//     $('.menu-btn').on('click', function () {
//         $('nav').toggleClass('active');
//     })
// })

// $(document).ready(function () {
//     $('nav').on('click', function () {
//         $('nav').toggleClass('active');
//     })
// })
// nav end

// login btn
// $(document).ready(function () {
//     $('.login-btn').on('click', function () {
//         $('.login-form').toggleClass('active');
//     })
// })
// login end btn


window.onscroll = () => {
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}



// nav bar end stick-------------------
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})
// nav bar end sticky //

// window.addEventListener("wheel", function (event) {
//     // console.log("scrolling...");
//     if(event.deltaY < 0 ){
//         console.log("up......");
//     }
//     else if(event.deltaY > 0){
//         console.log("down....");
//     }
// })

// window.addEventListener("scroll", function (event) {
//     // console.log("scrolling...");
//     if(window.pageYOffset > 150){
//         document.body.style.background = "white";
//     }
//     else{
//         document.body.style.background = "gray";
//     }
// })


// let navbar = document.querySelector('.navbar');

// document.querySelector('#menu-btn').onclick = () => {
//     navbar.classList.toggle('active');
// }

