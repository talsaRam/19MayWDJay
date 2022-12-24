// releav 
// back   
// &&(revealElements[i].getBoundingClientRect().bottom > window.innerHeight / 2) 
// &&(revealElements[i].getBoundingClientRect().bottom > window.innerHeight / 3)
const revealElements = document.querySelectorAll("[data-reveal]"); 
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]"); 

const reveal = function () { 
    for (let i = 0, len = revealElements.length; i < len; i++) { 
        if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2 ) { 
            revealElements[i].classList.add("revealed"); 
        } else { 
            // revealElements[i].classList.remove("revealed"); 

        } 
    } 
} 



// animation
for (let i = 0, len = revealDelayElements.length; i < len; i++) { 
    revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay; 
} 

window.addEventListener("scroll", reveal); 
window.addEventListener("load", reveal); 

// releav opacity  
const opacity = document.querySelectorAll("[data-opacity]"); 
const opacityDelayElements = document.querySelectorAll("[data-opacity-delay]"); 

const opacity1 = function () { 
    for (let i = 0, len = opacity.length; i < len; i++) { 
        if (opacity[i].getBoundingClientRect().top < window.innerHeight / 1.2 && (opacity[i].getBoundingClientRect().bottom > window.innerHeight / 3)) { 
            opacity[i].classList.add("Portano"); 
        } else { 
            opacity[i].classList.remove("Portano"); 

        } 
    } 
} 

for (let i = 0, len = opacityDelayElements.length; i < len; i++) { 
    opacityDelayElements[i].style.transitionDelay = opacityDelayElements[i].dataset.revealDelay; 
} 

window.addEventListener("scroll", opacity1); 
window.addEventListener("load", opacity1);


// bar icon
let ulItem =  document.querySelector('.ul-item');
document.querySelector('#bar-icon').onclick = () => {
    ulItem.classList.toggle('active');
}

window.onscroll = () => {
    ulItem.classList.remove('active');
}