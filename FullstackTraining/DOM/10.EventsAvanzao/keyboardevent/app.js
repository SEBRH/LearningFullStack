const input = document.querySelector('input');

input.addEventListener("keypress", (e) => {

    console.log(`key ${e.key} pressed`);

});

input.addEventListener("keydown", (e) => {

    console.log(`key ${e.key} down`);

});

//useful properties and methods

input.addEventListener("keypress", (e) => {
    console.log(e.charCode);
    console.log(e.code);
    console.log(e.ctrlKey);
});