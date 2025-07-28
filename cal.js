console.log('hi')



//i heard eval is bad practice so I might go back to doing if/else statements

//i think its safe to use eval(), just not when im actually making a website, where it would cause risks for users



const display = document.getElementById("display");
let resultButton = document.getElementById("result");


//using getElementById, I can change the display value to a blank input
//then having it be a function, i'm able to apply this on the "C" button on the calculator
function clearDisplay() {
    display.value = " ";
}

let value = document.getElementById("value");

//i thought this function wasn't working until i just added another id for input
//adding the input "display" and the value class allows me to use the eval() on numbers & operations
function calculate() {
    display.value = eval(display.value);

    if (display.value === "NaN") {
        console.log("Error: Cannot divide by 0");
        display.value = "Cannot divide by 0";
        
    }

}













// var buttonNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
// var operSigns = ['+', '-', '*', '/']
//  let x = buttonNumbers



//  function calculate(x, operSigns) {
//     if (operSigns === '+');
//         return x + x;
//  }

//  let result = calculate(x, operSigns)
//  console.log(result)

//this is wrong^


