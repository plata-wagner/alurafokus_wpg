// const html = document.querySelector('html');
// const btnFokus = document.querySelector('.app__card-button--enfoque');
// const btnShort = document.querySelector('.app__card-button--corto');
// const btnLarge = document.querySelector('.app__card-button--largo');
// const banner = document.querySelector('.app__image');
// const title = document.querySelector('.app__title');
// const btns = document.querySelectorAll('.app__card-button');
// const inputFocus = document.querySelector('#alternar-musica');
// const btnStartPause = document.querySelector('#start-pause');
// const txtStartPause = document.querySelector('#start-pause span');
// const iconStart = document.querySelector('.app__card-primary-butto-icon');
// const timeScreen = document.querySelector('#timer');

// const music = new Audio('./sonidos/luna-rise-part-one.mp3');
// const audioPlay = new Audio('./sonidos/play.wav');
// const audioPausa = new Audio('./sonidos/pause.mp3');
// const audioEndTime = new Audio('./sonidos/beep.mp3');

// let timeSeconds = 1500;
// let intervalId = null;

// music.loop= true;

// inputFocus.addEventListener('change', ()=>{
//     if(music.paused){
//         music.play();        
//     }
//     else{
//         music.pause();
//     }
// });

// btnShort.addEventListener('click', () => {
//     changeContext('descanso-corto');
    
// });

// btnFokus.addEventListener('click', () => {
//     changeContext('enfoque');
// });


// btnLarge.addEventListener('click', () => {
//     changeContext('descanso-largo');
// });

// function changeContext(context){
//     btns.forEach(function(context){
//         context.classList.remove('active');
//     });

//     html.setAttribute('data-contexto', context)
//     banner.setAttribute('src', `./imagenes/${context}.png`)
//     switch (context) {
//         case 'enfoque':
//             timeSeconds = 1500;
//             btnFokus.classList.add('active');
//             title.innerHTML = `Optimiza tu productividad, <br>
//                 <strong class="app__title-strong">Sumergente en lo que importa.</strong>`;
//             break;
//         case 'descanso-corto':
//             timeSeconds = 300;
//             btnShort.classList.add('active');
//             title.innerHTML = `que tal tomar un respiro <br> 
//                 <strong class="app__title-strong">Haz una pausa corta</strong>`;
//             break;
//         case 'descanso-largo':
//             timeSeconds = 900;
//             btnLarge.classList.add('active');
//             title.innerHTML = `Hora de volver a la superficie
//                 <strong class="app__title-strong">Haz una pausa larga</strong>`;
//                 break;
//         default:
//             break;
//     }
// }

// const countDown =  () =>{
//     if(timeSeconds <= 0){
//         audioEndTime.play();
//         alert('tiempo final');
//         restart();
//         return;
//     }
    
//     timeSeconds -= 1;   
//     showTime();    
    
// }

// btnStartPause.addEventListener('click', startPause);

// function startPause(){
//     if (intervalId){
//         audioPausa.play();
//         restart();
//         return;
//     }
//     audioPlay.play();
//     intervalId = setInterval(countDown, 1000);
//     txtStartPause.textContent = "Pausar";
//     iconStart.setAttribute('src', '/imagenes/pause.png');
// }
// function restart(){
//     clearInterval(intervalId);
//     txtStartPause.textContent = "Comenzar";
//     iconStart.setAttribute('src', '/imagenes/play_arrow.png');
//     idIntervalo = null;
// }

// function showTime(){
//     const tiempo = new Date(timeSeconds * 1000);
//     const tiempoFormateado = tiempo.toLocaleTimeString('es-ES', {minute:'2-digit',second:'2-digit'});
//     timeScreen.innerHTML = `${tiempoFormateado}`;
// }
// showTime();

const html = document.querySelector('html');
const botonEnfoque = document.querySelector('.app__card-button--enfoque');
const botonCorto = document.querySelector('.app__card-button--corto');
const botonLargo = document.querySelector('.app__card-button--largo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botones = document.querySelectorAll('.app__card-button');
const botonIniciarPausar = document.querySelector('#start-pause');
const inputMusicaEnfoque = document.querySelector('#alternar-musica');
const textoIniciarPausar = document.querySelector('#start-pause span');
const iconoIniciarPausar = document.querySelector(".app__card-primary-butto-icon");
const tiempoEnPantalla = document.querySelector('#timer');

const musica = new Audio('./sonidos/luna-rise-part-one.mp3');
const audioPlay = new Audio('./sonidos/play.wav');
const audioPausa = new Audio('./sonidos/pause.mp3');
const audioTiempoFinalizado = new Audio('./sonidos/beep.mp3');

let tiempoTranscurridoEnSegundos = 1500;
let idIntervalo = null;

musica.loop = true;

inputMusicaEnfoque.addEventListener('change', () => {
    if(musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
});

botonEnfoque.addEventListener('click', () => {
    tiempoTranscurridoEnSegundos = 1500;
    cambiarContexto('enfoque');
    botonEnfoque.classList.add('active');
});

botonCorto.addEventListener('click', () => {
    tiempoTranscurridoEnSegundos = 300;
    cambiarContexto('descanso-corto');
    botonCorto.classList.add('active');
});

botonLargo.addEventListener('click', () => {
    tiempoTranscurridoEnSegundos = 900;
    cambiarContexto('descanso-largo');
    botonLargo.classList.add('active');
});

function cambiarContexto(contexto) {
    mostrarTiempo();
    botones.forEach(function (botonContexto){
        botonContexto.classList.remove('active');
    });
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `/imagenes/${contexto}.png`);
    switch (contexto) {
        case "enfoque":
            titulo.innerHTML = `
            Optimiza tu productividad,<br>
                <strong class="app__title-strong">sumérgete en lo que importa.</strong>
            `;
            break;
        case "descanso-corto":
            titulo.innerHTML = `
            ¿Qué tal tomar un respiro? <strong class="app__title-strong">¡Haz una pausa corta!</strong>
            `;
            break;
        case "descanso-largo":
            titulo.innerHTML = `
            Hora de volver a la superficie.<strong class="app__title-strong"> Haz una pausa larga.</strong>
            `;
            break;
        default:
            break;
    }
}

const cuentaRegresiva = () => {
    if(tiempoTranscurridoEnSegundos <= 0){
        audioTiempoFinalizado.play();
        alert('¡Tiempo finalizado!');
        reiniciar();
        return;
    }
    tiempoTranscurridoEnSegundos -= 1;
    mostrarTiempo();
};

botonIniciarPausar.addEventListener('click', iniciarOpausar);

function iniciarOpausar() {
    if(idIntervalo){
        audioPausa.play();
        reiniciar();
        return;
    }
    audioPlay.play();
    idIntervalo = setInterval(cuentaRegresiva, 1000);
    textoIniciarPausar.textContent = "Pausar";
    iconoIniciarPausar.setAttribute('src', `/imagenes/pause.png`);
}

function reiniciar() {
    clearInterval(idIntervalo); 
    textoIniciarPausar.textContent = "Comenzar";
    iconoIniciarPausar.setAttribute('src', `/imagenes/play_arrow.png`);
    idIntervalo = null;
}

function mostrarTiempo() {
    const tiempo = new Date(tiempoTranscurridoEnSegundos * 1000);
    const tiempoFormateado = tiempo.toLocaleTimeString('es-ES', {minute: '2-digit', second: '2-digit'});
    tiempoEnPantalla.innerHTML = `${tiempoFormateado}`;
}

mostrarTiempo();
