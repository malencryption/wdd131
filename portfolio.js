const year = document.querySelector("#year");
const currentYear = new Date().getFullYear();
year.innerHTML = currentYear;

const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

function toggleMenu() {
  menuButton.classList.toggle("change");
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
  if (window.innerWidth >= 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
    menuButton.classList.remove("change")
  }
}

handleResize();
window.addEventListener("resize", handleResize);