// scroll seection!!!

// window.onscroll = () => {
//   let header = document.querySelector(".header");
//   header.classList.toggle("header-sticky", window.scrollY > 100);
// };

let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".header .navbar a");

window.onscroll = () => {
  let header = document.querySelector(".header");
  header.classList.toggle("header-sticky", window.scrollY > 100);
  
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
console.log(offset);
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        // document.querySelector(".navbar a ").classList.add('active');
      });
    }
  });
};
