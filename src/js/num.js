let redtext = document.getElementById("red").innerHTML;
let classred = document.querySelector(".red");

window.localStorage.setItem('rednum', redtext);




function chg() {
    if (red.innerText <= 0)
    {
        classred.style.display = "none";
    } else
    {
        classred.style.display = "block";
    }
}



let id = document.getElementById("id");

let num1 = document.getElementById("saihu_num");
let buy1 = document.getElementById("saihu_buy");
let btn1 = document.getElementById("saihu-btn");
if (id.innerText === "商品ID:44401")
{
    function saihu() {
        redtext = (Number(window.localStorage.getItem('rednum')) + Number(num1.value));
        chg();
    }
}


let num2 = document.getElementById("iphone_num");
let buy2 = document.getElementById("iphone_buy");
let btn2 = document.getElementById("iphone-btn");
if (id.innerText === "商品ID:44402")
{
    function iphone() {
        redtext = (Number(window.localStorage.getItem('rednum')) + Number(num2.value));
        chg();
    }
}

let num3 = document.getElementById("gum_num");
let buy3 = document.getElementById("gum_buy");
let btn3 = document.getElementById("gum-btn");
if (id.innerText === "商品ID:44403")
{
    function gum() {
        redtext = (Number(window.localStorage.getItem('rednum')) + Number(num3.value));
        chg();
    }
}

let num4 = document.getElementById("eye_num");
let buy4 = document.getElementById("eye_buy");
let btn4 = document.getElementById("eye-btn");
if (id.innerText === "商品ID:44404")
{
    function eye() {
        redtext = (Number(window.localStorage.getItem('rednum')) + Number(num3.value));
        chg();
    }
}

let num5 = document.getElementById("syoudoku_num");
let buy5 = document.getElementById("syoudoku_buy");
let btn5 = document.getElementById("syoudoku-btn");
if (id.innerText === "商品ID:44405")
{
    function syoudoku() {
        redtext = (Number(window.localStorage.getItem('rednum')) + Number(num5.value));
        chg();
    }
}

let num6 = document.getElementById("stick_num");
let buy6 = document.getElementById("stick_buy");
let btn6 = document.getElementById("stick-btn");
if (id.innerText === "商品ID:44406")
{
    function stick() {
        redtext = (Number(window.localStorage.getItem('rednum')) + Number(num6.value));
        chg();
    }
}

let num7 = document.getElementById("bottle_num");
let buy7 = document.getElementById("bottle_buy");
let btn7 = document.getElementById("bottle-btn");
if (id.innerText === "商品ID:44407")
{
    function bottle() {
        redtext = (Number(window.localStorage.getItem('rednum')) + Number(num7.value));
        chg();
    }
}


let num8 = document.getElementById("doraiba_num");
let buy8 = document.getElementById("doraiba_buy");
let btn8 = document.getElementById("doraiba-btn");
if (id.innerText === "商品ID:44408")
{
    function saidoraiba() {
        redtext = (Number(window.localStorage.getItem('rednum')) + Number(num8.value));
        chg();
    }
}


let num9 = document.getElementById("huusennki_num");
let buy9 = document.getElementById("huusennki_buy");
let btn9 = document.getElementById("huusennki-btn");
if (id.innerText === "商品ID:44409")
{
    function huusennki() {
        redtext = (Number(window.localStorage.getItem('rednum')) + Number(num9.value));
        chg();
    }
}

let num10 = document.getElementById("iyahon_num");
let buy10 = document.getElementById("iyahon_buy");
let btn10 = document.getElementById("iyahon-btn");
if (id.innerText === "商品ID:44410")
{
    function iyahon() {
        redtext = (Number(window.localStorage.getItem('rednum')) + Number(num10.value));
        chg();
    }
}

