var navToggle = document.querySelector(".main-navigation__toggle");
var mainNav = document.querySelector(".main-navigation");
var body = document.querySelector("body");

navToggle.addEventListener("click", function() {
  mainNav.classList.toggle("main-navigation--opened");
  body.classList.toggle("sroll-disabled");
});
