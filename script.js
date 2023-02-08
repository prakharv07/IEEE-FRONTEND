// pointer (jQuery)
const point = document.getElementById("pointer");

jQuery(document).ready(function () {
  var mouseX = 0,
    mouseY = 0;
  var xp = 0,
    yp = 0;

  $(document).mousemove(function (e) {
    mouseX = e.pageX - 8;
    mouseY = e.pageY - 8;
  });

  setInterval(function () {
    xp += (mouseX - xp) / 6;
    yp += (mouseY - yp) / 6;
    $("#pointer").css({ left: xp + "px", top: yp + "px" });
  }, 10);
});

/* HAMBURGER */
const hamburger = document.querySelector(".button");
const main = document.querySelector(".main");
const footer = document.querySelector("footer");

hamburger.addEventListener("click", () => {
  const isOpened = hamburger.getAttribute("aria-expanded");
  if (isOpened === "false") {
    hamburger.setAttribute("aria-expanded", "true");
    footer.style.display = hidden;
    // main.style.display = hidden;
  } else {
    hamburger.setAttribute("aria-expanded", "false");
    footer.style.display = block;
    // main.style.display = block;
  }
});

const year = document.querySelector(".year");
const today = new Date();
year.innerHTML = `© ${today.getFullYear()}`;

/* NAVBAR HOVER EVENTS */
const navCount = document.querySelector(".counter");
function navCountUpdate(counter) {
  navCount.innerHTML = `0${counter}`;
}

let links = document.querySelectorAll(".options");
links.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    navCountUpdate(item.ariaColCount);
    console.log("hello");
  });
  item.addEventListener("mouseleave", () => {
    navCountUpdate(1);
  });
});


