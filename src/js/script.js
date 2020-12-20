"use strict";

const menu = document.querySelector(".menu-burger");
const navigation = document.querySelector(".navigation");

document.body.addEventListener("click", function (e) {
  if (
    e.target.className === "menu-burger" ||
    e.target.className === "menu-burger__span"
  ) {
    toggleMenu();
  } else if (
    e.target.className !== "navigation__item" &&
    e.target.className !== "navigation__link" &&
    e.target.className !== "navigation__list"
  ) {
    removeMenu();
  }
});

function toggleMenu() {
  menu.classList.toggle("menu-burger--open");
  navigation.classList.toggle("navigation--open");
}

function removeMenu() {
  menu.classList.remove("menu-burger--open");
  navigation.classList.remove("navigation--open");
}
