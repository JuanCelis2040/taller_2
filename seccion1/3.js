let ele = Number(prompt("ingrese el valor del producto"));
let r = prompt("¿Desea pagarlo a credito?");
let t=(ele*0.25)+ele;
let c=t/12;
if(r=="si"){
    console.log("El valor del producto es:",t,"y tiene 12 meses de credito"),
    console.log("El valor fijo de cada cuota es de",c);
}else{
    console.log("El valor total a pagar es de",ele);
}