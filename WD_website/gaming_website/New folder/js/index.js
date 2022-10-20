
// loder logo
setTimeout(() => {
    let loaderDivData = document.getElementById('loder_box').classList.add("disp-none")
    console.log("called setTimeout");
}, 1000);
// loder logo end


window.addEventListener("scroll", function () {
  var header = this.document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})

// toggle menu
// function openNav() { 
//   var navMobile = document.getElementById("openbar-nav");
//   // alert("hello")
//   navMobile.classList.remove(".none");
//   navMobile.classList.add("block");
//   // nav_mobile.classList.remove("none");
//   // nav_mobile.classList.add("block");
// }

// function closeNav() { 
//   var navClose_mobile = document.getElementById("openbar-nav");
//   // navClose_mobile.classList.remove("remove");
//  }

// toggle menu end

function openNav() { 
  var element = document.getElementById("javascript"); 
  element.classList.remove("remove"); 
  element.classList.remove("none"); 
  element.classList.add("block"); 
} 
function closeNav() { 
  var elementa = document.getElementById("javascript"); 
  elementa.classList.add("remove");
}




