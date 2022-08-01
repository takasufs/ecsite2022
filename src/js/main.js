const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const img = document.getElementById("goodimg");

one.addEventListener("click", () => {
    img.src = one.src
});

two.addEventListener("click", () => {
    img.src = two.src
});

three.addEventListener("click", () => {
    img.src = three.src
});