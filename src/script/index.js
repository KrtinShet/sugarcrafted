let checkbox = document.querySelector(".mobile-nav-floating-btn-icon input");
let mobileBtnMenu = document.getElementsByClassName(
  "mobile-nav-floating-btn-menu"
)[0];
let mobileBtnMenuScreen = document.getElementsByClassName(
  "mobile-nav-floating-btn-screen"
)[0];

let mobilenavfloatingbtnmenutags = document.querySelectorAll(
  ".mobile-nav-floating-btn-menu ul a"
);
mobilenavfloatingbtnmenutags.forEach(function (ele) {
  ele.addEventListener("click", function (ele1) {
    if (checkbox.checked) {
      mobileBtnMenu.style.display = "none";
      mobileBtnMenuScreen.style.display = "none";
      checkbox.checked = false;
    }
  });
});

function showMenu() {
  if (checkbox.checked) {
    mobileBtnMenu.style.display = "block";
    mobileBtnMenuScreen.style.display = "block";
  } else {
    mobileBtnMenu.style.display = "none";
    mobileBtnMenuScreen.style.display = "none";
  }
}
