function operate(num1, num2, operator){
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