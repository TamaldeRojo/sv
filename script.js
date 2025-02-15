// Contraseña aniversario elsy mari 
const CONTRASENA = "3003";

let contrasenaIngresada = "";

mostrarContador();

function ocultarTodasLasSecciones() {
    const secciones = [
        document.querySelector('.container'),
        document.getElementById('seccion-contador'),
        document.getElementById('seccion-galeria'),
        document.getElementById('seccion-carta')
    ];
    
    secciones.forEach(seccion => {
        if (seccion) {
            seccion.style.display = 'none';
        }
    });
}


function mostrarContador() {
    ocultarTodasLasSecciones();
    const seccionContador = document.getElementById('seccion-contador');
    seccionContador.style.display = 'block';
}

function mostrarGaleria() {
    ocultarTodasLasSecciones();
    const seccionGaleria = document.getElementById('seccion-galeria');
    seccionGaleria.style.display = 'block';
}


function mostrarCarta() {
    ocultarTodasLasSecciones();
    const seccionCarta = document.getElementById('seccion-carta');
    seccionCarta.style.display = 'block';
}

function actualizarContador() {
    const fechaInicio = new Date('2024-03-30');
    const ahora = new Date();

    let anos = ahora.getFullYear() - fechaInicio.getFullYear();
    let meses = ahora.getMonth() - fechaInicio.getMonth();
    let dias = ahora.getDate() - fechaInicio.getDate();
    let horas = ahora.getHours() - fechaInicio.getHours();
    let minutos = ahora.getMinutes() - fechaInicio.getMinutes();
    let segundos = ahora.getSeconds() - fechaInicio.getSeconds();

    if (dias < 0) {
        meses--;
        const ultimoDiaMesAnterior = new Date(ahora.getFullYear(), ahora.getMonth(), 0).getDate();
        dias += ultimoDiaMesAnterior;
    }

    if (meses < 0) {
        anos--;
        meses += 12;
    }

    if (anos < 0) anos = 0;
    if (meses < 0) meses = 0;
    if (dias < 0) dias = 0;
    if (horas < 0) horas = 0;
    if (minutos < 0) minutos = 0;
    if (segundos < 0) segundos = 0;

    document.getElementById('anos').textContent = anos;
    document.getElementById('meses').textContent = meses;
    document.getElementById('dias').textContent = dias;
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;
}

setInterval(actualizarContador, 1000);

