$(function () {
  /* slick */
  $(".slider").slick({
    arrows: false,
    autoplay: true,
    adaptiveHeight: true,
    dots: false,
  });

  /* modal / open,close */
  $("#js-modal-open").on("click", function () {
    $("body").css("overflow-y", "hidden"); // 本文の縦スクロールを無効
    $(".modal").addClass("active");
    $(".overlay").addClass("active");
    return false;
  });

  $("#js-modal-close").on("click", function () {
    $("body").css("overflow-y", "auto"); // 本文の縦スクロールを有効
    $(".modal").removeClass("active");
    $(".overlay").removeClass("active");
  });
});
