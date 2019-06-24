$(document).ready(function () {
  $(".toggle").click(function () {
    $(".toggle").toggleClass("active")
  })
  var flipbox = document.getElementsByClassName('flip-box');
  var innerslide = document.getElementsByClassName('inner');
  var index = 1;
  delayslide();

  function getindex() {
    index = index + 1;
    if (index == 13) {
      index = 1;
    }
  }

  function changeimage() {
    var i;
    for (i = 0; i < 14; i++) {
      flipbox[i].className = "flip-box";
      innerslide[i].className = "inner";
    }
    flipbox[index].className = "flip-box left";
    flipbox[index + 1].className = "flip-box centre";
    flipbox[index + 1].children[0].className = "inner slide-active";
    getindex();
    flipbox[index + 1].className = "flip-box right";
  }

  function delayslide() {
    changeimage();
    window.setTimeout(delayslide, 7000);
  }
})