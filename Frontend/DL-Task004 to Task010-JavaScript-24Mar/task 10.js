function calci(){
    this.num1=0;
    this.num2=0;
    this.read=function(){
        this.num1= parseInt(prompt('Enter first number : ')); 
        this.num2 = parseInt(prompt('Enter second number : '));
        console.log(this.num1,   this.num2);
    };
    this.sum=function() {
        let sum = this.num1 + this.num2;
        console.log(sum);
    };
    this.product=function(){
        let product = this.num1*this.num2;
        console.log(product);
    };
}
let cal= new calci();
cal.read();
cal.sum();
cal.product();