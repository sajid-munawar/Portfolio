const menuOpen = document.getElementById("menu-opener");
const menu = document.querySelector(".menu-js");
const close = document.querySelector(".x");
const closelink = document.querySelectorAll(".link");

console.log(closelink);

menuOpen.addEventListener("click", (e) => {
  // console.log("clicked");
  menu.style.display = "block";
//   e.stopPropagation;
});

close.addEventListener("click", (e) => {
  // console.log("clicked");
  menu.style.display = "none";
//   e.stopPropagation;
});

closelink.forEach(link => {
  link.addEventListener("click", (e) => {
  // console.log("clicked");
  menu.style.display = "none";
//   e.stopPropagation;
});
})

// closelink
