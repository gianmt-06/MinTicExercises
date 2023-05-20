var n1 = parseFloat(prompt("Ingrese el valor del primer número:"));
var signo = prompt("Ingrese la operación a realizar (+,-,*,/)");
var n2 = parseFloat(prompt("Ingrese el valor del segundo número:"));
switch (signo){
case '-':
var resultado = n1 - n2
break;
case '+':
var resultado = n1 + n2
break; 
case '*':
var resultado = n1 * n2
break; 
case '/':
var resultado = n1 / n2
break; 
}
document.writeln(resultado)
console.log(resultado)