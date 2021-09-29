var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var gradient_box = document.getElementById("gradient-box");
var rgb_value = document.querySelector("h4");
var type_grad = document.querySelector("#type-grad");

function setGradient() {
    gradient_box.style.background = //value+
    type_grad.value +
    color1.value +
    "," +
    color2.value +
    ")";

    rgb_value.textContent = gradient_box.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
type_grad.addEventListener("input", setGradient);

function CopyToClip(){
    var r = document.createRange();
    r.selectNode(document.querySelector("#output"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();

    alert('Code Copied' )
}
