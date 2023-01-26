$(document).ready(function (){
    $('.menu-toggel').on('click', function () {
        $(this).toggleClass('fa-times');
        $('ul').toggleClass('show');

    })

    $(window).on('scroll load', function () {
        $('.menu-toggel').removeClass('fa-times');
        $('ul').removeClass('show');
    });
});


document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Projects | Tushar Suthar";
            $("#favicon").attr("href", "img/sec1-1.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "img/favhand.png");
        }
    });

