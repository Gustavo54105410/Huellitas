//Variables obtenidas para mejorar el front
const botonTerminosyCondiciones = document.querySelector('.container span');
const botonCerrar = document.querySelector('.boton-cerrar');
const ventanaEmergente = document.querySelector('.ventana-emergente');
const contenedorTotal = document.querySelector('.container');

//Variables obtenidas de los inputs para su validación
const inputNombre = document.querySelector('#nombre');
const inputAPaterno = document.querySelector('#apaterno');
const inputAMaterno = document.querySelector('#amaterno');
const inputCelular = document.querySelector('#celular');
const inputCorreo = document.querySelector('#correo');
const inputPassword = document.querySelector('#password');
const inputRepeatPassword = document.querySelector('#repeatPassword');

const spanNombre = document.querySelector('.span-nombre');
const spanAPaterno = document.querySelector('.span-apaterno');
const spanAMaterno = document.querySelector('.span-amaterno');
const spanCelular = document.querySelector('.span-celular');
const spanCorreo = document.querySelector('.span-correo');
const spanPassword = document.querySelector('.span-password');
const spanRepeatPassword = document.querySelector('.span-repeat-password');

botonTerminosyCondiciones.addEventListener('click', e => {
    ventanaEmergente.removeAttribute('hidden');
    contenedorTotal.style.opacity = 0.1;
});

botonCerrar.addEventListener('click', e => {
    ventanaEmergente.setAttribute('hidden','');
    contenedorTotal.style.opacity = 1;
});

inputNombre.addEventListener('blur', () => {
    validarNombreApellidos(inputNombre.value.trim().toLowerCase(), inputNombre, spanNombre);
});

inputAPaterno.addEventListener('blur', () => {
    validarNombreApellidos(inputAPaterno.value.trim().toLowerCase(), inputAPaterno, spanAPaterno);
});

inputAMaterno.addEventListener('blur', () => {
    validarNombreApellidos(inputAMaterno.value.trim().toLowerCase(), inputAMaterno, spanAMaterno);
});

inputCelular.addEventListener('blur', () => {
    validarCelular(inputCelular.value.trim(), inputCelular, spanCelular);
});

inputCorreo.addEventListener('blur', () => {
    validarCorreo(inputCorreo.value.trim().toLowerCase(), inputCorreo, spanCorreo);
});

//inputPassword.addEventListener('blur', () => {
//    validarPassword(inputPassword.value.trim(), inputPassword, spanPassword);
//});

function validarNombreApellidos(texto, input, span){
    if(texto === ''){
        invalidarCampoCSS(input, span);
        return;
    }

    if(texto.length < 3 || texto.length > 36){
        invalidarCampoCSS(input, span);
        return;
    }

    const letras = "abcdefghijklmnñopqrstuvwxyz ";

    for(let i = 0; i < texto.length; i++){
        if(!letras.includes(texto[i])){
            invalidarCampoCSS(input, span);
            return;
        }
    }

    validarCampoCSS(input, span);
}

function validarCelular(texto, input, span){
    const numeros = "1234567890";

    if(texto === ''){
        invalidarCampoCSS(input, span);
        return;
    }

    if(texto.length != 10){
        invalidarCampoCSS(input, span);
        return;
    }

    for(let i = 0; i < texto.length; i++){
        if(!numeros.includes(texto[i])){
            invalidarCampoCSS(input, span);
            return;
        }
    }

    validarCampoCSS(inputCelular, spanCelular);
}

function validarCorreo(texto, input, span){
    const exp = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/;

    if(!exp.test(texto)){
        invalidarCampoCSS(input, span);
        return;
    }

    validarCampoCSS(input, span);
}
/*
function validarPassword(texto, input, span){
    const mascara = '';
    const letrasMinusculas = 'abcdefghijklmnñopqrstuvwxyz';
    const letrasMayusculas = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    const numeros = '1234567890';
    const caracteresEspeciales = '!#$%&/=?¡;:_¿+-.,';
    let contadorMayusculas = 0;
    let contadorNumeros = 0;
    let contadorMinusculas = 0;
    let contadorEspeciales = 0;
    let textoAux = texto;

    if(texto.length < 8 || texto.length > 15){
        invalidarCampoCSS(input, span);
        console.log('length');
        return;
    }

    console.log(textoAux);
    for(let i = 0; i < textoAux.length; i++){
        if(letrasMinusculas.includes(textoAux[i])){
            contadorMinusculas += 1;
            textoAux = textoAux.split(textoAux[i]).join('');
            console.log(textoAux);
        }
        
    }

    console.log('-------' + textoAux);
    /*
    if(!letrasMayusculas.includes(texto[i])){
        invalidarCampoCSS(input, span);
        return;
    }
    if(!numeros.includes(texto[i])){
        invalidarCampoCSS(input, span);
        return;
    }
    if(!caracteresEspeciales.includes(texto[i])){
        invalidarCampoCSS(input, span);
        return;
    }
}*/

function invalidarCampoCSS(input, span){
    span.removeAttribute('hidden');
    span.classList.add('material-symbols-outlined');
    span.style.color = "red";
    input.style.borderBottom = "2px solid red";
}

function validarCampoCSS(input, span){
    span.style.color = "#000";
    span.classList.remove('material-symbols-outlined');
    span.setAttribute('hidden', '');
    input.style.borderBottom = "1px solid #000";
}