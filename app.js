const numBtn = document.querySelectorAll(".number");
const display = document.querySelector("#calc");
const clear = document.querySelector("#clear");
const bs = document.querySelector("#bs");
const calc = document.querySelectorAll(".calc");
const final = document.querySelector("equals");
let str = "";
for (let btn of numBtn) {
    btn.addEventListener("click", function () {
        if (display.value == "ERROR") {
            str = this.innerText;
            display.value = str;
            return;
        }
        str += this.innerText;
        display.value = str;
    })
}
clear.addEventListener("click", () => {
    str = "";
    display.value = str;
})
bs.addEventListener("click", () => {
    str = str.slice(0, length - 1);
    display.value = str;
})
for (let btn1 of calc) {
    btn1.addEventListener("click", () => {
        if (str == "" || !(str[str.length - 1] >= 0 && str[str.length - 1] <= 9)) {
            display.value = "ERROR";
            return;
        }
        str += btn1.innerText;
        display.value = str;
    })
}
equals.addEventListener("click", function (e) {
    e.preventDefault();
    display.value = eval(str);
    str = display.value;
})