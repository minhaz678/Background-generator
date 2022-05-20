var css = document.querySelector('h3');
var color1 = document.getElementById('min1');
var color2 = document.getElementById('min2');
var body   = document.getElementById('bod');

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
};

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

