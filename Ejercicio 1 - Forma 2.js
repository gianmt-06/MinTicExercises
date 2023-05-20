var a= parseInt(prompt("Digite un número entero positivo:"));
if (a <= 9) {
    document.writeln("El número "+a," tiene 1 dígito");
} else if (a <= 99){
    document.writeln("El número "+a," tiene 2 dígitos");
} else if (a <= 999){
    document.writeln("El número "+a," tiene 3 dígitos");
} else if (a <= 9999){
    document.writeln("El número "+a," tiene 4 dígitos");
} else { 
    document.writeln("Error");
}