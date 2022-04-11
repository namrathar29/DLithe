//spread operator
let arr1 = [ 1, 2, 3];
let arr2 = [...arr1];

document.write(arr1); 
document.write("<br>")
document.write(arr2); 
document.write("<br>")
arr1.push(4);
document.write(arr1); 
document.write("<br>")
document.write(arr2); 
document.write("<br>")


//rest operator
let func = function(...args) {
    document.write(args);
}

func(3);
document.write("<br>")
func(4, 5, 6);