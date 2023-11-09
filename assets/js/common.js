$(function () {
  const swiper = new Swiper(".swiper", {
    autoplay: {
      delay: 3000,
    },
    navigation: {
      nextEl: ".swiper-button-next", //「次へボタン」要素指定
      prevEl: ".swiper-button-prev", //「前へボタン」要素指定
    },
    pagination: {
      el: ".swiper-pagination",
      //使いたいパラメータを追加する
    },
    scrollbar: {
      el: ".swiper-scrollbar", //要素指定
    },
  });
  /* slick */
  // $(".slider").slick({
  //   arrows: false,
  //   autoplay: true,
  //   adaptiveHeight: true,
  //   dots: false,
  // });

  $(window).on("load", function () {
    contResizing();
  });

  $(window).on("resize", function () {
    if ($(window).width() >= 640) {
      if ($(window).height() < 990) {
        contResizing();
      }
    }
  });

  function contResizing() {
    const W = 1423;
    const H = 2500;
    const contH = $(".sec-message").height() - 100;
    const contW = $(".sec-message").width() - 100;
    const rH = contH / H;
    const rW = contW / W;
    console.log(contH, contW, rH, rW);

    // const sec_cont_img01 = 432 * rH;
    // $("#sec-message .img01").css({ width: "auto", height: sec_cont_img01 + "px" });
  }
});
