
$(window).scroll(function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})


$(document).ready(function () {
    $('.bar-icon').click(function () {
        $('.navbar-menu').toggleClass("show");
        $('body').toggleClass("show");
    });
})

jQuery(document).on('click', function(event) {
    if (!$(event.target).closest('#wrapper').length) {
      $("body").removeClass('show');
      $(".bar-icon").removeClass('active');
      $(".navbar-menu").removeClass('show');
    }
  });



$(document).ready(function () {
    $('#dropShow').click(function () {
        $(this).toggleClass("rotate");
        $('.dropdown-content').toggleClass("show");
    });
})

// slick slider client section

$('.slider-crows').slick({
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    loop: true,
    arrows: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    dots: true,
    pauseOnHover: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
// data-filter
let list = document.querySelectorAll('.data-link');
let itemBox = document.querySelectorAll('.itemBox');

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function () {
        for (let j = 0; j < list.length; j++) {
            list[j].classList.remove('active')
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for (let k = 0; k < itemBox.length; k++) {
            itemBox[k].classList.remove('hide');
            itemBox[k].classList.add('hide');

            if (itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all") {
                itemBox[k].classList.remove('hide');
                itemBox[k].classList.add('active');
            }
        }
    })
}

// load more item
let loadMoreBtn = document.querySelectorAll('#load-more');
function myShoeMoreItem() {
    alert('Running');
}

// fancy Box
$(".grid-container .img-gallery-1 a").attr('data-fancybox', 'gallery');

let mybutton = document.getElementById("bar-icon");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "block";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

