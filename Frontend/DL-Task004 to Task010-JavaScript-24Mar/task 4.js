let operator = prompt('Enter operator');
let cnf = confirm("Are you sure the operator is valid");
if (cnf == true) {
    let num1 = parseInt(prompt('Enter the first number'));
    let num2 = parseInt(prompt('Enter the second number'));
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            alert(`${num1} + ${num2} = ${result}`);
            break;

        case '-':
            result = num1 - num2;
            alert(`${num1} - ${num2} = ${result}`);
            break;

        case '*':
            result = num1 * num2;
            alert(`${num1} * ${num2} = ${result}`);
            break;

        case '/':
            result = num1 / num2;
            alert(`${num1} / ${num2} = ${result}`);
            break;
            
        default:
            alert("Not a operator");
    }
}