function operate(){
    const num1 = document.querySelector('#num1').value;
    const num2 = document.querySelector('#num2').value;
    const operator = document.querySelector('#selectOperator').value;
    const result = calc(num1, num2, operator);
    const showResult = document.querySelector('#showResult');
    showResult.textContent = `The result of ${num1} ${operator} ${num2} is ${result.toPrecision(2)}`;
}

function calc(num1, num2, operator){
    switch(operator){
        case 'sum':
            return num1+num2;
        case 'rest':
            return num1-num2;
        case 'multiply':
            return num1*num2;
        case 'divide':
            return num1/num2;
    }
}
document.querySelector('#operateButton').addEventListener('click', operate)