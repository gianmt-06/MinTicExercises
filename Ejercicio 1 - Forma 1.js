var a= parseInt (prompt("Digite un número entero positivo:"))
var b= (String(a).length)
switch (b){
    case 1:
    document.writeln("El número "+a," tiene 1 dígito");
    break;

    case 2:
     document.writeln("El número "+a," tiene 2 dígitos");
    break;

    case 3:
     document.writeln("El número "+a," tiene 3 dígitos");
    break;

     case 4:
     document.writeln("El número "+a," tiene 4 dígitos");
     break;

    default:
    document.writeln("Error");
}