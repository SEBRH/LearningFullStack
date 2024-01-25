//toggle..

const h1 = document.querySelector("h1");

h1.addEventListener("click", () => {
    h1.classList.toggle("red");
})

h1.addEventListener("mouseover", () =>{

    h1.style.cursor = "pointer";

});
