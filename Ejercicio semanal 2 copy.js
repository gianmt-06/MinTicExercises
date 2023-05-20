/*
document.write("<h1>Este programa determinda si ganaste</h1>");//Título
var cont= 1 //declaramos la variable contador como 1
do{
    var numero = parseFloat(prompt("Por favor ingrese el número. Intento numero: "+cont));
    if((numero>=2)&&(numero<=4)){
        document.writet("Ok en el intento N: "+cont);
    }
    cont = cont +1;//siempre que se ejecute el programa el contador va a aumentar en 1
} while (numero!=0);
*/
var crecimientodiario
var tprom
var cantidad1= 0
var familia
var tactual //tamaño actual
var crecimientodiario
var intento = 1
while (intento<=2){
    intento++
    var familia=parseInt(prompt("Intente el número correspondiente a la familia de la planta (1,2 o 3)"));
    while ((familia<0)||(familia>3)){
        var familia=parseInt(prompt("Familia no válida, ingrese de nuevo el dato:"));
    }
} if (familia == 1){
    cantidad1 = cantidad1 + 1
    var tactual = parseFloat(prompt("Ingrese el tamaño actual de la planta en metros:"));
    var tmax = 20
    while ((tactual<0)||(tactual>20)){
        var tactual = parseFloat(prompt("El tamaño ingresado supera el tamaño máximo de la planta, ingreselo de nuevo"));
        
    }
    crecimientodiario = tactual
    var dia = 0
    do {
    crecimientodiario= crecimientodiario+(crecimientodiario*2/100)
    dia =  dia+1
    } while (crecimientodiario<tmax) 
    var dias1= dias1 + dia
} else {
    if(familia == 2){
        var cantidad2 = cantidad2+ 1
        var tactual = parseFloat(prompt("Ingrese el tamaño actual de la planta en metros:"));
    var tmax = 100
    while ((tactual<0)||(tactual>100)){
        var tactual = parseFloat(prompt("El tamaño ingresado supera el tamaño máximo de la planta, ingreselo de nuevo"));
    }
    crecimientodiario = tactual
    var dia = 0
    do {
        crecimientodiario= crecimientodiario+(crecimientodiario*10/100)
        dia =  dia+1
        } while (crecimientodiario<tmax) 
        var dias2= dias2 + dia
    } else {
        var cantidad3 = cantidad3 + 1
        var tactual = parseFloat(prompt("Ingrese el tamaño actual de la planta en metros:"));
    var tmax = 4
    while ((tactual<0)||(tactual>4)){
        var tactual = parseFloat(prompt("El tamaño ingresado supera el tamaño máximo de la planta, ingreselo de nuevo"));
    }
    crecimientodiario = tactual
    var dia = 0
    do {
        crecimientodiario= crecimientodiario+(crecimientodiario*3/100)
        dia =  dia+1
        } while (crecimientodiario<tmax) 
        var dias3= dias3 + dia
    }

}




/*

*/