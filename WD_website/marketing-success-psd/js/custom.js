$(window).scroll(function () {
  var headerSticky = document.querySelector(".header");
  headerSticky.classList.toggle("sticky", window.scrollY > 0);
})


$(document).ready(function () {
  $('.bar-icon').click(function () {
    $('.navbar-list').toggleClass("show");
    $('body').toggleClass("show");
  });
})

$(document).ready(function () {
  $('.web-design-list').click(function () {
    $('.drop-list-one').toggleClass("show");
    $(".drop-list-two").removeClass('show');
    $(".drop-list-three").removeClass('show');

  });
})

$(document).ready(function () {
  $('.digital-marketing').click(function () {
    $('.drop-list-two').toggleClass("show");
    $(".drop-list-one").removeClass('show');
    $(".drop-list-three").removeClass('show');

  });
})

$(document).ready(function () {
  $('.analytics').click(function () {
    $('.drop-list-three').toggleClass("show");
    $(".drop-list-one").removeClass('show');
    $(".drop-list-two").removeClass('show');

  });
})


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


var img = document.getElementById("imagesChange");
jQuery(document).on('click', function (event) {
  if (!$(event.target).closest('.wrapper').length) {
    $("body").removeClass('show');
    $(".drop-list-one").removeClass('show');
    $(".drop-list-two").removeClass('show');
    $(".drop-list-three").removeClass('show');
    $(".navbar-list").removeClass('show');
    if (img.src.match('images/X-icon-white.png')) {
      img.src = 'images/white-bars.psd.png';
    } else {
      img.src = 'images/X-icon-white.png';
    }
  }
});

function changeImages() {
  if (img.src.match('images/white-bars.psd.png')) {
    img.src = 'images/X-icon-white.png';
  } else {
    img.src = 'images/white-bars.psd.png';
  }
};

$(document).ready(function ($) {
  $('.client-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1365,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
  });
});

$(document).ready(function ($) {
  $('.client-case-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
  });
});

$(document).ready(function ($) {
  $('.tech-partners-slider').slick({

    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1365,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
  });
});



