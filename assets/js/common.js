$(function () {
  const swiper = new Swiper(".swiper", {
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });

  $(".header-toggle").click(function () {
    $(".header-toggle").addClass("active");
    $(".menu-toggle").removeClass("active");
    $(".menu").addClass("active");
  });

  $(".menu-toggle").click(function () {
    $(".menu-toggle").addClass("active");
    $(".header-toggle").removeClass("active");
    $(".menu").toggleClass("active");
  });

  function fade() {
    $(".js-fade").each(function () {
      var elemPos = $(this).offset().top - 50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass("fadeUp");
      } else {
        $(this).removeClass("fadeUp");
      }
    });
  }

  $(window).scroll(function () {
    fade();
  });
});
