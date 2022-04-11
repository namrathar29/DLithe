let a = "hello global ";
function greet() {
    a = "variable";
}
document.write(a);
greet();
document.write(a);