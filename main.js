// menu mobilne

const menuButton = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");
const mobileLinks = document.querySelectorAll(".mobile-link");

menuButton.addEventListener("click", function () {
  mobileMenu.classList.toggle("open");

  // zmiana ikony
  if (mobileMenu.classList.contains("open")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");
  } else {
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
  }
});


for (let i = 0; i < mobileLinks.length; i++) {
  mobileLinks[i].addEventListener("click", function () {
    mobileMenu.classList.remove("open");
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
  });
}
