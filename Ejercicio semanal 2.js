var total = 50
var intento = 1
var contador1 = 0
var contador2 = 0
var contador3 = 0
var Ttotal = 0
var dias1 = 0
var dias2 = 0
var dias3 = 0
alert ("¡Bienvenido! este es tu invernadero virtual")
document.write ("<center><h1>TIEMPO PROMEDIO DE 50 PLANTAS</h1></center>"+"<br>");
while( intento <= total ){
    intento++
    var familia = parseInt(prompt("Ingrese la familia de la planta (1,2 o 3):"));
    while ((familia<0)||(familia>3)){
        var familia = parseInt(prompt("Familia inválida, ingrese de nuevo el dato (1,2 o 3):"));
    } switch (familia){
        case 1: 
        var max = 20
        contador1 = contador1 +1 
        var tactual = parseFloat(prompt("Ingrese el tamaño actual de la planta en  metros(>0 y <20)"));
     while ((tactual<0)||(tactual>20)){
        var tactual = parseFloat(prompt("Tamaño erroneo, ingrese un tamaño válido en  metros(>0 y <20)"));
     } for (var dia=0;tactual<max;dia++){
    tactual = tactual + (tactual*0.02)
  } dias1= dias1 + dia 
  break;
       case 2:
        var max = 100
        contador2 = contador2 + 1
        var tactual = parseFloat(prompt("Ingrese el tamaño actual de la planta en  metros(>0 y <100)"));
     while ((tactual<0)||(tactual>100)){
        var tactual = parseFloat(prompt("Tamaño erroneo, ingrese un tamaño válido en  metros(>0 y <100)"))
     } for (var dia=0;tactual<max;dia++){
    tactual = tactual + (tactual*0.10)
  } dias2= dias2 + dia
  break;
       case 3:
        var max = 4
        contador3 = contador3 + 1
        var tactual = parseFloat(prompt("Ingrese el tamaño actual de la planta en  metros(>0 y <4)"));
     while ((tactual<0)||(tactual>4)){
        var tactual = parseFloat(prompt("Tamaño erroneo, ingrese un tamaño válido en  metros(>0 y <4)"))
     } for (var dia=0;tactual<max;dia++){
    tactual = tactual + (tactual*0.03)
  } dias3 = dias3 + dia
  break;
 }
} 

var promedio1 = dias1 / contador1
var promedio2 = dias2 / contador2
var promedio3 = dias3 / contador3

document.write ("<h2>PLANTAS CACTÁCEAS:</h2>"+"<br>");
document.write ("El tiempo de crecimiento promedio para las "+contador1+" plantas cactáceas es de "+promedio1+"<br>");
document.write ("<h2>PLANTAS PINÁCEAS:</h2>"+"<br>");
document.write ("El tiempo de crecimiento promedio para las "+contador2+" plantas pináceas es de "+promedio2+"<br>");
document.write ("<h2>PLANTAS LILIÁCEAS:</h2>"+"<br>");
document.write ("El tiempo de crecimiento promedio para las "+contador3+" plantas liliáceas es de "+promedio3+"<br>");
