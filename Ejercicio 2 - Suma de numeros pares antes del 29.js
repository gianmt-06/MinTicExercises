var contador = 0 //declaramos la variable contador que va a medir los números pares entre 1 y 29
var suma = 0 //declaramos la variable suma que será la encargada de sumar los números pares entre 1 y 29
document. writeln ("<center><h1>Cuadrado, cubo y promedio de la suma de números pares del 1 al 29</h1></center>"+"<br>")
for(var inicio=1;inicio<29;inicio++){ //declaramos la variable inicio y le damos el valor 1 (de ahí comienza), decimos que si inicio es menor a 29(ahí finaliza) entonces inicio aumenta en 1 unidad.
    if(inicio % 2 == 0){ //si inicio tiene un residuo = 0(es par), entonces 
        contador= contador+1// el contador aumentará en 1 por cad número par
        suma = suma+inicio//la suma será igual la suma de los anterires números y el núevo número par.
    }  
}document. writeln ("el cuadrado de la suma, es igual a: "+suma**2+"<br>")
document. writeln ("el cubo de la suma, es igual a: "+suma**3+"<br>")
document. writeln ("el promedio de la suma, es igual a: "+suma/contador+"<br>")