var x= parseFloat(prompt("Digite el primer número: "));//definir las tre variables
var z= parseFloat(prompt("Digite el segundo número: "));
var y= parseFloat(prompt("Digite el número del tercer punto: "));
document.writeln("<h2>PRIMER PUNTO</h2>"+"<br>" )
document.writeln("1. x^z = ", x**z +"<br>" ) //elevamos x a la z
document.writeln("<h2>SEGUNDO PUNTO</h2>"+"<br>" )
var suma= 0
var producto = 1
for (x=x+1;x<=z-1;x++){
    suma= suma + x
    producto = producto*x
} document.writeln("el producto de los números entre"+x+" y "+z +" = "+producto+"<br>")
document.writeln("la suma de los números entre"+z+" y "+z +" = "+suma+"<br>")
document.writeln("<h2>TERCER PUNTO</h2>"+"<br>" )
var numeros = 0
var factorial = 1
while(numeros < y) {
    numeros++
    factorial = factorial*numeros  
}document.writeln(factorial)