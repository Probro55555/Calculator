function add(a,b) {
 result = a + b;
 return result;
}
function sub(a,b) {
  result = a-b;
  return result;
}
function mul(a,b) {
  result = a*b;
  return result;
}
function div(a,b) {
  result = a/b;
  return result;
}

let num1;
let num2;
let op;

function operate(number1,number2,operator) {
  if (operator == "+") {
    return Number.parseFloat(number1+number2).toFixed(2);
    add(number1,number2);
  }
  else if (operator == "-") {
    return Number.parseFloat(number1 - number2).toFixed(2);
    sub(number1,number2);
  }
  else if (operator == "*"){
    return Number.parseFloat(number1 * number2).toFixed(2);
    mul(number1,number2);
  }
  else {
    let l = Number.parseFloat(number1 / number2).toFixed(5);
    return l;
    div(number1,number2);
  }
}

const textbox = document.querySelector("#textbox");
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click" ,() => {
    if (button.innerText == 1 || button.innerText == 2 || button.innerText == 3 || button.innerText == 4 || button.innerText == 5 
      || button.innerText == 6 || button.innerText == 7 || button.innerText == 8 || button.innerText == 9 || button.innerText == 0) {
        if (textbox.value == "") {
          textbox.value = button.innerText;
          
          
        }
        else {
          textbox.value = textbox.value + button.innerText;
          
          
        } 
        
     
      }
    else if (button.innerText == "+" || button.innerText == "-" || button.innerText == "*" || button.innerText == "/") {
      num1 = parseInt(textbox.value);
      
      op = button.innerText;
      
      textbox.value = "";

    }
    else if (button.innerText == "C") {
      textbox.value = "";
    }
    else {
      num2 = parseInt(textbox.value);
      console.log(typeof(num2));
      console.log(typeof(num1));
      console.log(typeof(op));
      console.log(num1);
      console.log(op);
      console.log(num2);

      
      textbox.value = operate(num1,num2,op);

      
    }
    
  });
});
