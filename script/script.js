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
  let test = document.querySelectorAll(".about.show-animate .animate.scroll")
  test.forEach((elem) => {
    console.log(elem);
  });
  let header = document.querySelector(".header");
  header.classList.toggle("header-sticky", window.scrollY > 100);

  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
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
let test = document.querySelectorAll(".about.show-animate .animate.scroll");
