window.addEventListener("load", () => {
  document.getElementById("banner-content").style.top =
    document.getElementById("landing-section").clientHeight / 2;
  document.getElementById("banner-content").style.transform =
    "translateY(-50%)";
});
window.addEventListener("resize", () => {
  document.getElementById("banner-content").style.top =
    document.getElementById("landing-section").clientHeight / 2;
  document.getElementById("banner-content").style.transform =
    "translateY(-50%)";
});
