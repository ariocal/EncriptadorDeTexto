
/* KEYSSSSSSSSS
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

const textoEntrada = document.querySelector(".texto");
const textoSalida = document.querySelector(".mensaje_resultado")


function btnEncriptar(){
    const textoAEncriptar = encriptador(textoEntrada.value);
    textoSalida.value = textoAEncriptar;
}
function btnDesencriptar(){
    const textoADesencriptar = desencriptar(textoEntrada.value);
    textoSalida.value = textoADesencriptar;
}


/*PROCESO DE ENCRIPTADO*/
let keys1 = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat"
}
/*Funcion para encriptar*/
let encriptador = (texto) => {
    texto = texto.toLowerCase();
    /*Quitar espacios de los extremos y convertir un string en un array apartir de un separador*/
let arrayTexto = texto.trim().split('');
  let encriptadoArray = arrayTexto.map((letra,i) => {
        return keys1[letra]? keys1[letra] : letra;

   });
   return `${encriptadoArray.join("")}`;
}


/*PROCESO DE DESENCRIPTAR*/
let keys2 = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u"
};
/*Funcion para desencriptar*/
function desencriptar(texto){

    for(let clave in keys2){
        let clavesEncontradas = new RegExp(clave, 'g');
        texto = texto.replace(clavesEncontradas, keys2[clave])
    }
    return texto;
}
