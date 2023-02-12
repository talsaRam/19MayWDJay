$(document).ready(function () {
    $(".bar-icon").click(function () {
        $(".second-header").toggleClass("showing");
        $("body").toggleClass("show");
    })
})

function changeImages() {
    var img = document.getElementById("imagesChange");
    if (img.src.match('images/menu-bar.png')) {
        img.src = 'images/x-icon.png';
    }
    else {
        img.src = 'images/menu-bar.png';
    }
}

$(window).scroll(function () {
    var secondHeader = document.querySelector(".second-header-bg-white");
    secondHeader.classList.toggle("sticky", window.scrollY > 0);
})


$('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: false,
    // autoplay: true,
    autoplaySpeed: 1000,
    smartSpeed: 1500,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

