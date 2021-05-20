window.onscroll = function (event) {
  let navBarFixed = document.querySelector(".header-sticky");
  if (window.scrollY > 50) {
    navBarFixed.classList.add("isScrolling");
  } else {
    navBarFixed.classList.remove("isScrolling");
  }

  let backToTop = document.querySelector(".back-to-top");
  if (window.scrollY > 300) {
    backToTop.classList.add("isVisible");
  } else {
    backToTop.classList.remove("isVisible");
  }
};

window.onload = function () {
  document.querySelector(".back-to-top").click = function () {
    document.querySelector("body,html").animate({
      scrollTop: 0,
    });
  };
};

window.onload = function (event) {
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
};
