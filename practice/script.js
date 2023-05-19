$(document).ready(function () {
  $(".toggleMethod")
    .click(function (e) {
      e.preventDefault();
      $(".content").toggle();
      $(".toggleMethod").css({
        "border-radius": "4px ",
      });
    })
    .css({
      cursor: "pointer",
    });
  //   $(".toggleMethod").click((e) => {
  //     e.preventDefault();
  //     $(".content").show();
  //   });
});
