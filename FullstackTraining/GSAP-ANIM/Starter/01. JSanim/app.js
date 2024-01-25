const sidebar = document.querySelector(".sidebar");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  sidebar.classList.toggle("hide");
});

//gsap is an animation lib
gsap.to(".ball", {
  
y:-100,
y:100,
duration: 2,
repeat: -1



})

//tween is a single moment in an animation