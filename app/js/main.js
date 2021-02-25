$(function () {

  $('.tabs__triggers-item').click(function (e) {
    e.preventDefault();
    $('.tabs__triggers-item').removeClass('tabs__triggers-item--active');
    $('.tabs__content-inner').removeClass('tabs__content-inner--active');
    $(this).addClass('tabs__triggers-item--active');
    $($(this).attr('href')).addClass('tabs__content-inner--active');
  })


  $('.filter-mobile__trigger-sorting').click(function (e) {
    e.preventDefault();
    $('.filter-mobile__form-category').removeClass('filter-mobile__form-category--active');
    $('.filter-mobile__item-category').removeClass('filter-mobile__item-category--active');
    $('.filter-mobile__trigger-category').removeClass('filter-mobile__trigger--active');
    $(this).toggleClass('filter-mobile__trigger--active');
    $('.filter-mobile__form-sorting').toggleClass('filter-mobile__form-sorting--active');
    $('.filter-mobile__item-sorting').toggleClass('filter-mobile__item-sorting--active');
  })

  $('.filter-mobile__trigger-category').click(function (e) {
    e.preventDefault();
    $('.filter-mobile__form-sorting').removeClass('filter-mobile__form-sorting--active');
    $('.filter-mobile__item-sorting').removeClass('filter-mobile__item-sorting--active');
    $('.filter-mobile__trigger-sorting').removeClass('filter-mobile__trigger--active');
    $(this).toggleClass('filter-mobile__trigger--active');
    $('.filter-mobile__form-category').toggleClass('filter-mobile__form-category--active');
    $('.filter-mobile__item-category').toggleClass('filter-mobile__item-category--active');
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
  })

  $('.tabs__slide').slick({
    autoplay: true,
    autoplaySpeed: 2000,
  });


  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
  });

  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: true,
    responsive: [{
      breakpoint: 1050,
      settings: {
        dots: true
      }
    }]
  });

  $('.analog-mobile, .accompanying-mobile').slick({
    responsive: [{
        breakpoint: 4096,
        settings: "unslick"
      },
      {
        breakpoint: 565,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

  $('.modal-link').magnificPopup();

});