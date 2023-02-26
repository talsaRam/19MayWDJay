$(document).ready(function () {
    $(".bar-icon").click(function () {
        $(".second-header-list").toggleClass("showing");
        $("body").toggleClass("show");
        $(".header-list").toggleClass("show");
        $(".image-x-icon-bar").toggleClass("show");
        $("#imagesChange").toggleClass("hidden");
        $("#item-view").removeClass("view-data");
        $(".left-icon").removeClass("view-minus");
    })
})

$(document).ready(function(){
    $("#single-column-view").click(function(){
        $("#item-view").toggleClass("view-data");
        $(".left-icon").toggleClass("view-minus");
    }); 
})
$(document).ready(function(){
    $(".left-arrow-croos").click(function(){
        $("#item-view").removeClass("view-data");
        $(".left-icon").removeClass("view-minus");
    });
})



$(window).scroll(function () {
    var secondHeader = document.querySelector(".second-header-bg-white");
    secondHeader.classList.toggle("sticky", window.scrollY > 0);
})

$("#slideToggle").click(function () {
    $("#slider-list").slideToggle('slow');
    $("#rotate").toggleClass('down');
})


$('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
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




$('.carousel-slider').slick({
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    loop: true,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    focusOnSelect: true,
    pauseOnHover: false,
    dots: false,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: true,
            dots: false
        }},{
        breakpoint: 576,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            infinite: true,
            arrows: true
        }
    }]
});

$('.slick-carousel-client').slick({
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    loop: true,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    dots: true,
    focusOnSelect: true,
    pauseOnHover: false,
    responsive: [{
        breakpoint: 1124,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            dots: true
        }},

        {
            breakpoint: 950,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true,
                infinite: true,
                arrows: false
            }},
        {
        breakpoint: 776,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
            infinite: true,
            arrows: false
        }},
        
        {
        breakpoint: 450,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            infinite: true,
            arrows: false
        }}
    ]
});

$('.testimonials-slider').slick({
    centerMode: true,
    centerPadding: '60px',
    speed: 1000,
    dots: true,
    autoplay: true,
    focusOnSelect: true,
    pauseOnHover: false,
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 1048,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});
