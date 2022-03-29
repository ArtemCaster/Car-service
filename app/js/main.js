$(function () {

  wow = new WOW(
    {
      boxClass: 'wow',
      animateClass: 'animate__animated --active',
      offset: 100,
      mobile: false,
    }
  )

  wow.init();

  $('.comments-slider').slick({
    slidesToShow: 2,
    dots: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  });

  $('.questions-list__item--active').find('.questions-list__item-text').slideDown();

  $('.questions-list__item').on('click', function () {
    $(this).toggleClass('questions-list__item--active');

    if ($(this).hasClass('questions-list__item--active')) {
      $(this).find('.questions-list__item-text').slideDown(500);
    } else {
      $(this).find('.questions-list__item-text').slideUp(500);
    }
  })

  $('.navbar__menu-btn').on('click', function(){
    $(this).toggleClass('navbar__menu-btn--active');
    $('.navbar__menu').toggleClass('navbar__menu--active');

  })

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

});