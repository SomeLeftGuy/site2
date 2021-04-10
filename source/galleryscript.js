$(document).ready(function(){
  $('.container').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      //autoplaySpeed: 3000,
      pauseOnFocus: false,
      pauseOnHover: false,
      centerMode: true,
      variableWidth: true,
      adaptiveHeight: true
  });
})