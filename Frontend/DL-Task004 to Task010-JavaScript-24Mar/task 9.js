let calculator ={
    num1:0,
    num2:0,
    read: ()=>{
       num1 = parseInt(prompt('Enter first number : ')); 
       num2 = parseInt(prompt('Enter second number : '));
        console.log(num1,   num2);
    },
    add: ()=> {
        let sum = num1+num2;
        console.log(sum);
    },
    multiply: ()=>{
        let product = num1*num2;
        console.log(product);
    }
}
calculator.read();
calculator.add();
calculator.multiply();