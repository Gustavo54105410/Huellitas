const botonTerminosyCondiciones = document.querySelector('.container span');
const botonCerrar = document.querySelector('.boton-cerrar');
const ventanaEmergente = document.querySelector('.ventana-emergente');
const contenedorTotal = document.querySelector('.container');

botonTerminosyCondiciones.addEventListener('click', e => {
    ventanaEmergente.removeAttribute('hidden');
    contenedorTotal.style.opacity = 0.1;
});

botonCerrar.addEventListener('click', e => {
    ventanaEmergente.setAttribute('hidden','');
    contenedorTotal.style.opacity = 1;
});