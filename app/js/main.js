$(function () {

  wow = new WOW(
    {
      boxClass: 'wow',
      animateClass: 'animate__animated --active',
      offset: 300,
      mobile: false,
    }
  )

  wow.init();

  $('.comments-slider').slick({
    slidesToShow: 2,
    dots: true,
    infinite: false,
    // centerPadding: '60px',
  });

});