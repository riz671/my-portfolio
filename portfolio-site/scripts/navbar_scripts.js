let menuButton = document.querySelector(".btn-hamburger");
let closeButton = document.querySelector(".btn-close");
let menuListContainer = document.querySelector(".menu-list");
let menuLink = document.querySelector(".menu-list li a");

const navbarSlide = () => {
  menuButton.addEventListener("click", () => {
    menuListContainer.classList.add("active-menu");
  });
  closeButton.addEventListener("click", () => {
    menuListContainer.classList.remove("active-menu");
  });
};

const closeMenuOnLinkClick = () => {
  menuLink.addEventListener("click", () => {
    menuListContainer.classList.remove("active-menu");
  });
};

navbarSlide();
closeMenuOnLinkClick();
