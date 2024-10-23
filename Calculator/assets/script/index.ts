var inputString : string = '';
var inputArea = document.querySelector('#result') as HTMLInputElement;

// To Make it draggable
let calculator:HTMLElement | null;
calculator = document.getElementById('calculator');

let isDragging = false;
let offsetX:number, offsetY:number;

calculator?.addEventListener('mousedown', (e) => {
    isDragging = true;
    if(calculator===null) return;
    offsetX = e.clientX - calculator.getBoundingClientRect().left;
    offsetY = e.clientY - calculator.getBoundingClientRect().top;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

document.addEventListener('mousemove', (e) => {
    if(calculator===null) return;
    if (isDragging) {
        calculator.style.left = (e.clientX - offsetX) + 'px';
        calculator.style.top = (e.clientY - offsetY) + 'px';
    }
});



var operators:number = 0;

document.querySelectorAll('.val').forEach((butn )=>{
    const btn:HTMLInputElement = butn as HTMLInputElement;
    btn.addEventListener('click', function(){
        inputString += btn.value;
        if (btn.value== '+' || btn.value== '-' || btn.value== '*' || btn.value== '/'){
            operators++;
        }
        if (operators>1){
            alert("Only one operator is allowed");
            inputString = inputString.substring(0, inputString.length-1);
        }
        inputArea.value = inputString;
    });
});

document.querySelector('.res')?.addEventListener('click', function () {
    var strg: HTMLInputElement | null = document.querySelector('#result');
    if(strg===null) return;

    var str:string = strg?.value;

    if(operators===0) return;
   
    if (str.indexOf('+')>-1){
        var splitted = str.split("+");
        var a:number = parseFloat(splitted[0]);
        var b:number = parseFloat(splitted[1]);
        inputArea.value=(a+b).toString();
    }
    else if (str.indexOf('-')>-1){
        var splitted = str.split("-");
        var a:number = parseFloat(splitted[0]);
        var b:number = parseFloat(splitted[1]);
        inputArea.value=(a-b).toString();
    }
    else if (str.indexOf('*')>-1){
        var splitted = str.split("*");
        var a:number = parseFloat(splitted[0]);
        var b:number = parseFloat(splitted[1]);
        inputArea.value=(a*b).toString();
       
    }
    else if (str.indexOf('/')>-1){
        var splitted = str.split("/");
        var a:number = parseFloat(splitted[0]);
        var b:number = parseFloat(splitted[1]);
        inputArea.value=(a/b).toString();
    }

    inputString=inputArea.value;
    operators=0;
     
});

document.querySelector('#clear')?.addEventListener('click', function () {
    inputString='';
    inputArea.value='';
    operators=0;
}
);

document.querySelector('#del')?.addEventListener('click', function () {
    let a:string = inputString.charAt(inputString.length-1);
    if(a==='+' || a==='-' || a==='*' || a==='/'){ operators--;}
    inputString = inputString.substring(0, inputString.length-1);
    inputArea.value = inputString;
});