var _a, _b, _c;
var inputString = '';
var inputArea = document.querySelector('#result');
// To Make it draggable
var calculator;
calculator = document.getElementById('calculator');
var isDragging = false;
var offsetX, offsetY;
calculator === null || calculator === void 0 ? void 0 : calculator.addEventListener('mousedown', function (e) {
    isDragging = true;
    if (calculator === null)
        return;
    offsetX = e.clientX - calculator.getBoundingClientRect().left;
    offsetY = e.clientY - calculator.getBoundingClientRect().top;
});
document.addEventListener('mouseup', function () {
    isDragging = false;
});
document.addEventListener('mousemove', function (e) {
    if (calculator === null)
        return;
    if (isDragging) {
        calculator.style.left = (e.clientX - offsetX) + 'px';
        calculator.style.top = (e.clientY - offsetY) + 'px';
    }
});
var operators = 0;
document.querySelectorAll('.val').forEach(function (butn) {
    var btn = butn;
    btn.addEventListener('click', function () {
        inputString += btn.value;
        if (btn.value == '+' || btn.value == '-' || btn.value == '*' || btn.value == '/') {
            operators++;
        }
        if (operators > 1) {
            alert("Only one operator is allowed");
            inputString = inputString.substring(0, inputString.length - 1);
        }
        inputArea.value = inputString;
    });
});
(_a = document.querySelector('.res')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var strg = document.querySelector('#result');
    if (strg === null)
        return;
    var str = strg === null || strg === void 0 ? void 0 : strg.value;
    if (operators === 0)
        return;
    if (str.indexOf('+') > -1) {
        var splitted = str.split("+");
        var a = parseFloat(splitted[0]);
        var b = parseFloat(splitted[1]);
        inputArea.value = (a + b).toString();
    }
    else if (str.indexOf('-') > -1) {
        var splitted = str.split("-");
        var a = parseFloat(splitted[0]);
        var b = parseFloat(splitted[1]);
        inputArea.value = (a - b).toString();
    }
    else if (str.indexOf('*') > -1) {
        var splitted = str.split("*");
        var a = parseFloat(splitted[0]);
        var b = parseFloat(splitted[1]);
        inputArea.value = (a * b).toString();
    }
    else if (str.indexOf('/') > -1) {
        var splitted = str.split("/");
        var a = parseFloat(splitted[0]);
        var b = parseFloat(splitted[1]);
        inputArea.value = (a / b).toString();
    }
    inputString = inputArea.value;
    operators = 0;
});
(_b = document.querySelector('#clear')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    inputString = '';
    inputArea.value = '';
    operators = 0;
});
(_c = document.querySelector('#del')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    var a = inputString.charAt(inputString.length - 1);
    if (a === '+' || a === '-' || a === '*' || a === '/') {
        operators--;
    }
    inputString = inputString.substring(0, inputString.length - 1);
    inputArea.value = inputString;
});
