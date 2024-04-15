let menuIcon = document.querySelector(".menu-icon");
let navList = document.querySelector(".nav-list");
menuIcon.addEventListener("click", (e) => {
  if (navList.style.maxHeight == "0px") {
    navList.style.maxHeight = "350px";
  } else {
    navList.style.maxHeight = "0px";
  }
});

