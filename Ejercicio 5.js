var nombre = prompt("Digite el nombre del vendedor:");
var código = parseInt(prompt("Digite el código del producto (1, 2 o 3):"));
var total = parseInt(prompt("Digite el valor total de las ventas:"));
switch (código){
    case 1 :
       var comisión = total*5/100;
    break;
    case 2 :
       var comisión = total*8/100;
    break;
    case 3 :
        var comisión = total*3/100;
    break;
    default:
        var comisión = ("error, digíte nuevamente el código del producto");
}
document.writeln("Vendedor: ",nombre +"<br>");
document.writeln("El valor de la comisión es: ",comisión);
