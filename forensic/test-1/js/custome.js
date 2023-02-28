$(window).scroll(function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})


$(document).ready(function () {
    $('.bar-icon').click(function () {
        $('.ul-item').toggleClass("show");
    });
}) 
$(document).ready(function () {
    $('.ul-item').click(function () {
        $('.ul-item').toggleClass("show");
    });
}) 