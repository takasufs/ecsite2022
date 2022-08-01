let red = document.getElementById("red");
let classred = document.querySelector(".red");







if (red.innerText == 0)
{
    classred.style.display = "none";
} else
{
    classred.style.display = "block";
}

const list = []

let id = document.getElementById("id");
let num1 = document.getElementById("saihu_num");
let buy1 = document.getElementById("saihu_buy");
let btn1 = document.getElementById("saihu-btn");
if (id.innerText === "商品ID:44401")
{
    btn1.addEventListener("click", function () {
        num1.value = buy1;
        list[0] = num1.value;
        red.innerText = list[0] + list[1] + list[2] + list[3] + list[4] + list[5] + list[6] + list[7] + list[8] + list[9] + list[10]
    })
}


let num2 = document.getElementById("iphone_num");
let buy2 = document.getElementById("iphone_buy");
let btn2 = document.getElementById("iphone-btn");
if (id.innerText === "商品ID:44402")
{
    btn2.addEventListener("click", function () {
        num2.value = buy2;
        list[1] = num2.value;
        red.innerText = list[0] + list[1] + list[2] + list[3] + list[4] + list[5] + list[6] + list[7] + list[8] + list[9] + list[10]
    })
}

let num3 = document.getElementById("gum_num");
let buy3 = document.getElementById("gum_buy");
let btn3 = document.getElementById("gum-btn");
if (id.innerText === "商品ID:44403")
{
    btn3.addEventListener("click", function () {
        num3.value = buy3;
        list[2] = num3.value;
        red.innerText = list[0] + list[1] + list[2] + list[3] + list[4] + list[5] + list[6] + list[7] + list[8] + list[9] + list[10]
    })
}

let num4 = document.getElementById("eye_num");
let buy4 = document.getElementById("eye_buy");
let btn4 = document.getElementById("eye-btn");
if (id.innerText === "商品ID:44404")
{
    btn4.addEventListener("click", function () {
        num4.value = buy4;
        list[3] = num4.value;
        red.innerText = list[0] + list[1] + list[2] + list[3] + list[4] + list[5] + list[6] + list[7] + list[8] + list[9] + list[10]
    })
}

let num5 = document.getElementById("syoudoku_num");
let buy5 = document.getElementById("syoudoku_buy");
let btn5 = document.getElementById("syoudoku-btn");
if (id.innerText === "商品ID:44405")
{
    btn5.addEventListener("click", function () {
        num5.value = buy5;
        list[4] = num5.value;
        red.innerText = list[0] + list[1] + list[2] + list[3] + list[4] + list[5] + list[6] + list[7] + list[8] + list[9] + list[10]
    })
}

let num6 = document.getElementById("stick_num");
let buy6 = document.getElementById("stick_buy");
let btn6 = document.getElementById("stick-btn");
if (id.innerText === "商品ID:44406")
{
    btn6.addEventListener("click", function () {
        num6.value = buy6;
        list[5] = num6.value;
        red.innerText = list[0] + list[1] + list[2] + list[3] + list[4] + list[5] + list[6] + list[7] + list[8] + list[9] + list[10]
    })
}

let num7 = document.getElementById("bottle_num");
let buy7 = document.getElementById("bottle_buy");
let btn7 = document.getElementById("bottle-btn");
if (id.innerText === "商品ID:44407")
{
    btn7.addEventListener("click", function () {
        num7.value = buy7;
        list[6] = num7.value;
        red.innerText = list[0] + list[1] + list[2] + list[3] + list[4] + list[5] + list[6] + list[7] + list[8] + list[9] + list[10]
    })
}


let num8 = document.getElementById("doraiba_num");
let buy8 = document.getElementById("doraiba_buy");
let btn8 = document.getElementById("doraiba-btn");
if (id.innerText === "商品ID:44408")
{
    btn8.addEventListener("click", function () {
        num8.value = buy8;
        list[7] = num8.value;
        red.innerText = list[0] + list[1] + list[2] + list[3] + list[4] + list[5] + list[6] + list[7] + list[8] + list[9] + list[10]
    })
}


let num9 = document.getElementById("huusennki_num");
let buy9 = document.getElementById("huusennki_buy");
let btn9 = document.getElementById("huusennki-btn");
if (id.innerText === "商品ID:44409")
{
    btn9.addEventListener("click", function () {
        num9.value = buy9;
        list[8] = num9.value;
        red.innerText = list[0] + list[1] + list[2] + list[3] + list[4] + list[5] + list[6] + list[7] + list[8] + list[9] + list[10]
    })
}

let num10 = document.getElementById("iyahon_num");
let buy10 = document.getElementById("iyahon_buy");
let btn10 = document.getElementById("iyahon-btn");
if (id.innerText === "商品ID:44410")
{
    btn10.addEventListener("click", function () {
        num10.value = buy10;
        list[9] = num10.value;
        red.innerText = list[0] + list[1] + list[2] + list[3] + list[4] + list[5] + list[6] + list[7] + list[8] + list[9] + list[10]
    })
}

