var valor1 = parseInt(prompt("Ingrese el resultado obtenido en el primer dado:"));
var valor2 = parseInt(prompt("Ingrese el resultado obtenido en el segundo dado:"));
if (valor1 == valor2){
    document.writeln("Par.");
} else (valor1 != valor2);{
    document.writeln("Lanzamiento."+"<br>");
} if (valor1 + valor2 < 6){
    document.writeln("Juego Perdido."+"<br>");
} if ((valor1==6)||(valor1==5)){
    document.writeln("Puntaje Alto"+"<br>");
} else {
    if((valor2==6)||(valor2==5)){
        document.writeln("Puntaje Alto."+"<br>");
    } else {
        if ((valor1 == 1)||(valor1 == 2)){
            document.writeln("Puntaje Deficiente."+"<br>");
        } else {
            if ((valor2 == 1)||(valor2 == 2)){
                document.writeln("Puntaje Deficiente."+"<br>");
            }
        }
    }
}