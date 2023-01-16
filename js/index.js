$(document).ready(function () {
  let imgs = 3;
  let now = 0;

  function slide() {
    now = now == imgs ? 0 : (now += 1);

    $(".knowhowContainer > ul li img")
      .eq(now - 1)
      .css({ "margin-left": "-550px" });
    $(".knowhowContainer > ul li img").eq(now).css({ "margin-left": "0px" });
  }

  function start() {
    $(".knowhowContainer > ul li img")
      .eq(0)
      .siblings()
      .css({ "margin-left": "0px" });

    setInterval(function () {
      slide();
    }, 2000);
  }
  start();
});
