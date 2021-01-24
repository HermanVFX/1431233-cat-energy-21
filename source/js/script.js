var openMenu = document.querySelector(".main-nav-toggle");
var blockMenu = document.querySelector(".main-nav");

let menuShow = true;

openMenu.addEventListener("click", function(evt) {
  blockMenu.classList.toggle("main-nav--show");
  menuShow = !menuShow;
  if (menuShow == false) {
    openMenu.style.backgroundImage='url(../img/closemenu-mobile.svg)';
  } if (menuShow == true) {
    openMenu.style.backgroundImage='url(../img/openmenu-mobile.svg)';
  }
});
