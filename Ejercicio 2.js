var n1 = parseFloat(prompt("Digite el primer número"));
var n2 = parseFloat(prompt("Digite el segundo número"));
var n3 = parseFloat(prompt("Digite el tercer número"));
if (n1 == n2 && n2 == n3){
    document.writeln("Los números son iguales");
} else if (n1 < n2 && n1 < n3){
    document.writeln("El número menor es: "+n1);
} else if (n2 < n1 && n2 < n3){
    document.writeln("El número menor es: "+n2);
} else {
    document.writeln("El número menor es: "+n3);
}