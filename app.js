
/* KEYSSSSSSSSS
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

const textoEntrada = document.querySelector(".texto");
const textoSalida = document.querySelector(".mensaje_resultado")
const containerError = document.querySelector(".container_error")
const bontonCopiar = document.querySelector(".boton_copiar")
const containerMensajeResultado = document.querySelector(".container_mensajeresultado")
const candadoCerrado = document.querySelector(".cerrado")
const candadoAbierto = document.querySelector(".abierto")
containerError.style.display = "none";

function btnEncriptar(){
    if(textoEntrada.value){
        const textoAEncriptar = encriptador(textoEntrada.value);
        containerError.style.display = "none";
        textoSalida.value = textoAEncriptar;
        textoEntrada.value = '';
        bontonCopiar.style.display = "block";
        containerMensajeResultado.style.backgroundImage = "none";
        containerMensajeResultado.style.boxShadow = '0 10px 20px rgba(97, 150, 249, 0.3), 0 2px 4px rgba(0, 0, 0, 0.1)';
        candadoCerrado.classList.add('activo')
                setTimeout( 
                    () =>{
                        candadoCerrado.classList.remove('activo')
                    },1500
                )
    }else{
       containerError.style.display = "block";
       textoSalida.value = '';
       bontonCopiar.style.display = "none";
       containerMensajeResultado.style.backgroundImage = "none";
       containerMensajeResultado.style.boxShadow = '0 10px 20px rgba(97, 150, 249, 0.3), 0 2px 4px rgba(0, 0, 0, 0.1)';
    }
    
}
function btnDesencriptar(){
    if(textoEntrada.value){
        const textoADesencriptar = desencriptar(textoEntrada.value);
        containerError.style.display = "none"
        textoSalida.value = textoADesencriptar;
        textoEntrada.value = '';
        bontonCopiar.style.display = "block";
        containerMensajeResultado.style.backgroundImage = "none";
        containerMensajeResultado.style.boxShadow = '0 10px 20px rgba(97, 150, 249, 0.3), 0 2px 4px rgba(0, 0, 0, 0.1)';
        candadoAbierto.classList.add('activo')
                setTimeout( 
                    () =>{
                        candadoAbierto.classList.remove('activo')
                    },1500
                )
    }else{
        containerError.style.display = "block";
        textoSalida.value = '';
        bontonCopiar.style.display = "none";
        containerMensajeResultado.style.backgroundImage = "none";
        containerMensajeResultado.style.boxShadow = '0 10px 20px rgba(97, 150, 249, 0.3), 0 2px 4px rgba(0, 0, 0, 0.1)';
     } 
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

const mensajeConfirmacion = document.querySelector('.mensajeConfirmacion');
/*BOTON COPIAR*/
function copiarTexto() {
    const textoCopiado = textoSalida.value.trim();

    if (textoCopiado) {
        navigator.clipboard.writeText(textoCopiado)
            .then(() => {
                mensajeConfirmacion.classList.add('activado')
                setTimeout( 
                    () =>{
                        mensajeConfirmacion.classList.remove('activado')
                    },2150
                )
            })
            .catch((err) => {
                console.error('Error al copiar el texto: ', err);
            });
    }
}



