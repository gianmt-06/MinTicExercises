var cantidad = prompt("Digite la cantidad de vendedores:");
var Dt= 0
document.writeln("<center><h1>Comisión total de ventas</h1></center>")
for (var intentos = 1; intentos<=cantidad ; intentos++){
    var nombre = prompt ("Digite el nombre del vendedor "+intentos+": ");
    var total = parseInt(prompt("Defina la cantidad de ventas hechas por "+nombre+": "));
for (nventas = 1; nventas <= total; nventas++){
    var dinero = prompt("Digite el precio de la venta "+nventas+"/"+total)
if(dinero<100000){
        var comisión = dinero*25/1000     
    } else {
        var comisión = dinero*0.75
    }var Dt = Dt + comisión
} document.writeln(intentos,". "+nombre+" = $"+Dt+"<br>")   
 if(intentos+1){
    var Dt = 0
}
} 
