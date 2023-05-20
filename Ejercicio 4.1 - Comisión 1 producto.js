var cantidad = prompt("Digite la cantidad de trabajadores:");
var intentos = 0
var total
document.writeln("<center><h1>Comisión de vendedores</h1></center>")
while (intentos<cantidad) {
    intentos ++
    var nombre = prompt ("Digite el nombre del vendedor "+intentos+": ");
    var total = prompt("Digite el total de las ventas del vendedor "+intentos+": ");
    if(total<100000){
        var comisión = total*25/1000
        document.writeln(intentos,". "+nombre+" = $"+comisión+"<br>")
    } else {
        var comisión = total*75/100
        document.writeln(intentos,". "+nombre+" = $"+comisión+"<br>")
    }
}