const entradamensaje = document.querySelector("#entradamensaje");
const salidamensaje = document.querySelector("#salidamensaje");
var botonEncrip = document.querySelector("#encriptarb");
var botonDesencrip = document.querySelector("#desencriptarb")
var botoncopiar = document.querySelector("#botoncopiar");
var imagenbusqueda = document.querySelector("#imagenbusqueda");
var InfoNomensaje = document.querySelector(".InfoNomensaje");
var Infoindication = document.querySelector(".Infoindication");


salidamensaje.style = "display:none";
botoncopiar.style = "display:none";

function Encriptar(){

    let entonaciones = ["á","é","í","ó","ú"];
    var notieneacentos = true;
    for(let i = 0; i < entonaciones.length;i++){
        if(entradamensaje.value.includes(entonaciones[i])){
            notieneacentos = false;
        }
    }

    if(notieneacentos == true){
        salidamensaje.value = MensajeEncriptado(entradamensaje.value);
        entradamensaje.value = "";
        salidamensaje.style = "display:";
        botoncopiar.style = "display:";
        OcultarContenidos();
    }
    else{
        alert("No se permiten letras con acentos")
    }

}

function MensajeEncriptado(Mensaje){
    let codigoEncriptar = [["i","imes"],["e","enter"],["a","ai"],["o","ober"],["u","ufat"]];
    Mensaje = Mensaje.toLowerCase();

    for(let i = 0; i < 5; i++){
        if(Mensaje.includes(codigoEncriptar[i][0])){
            Mensaje = Mensaje.replaceAll(codigoEncriptar[i][0],codigoEncriptar[i][1]);
        }
    }

    return Mensaje
}

function Desencriptar(){
    salidamensaje.value = MensajeDesencriptado(entradamensaje.value);
    entradamensaje.value = "";
    salidamensaje.style = "display:";
    botoncopiar.style = "display:";
    OcultarContenidos();
}

function MensajeDesencriptado(Mensaje){
    let codigoEncriptar = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];
    Mensaje = Mensaje.toLowerCase();

    for(let i = 0; i < 5; i++){
        if(Mensaje.includes(codigoEncriptar[i][1])){
            Mensaje = Mensaje.replaceAll(codigoEncriptar[i][1],codigoEncriptar[i][0]);
        }
    }

    return Mensaje
}

function Copiar(){
    var textoacopiar = salidamensaje.value;
    navigator.clipboard.writeText(textoacopiar)
}


function Mostrartexto(){
    salidamensaje.classList.add("mostrarrmensaje");
}

function OcultarContenidos(){
    imagenbusqueda.classList.add("ocultarcontenidos");
    InfoNomensaje.classList.add("ocultarcontenidos");
    Infoindication.classList.add("ocultarcontenidos");
}

botonEncrip.onclick = Encriptar;
botonDesencrip.onclick = Desencriptar;
botoncopiar.onclick = Copiar;
  