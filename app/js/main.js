$(function () {
  $('.top-slider__inner').slick({
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
      breakpoint: 480,
      settings: 'unslick'
    }]
  });

  $('.mobile-slider__inner').slick({
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,

  });

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: true,
    draggable: false
  });

  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: true
  });

  $('.modal-link').magnificPopup();

});