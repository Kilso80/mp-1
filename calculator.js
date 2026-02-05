
let firstInput = document.getElementById("nb1");
let secondInput = document.getElementById("nb2");
let output = document.getElementById("output");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let times = document.getElementById("times");
let divide = document.getElementById("divide");
let power = document.getElementById("power");
let clear = document.getElementById("clear");

plus.addEventListener("click", () => {
    let n1 = Number(firstInput.value);
    let n2 = Number(secondInput.value);
    output.innerHTML = `${n1} + ${n2} = ${n1 + n2}`
    output.className = n1 + n2 < 0? "negative": "";
});

minus.addEventListener("click", () => {
    let n1 = Number(firstInput.value);
    let n2 = Number(secondInput.value);
    output.innerHTML = `${n1} - ${n2} = ${n1 - n2}`
    output.className = n1 - n2 < 0? "negative": "";
});

times.addEventListener("click", () => {
    let n1 = Number(firstInput.value);
    let n2 = Number(secondInput.value);
    output.innerHTML = `${n1} * ${n2} = ${n1 * n2}`
    output.className = n1 * n2 < 0? "negative": "";
});

divide.addEventListener("click", () => {
    let n1 = Number(firstInput.value);
    let n2 = Number(secondInput.value);
    output.innerHTML = `${n1} / ${n2} = ${n1 / n2}`
    output.className = n1 / n2 < 0? "negative": "";
});

power.addEventListener("click", () => {
    let n1 = Number(firstInput.value);
    let n2 = Number(secondInput.value);
    let res = 1;
    for (let i = 0; i < n2; i++)
        res *= n1;
    output.innerHTML = `${n1} ** ${n2} = ${res}`
    output.className = res < 0? "negative": "";
});

clear.addEventListener("click", () => {
    output.innerHTML = ``
});

function updateButtons() {
    plus.disabled = minus.disabled = times.disabled = divide.disabled = power.disabled = false;
    let n1 = parseFloat(firstInput.value);
    let n2 = parseFloat(secondInput.value);
    if (isNaN(n1) || isNaN(n2))
        plus.disabled = minus.disabled = times.disabled = divide.disabled = power.disabled = true;
    else {
        if (n2 % 1 !== 0 || (n2 === 0 && n1 === 0))
            power.disabled = true;
        if (n2 === 0)
            divide.disabled = true;
    }
}

firstInput.addEventListener("input", updateButtons);
secondInput.addEventListener("input", updateButtons);

updateButtons();
