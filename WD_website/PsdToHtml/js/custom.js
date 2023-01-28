
$(document).ready(function () {
    $('.menu-bar').click(function () {
        $('.ul-active').toggleClass("show");
        $('.ul-item').toggleClass("show");
        $('.automation').toggleClass("show");
    });

    $(window).on('scroll load', function () {
        $('.ul-active').removeClass('show');
        $('.ul-item').removeClass('show');
        $('.automation').removeClass('show');
    });
})
