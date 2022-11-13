//aqui va la funcion ingresar dato
var nombre = prompt ("Ingrese su nombre");
var carrera = prompt ("Ingrese su carrera");
var nota1html = prompt ("Ingrese su primera nota de HTML");
var nota2html = prompt ("Ingrese su segunda nota de HTML");
var nota3html = prompt ("Ingrese su tercera nota de HTML");
var nota1css = prompt ("Ingrese su primera nota de CSS");
var nota2css = prompt ("Ingrese su segunda nota de CSS");
var nota3css = prompt ("Ingrese su tercera nota de CSS");
var nota1js = prompt ("Ingrese su primera nota de JavaScript");
var nota2js = prompt ("Ingrese su segunda nota de JavaScript");

//aqui estan las formular para el promedio
var promediohtml = (parseFloat(nota1html) + parseFloat(nota2html) + parseFloat(nota3html))/3;
var promediocss = (parseFloat(nota1css) + parseFloat(nota2css) + parseFloat (nota3css))/3;
var nota1y2js = (parseFloat(nota1js) + parseFloat(nota2js));
var notanecesaria = (12 - nota1y2js);

//inyeccion de js en html
document.getElementById("nombre").innerHTML = `Nombre: ${nombre}`;
document.getElementById("carrera").innerHTML = `Carrera: ${carrera}`;
document.getElementById("nota1-1").innerHTML = `${nota1html}`;
document.getElementById("nota2-1").innerHTML = `${nota2html}`;
document.getElementById("nota3-1").innerHTML = `${nota3html}`;
document.getElementById("nota1-2").innerHTML = `${nota1css}`;
document.getElementById("nota2-2").innerHTML = `${nota2css}`;
document.getElementById("nota3-2").innerHTML = `${nota3css}`;
document.getElementById("nota1-3").innerHTML = `${nota1js}`;
document.getElementById("nota2-3").innerHTML = `${nota2js}`;

//aplicacion de formula
document.getElementById("promediohtml").innerHTML = `${promediohtml.toFixed(1)}`;
document.getElementById("promediocss").innerHTML = `${promediocss.toFixed(1)}`;

//mensaje
if(notanecesaria<1){
    document.getElementById("mensaje").innerHTML = "Aunque tu ultima nota sea un 1 pasaras JavaScript."
}else if(notanecesaria>7){
    document.getElementById("mensaje").innerHTML = `Nececitarias un ${notanecesaria.toFixed(1)} para aprobar.`
}else{
    document.getElementById("mensaje").innerHTML = `Para aprobar el ramo JavaScript con nota 4, necesitas obtener un ${notanecesaria.toFixed(1)} en la nota 3.`
}