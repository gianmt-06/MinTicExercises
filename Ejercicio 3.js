var n1 = parseFloat(prompt("Digite el primer número"));
var n2 = parseFloat(prompt("Digite el segundo número"));
var n3 = parseFloat(prompt("Digite el tercer número"));
if (n1 == n2 && n2 == n3){
    document.writeln("Los números son iguales");
} else if (n1 > n2 && n2 > n3){
    document.writeln("Los números se escribieron en orden descendente");
} else if (n1 < n2 && n2 < n3){
    document.writeln("Los números se escribieron en orden ascendente");
} else {
    document.writeln("Los números se escribieron en desorden");
}