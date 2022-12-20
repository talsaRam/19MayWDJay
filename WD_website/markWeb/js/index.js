window.addEventListener("scroll", function () { 
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
 });


//  bar icon
let navbar = document.querySelector(".nav");
document.querySelector('.menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

 
function changeclr() {
    $("body").toggleClass("dark")
    // $("body").addClass("dark")
    // console.log($("body").hasClass("dark"));
    // if ($("body").hasClass("dark")) {
    //     $("body").removeClass("dark")
    // } else {
    //     $("body").addClass("dark")
    // }
}

// data releval

const revealElements = document.querySelectorAll("[data-reveal]"); 
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]"); 
 
const reveal = function () { 
  for (let i = 0, len = revealElements.length; i < len; i++) { 
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) { 
      revealElements[i].classList.add("revealed"); 
    } 
  } 
} 
 
for (let i = 0, len = revealDelayElements.length; i < len; i++) { 
  revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay; 
} 
 
window.addEventListener("scroll", reveal); 
window.addEventListener("load", reveal);