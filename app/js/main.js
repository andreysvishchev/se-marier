$(function () {

  $('.tabs__triggers-item').click(function (e) {
    e.preventDefault();
    $('.tabs__triggers-item').removeClass('tabs__triggers-item--active');
    $('.tabs__content-inner').removeClass('tabs__content-inner--active');
    $(this).addClass('tabs__triggers-item--active');
    $($(this).attr('href')).addClass('tabs__content-inner--active');
  })

  $('.mobile-menu__link--catalog').click(function (e) {
    e.preventDefault();
    $('.mobile-menu__link--catalog').toggleClass('mobile-menu__link--catalog--active');
    $('.mobile-menu__drop').toggleClass('mobile-menu__drop--active');
  })

  $('.header-mobile__btn').click(function (e) {
    e.preventDefault();
    $('.header-mobile__btn').toggleClass('header-mobile__btn--active');
    $('.mobile-menu').toggleClass('mobile-menu--active');
  })

  $('.tabs__roll-link').click(function (e) {
    e.preventDefault();
    $('.tabs__triggers-item').removeClass('tabs__triggers-item--active');
    $('.tabs__content-inner').removeClass('tabs__content-inner--active');
  })

  $('.top-slider__inner').slick({
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
      breakpoint: 480,
      settings: 'unslick'
    }]
  })

  $('.tabs__slide').slick({
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $('.mobile-slider__inner').slick({
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,

  })

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: true,
    draggable: false
  })

  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: true
  })

  $('.modal-link').magnificPopup();

});