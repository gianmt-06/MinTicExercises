document.writeln("<center><h1>Tablas de multiplicar del 1 al 10</h1></center>")
for(var factor1=1;factor1<=10;factor1++){
    document.writeln("<h2>Tabla del ",factor1+"</h2>"+"<br>")
    for(var factor2=1;factor2<=10;factor2++){
        document.writeln(factor1+"x"+factor2+"= "+factor1*factor2+"<br>")
    }
}
