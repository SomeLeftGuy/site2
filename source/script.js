$(document).ready(function(){
    $('.photos').slick({
        slidesToShow: 1,
        slidesToScroll: 3,
        autoplay: true,
        //autoplaySpeed: 3000,
        pauseOnFocus: false,
        pauseOnHover: false,
        centerMode: true,
        variableWidth: true
    });
})