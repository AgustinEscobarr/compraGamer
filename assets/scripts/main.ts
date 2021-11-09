//tarea 1
let edad:number;
let nombre:string;
let validar:boolean;
//tarea 2
let arrayPositiveNumbers:[number]
let persona:[{
    nombre:string,
    apellido:string,
    edad:string|number
}]

//tarea 3
/*function superficieTriangulo(a:number,b:number){
    return a*b
}*/
const superficieTriangulo=(a:number,b:number)=>{return a*b};

function recibirFigura(figura:{base:number,altura:number,superficie?:number},x:number){
    (x>=0 ? figura.superficie=x :alert("x es un valor negativo"));
    console.log(figura);
}
