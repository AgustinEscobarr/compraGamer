//tarea 1
var edad;
var nombre;
var validar;
//tarea 2
var arrayPositiveNumbers;
var persona;
//tarea 3
/*function superficieTriangulo(a:number,b:number){
    return a*b
}*/
var superficieTriangulo = function (a, b) { return a * b; };
function recibirFigura(figura, x) {
    (x >= 0 ? figura.superficie = x : alert("x es un valor negativo"));
    console.log(figura);
}
