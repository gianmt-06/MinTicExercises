var valor1 = parseInt(prompt("Ingrese el resultado obtenido en el primer dado:"));
var valor2 = parseInt(prompt("Ingrese el resultado obtenido en el segundo dado:"));
if (valor1 == valor2){
    document.writeln("Par."+"<br>");
} if  (valor1 != valor2) {
    document.writeln("Lanzamiento."+"<br>");
} if (valor1 + valor2 < 6){
    document.writeln("Juego Perdido."+"<br>");
} switch (valor1 || valor2){
    case (5 || 6):
        document.writeln("Puntaje alto.")
    break;
    case (1 || 2):
        document.writeln("Puntaje deficiente.")
    break;
} 

