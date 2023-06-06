// scroll seection!!!
let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".header .navbar a");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('')
  });
};

window.onscroll = () => {
  let header = document.querySelector(".header");
  header.classList.toggle("header-sticky", window.scrollY > 100);
};
