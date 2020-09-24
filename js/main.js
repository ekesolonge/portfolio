// Hamburger Menu
const hamburger = document.querySelector(".hamburger-box");
const nav = document.querySelector(".nav-list");
let menuOpen = false;
hamburger.addEventListener("click", () => {
  if (!menuOpen) {
    hamburger.classList.add("open");
    nav.classList.add("show");
    menuOpen = true;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("show");
    menuOpen = false;
  }
});

// Loader
window.addEventListener("load", function (e) {
  const loader = document.querySelector(".loader-area");
  const landing = document.querySelector(".landing");
  if (e.target.readyState === "complete") {
    setTimeout(function () {
      loader.style.opacity = 0;
      loader.style.display = "none";
      setTimeout(function () {
        landing.style.opacity = "1";
      }, 0);
    }, 3000);
  }
});
