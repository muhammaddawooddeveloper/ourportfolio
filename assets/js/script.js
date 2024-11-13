let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};

const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Backend Developer", "Web Designer"],
  typeSpeed: 80,
  backSpeed: 80,
  backDelay: 1200,
  loop: true,
});

// loader js

document.addEventListener("DOMContentLoaded", function () {
  var loader = document.getElementById("loader");
  var content = document.getElementById("content");

  window.addEventListener("load", function () {
    loader.style.display = "none";
    content.style.display = "block";
  });
});

var inner = document.querySelectorAll(".inner");
// console.log(inner);

window.addEventListener("scroll", function () {
  var scroll = window.scrollY;
  // console.log(scroll)
  if (scroll > 700){
    inner.forEach((rr) => {
        rr.style.display = "block";
    });
  }
 
  else{
    inner.forEach((rr) => {
        rr.style.display = "none";
    });
  }

  if(scroll > 2500){
    inner.forEach((rr) => {
        rr.style.display = "none";
    });
  }
 
});




// localStorage.clear()