// Работа с navbar в уменьшеном header
let menuIcon = document.querySelector("#menu-icons img");
let navBar = document.querySelector(".navbar");
let navbarSpan = document.querySelector(".navbar span");

menuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  navbarSpan.classList.toggle("active-nav");
  if (menuIcon.getAttribute("src") === "/src/images/icons/icons8-menu-50.png") {
    menuIcon.src = "/src/images/icons/icons8-close-50.png";
  } else {
    menuIcon.src = "/src/images/icons/icons8-menu-50.png";
  }
});

// scroll seection!!!

let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".header nav a");

window.onscroll = () => {
  let header = document.querySelector(".header");
  header.classList.toggle("header-sticky", window.scrollY > 50);

  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 300;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    // Даю .activ нужным link в navbar
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(`.header nav a[href*=${id}]`)
          .classList.add("active");
      });

      // add style:show-animation for section on skroll
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });
};

navLinks.forEach((a) => {
  a.addEventListener("click", () => {
    navBar.classList.remove("active");
    menuIcon.src = "/src/images/icons/icons8-menu-50.png";
  });
});
// let test = document.querySelectorAll(".about.show-animate .animate.scroll");

// Animation footer on scroll !!!

const phoneInput = document.getElementById("phone");

phoneInput.addEventListener("input", function (e) {
  let value = e.target.value.replace(/\D/g, "");
  if (value.length > 11) value = value.substring(0, 11);

  let formattedValue = `+7 `;

  if (value.length == 1 && /\d/.test(e.data)) formattedValue += `(${e.data}`;
  if (value.length > 1) formattedValue += `(${value.substring(1, 4)}`;
  if (value.length >= 4) formattedValue += `) ${value.substring(4, 7)}`;
  if (value.length >= 7) formattedValue += `-${value.substring(7, 9)}`;
  if (value.length >= 9) formattedValue += `-${value.substring(9, 11)}`;

  e.target.value = formattedValue;
});

phoneInput.addEventListener("keydown", function (e) {
  if (e.key === "Backspace") {
    let value = e.target.value.slice(0, -1);
    e.target.value = value;

    e.preventDefault();
  }
});
