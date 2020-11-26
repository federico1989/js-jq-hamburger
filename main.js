var open = $('.header-right > a > i.fa-bars');
// console.log(open);

open.click(function() {
  // console.log("ok");
  $(".hamburger-menu").show();
});

var close = $('.hamburger-menu > a > i.fa-times');
// console.log(close);

close.click(function() {
  // console.log("ok");
  $(".hamburger-menu").hide();
});
