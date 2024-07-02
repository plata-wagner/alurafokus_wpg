const html = document.querySelector('html');
const btnFokus = document.querySelector('.app__card-button--enfoque');
const btnShort = document.querySelector('.app__card-button--corto');
const btnLarge = document.querySelector('.app__card-button--largo');
const banner = document.querySelector('.app__image');
const title = document.querySelector('.app__title');
const btns = document.querySelectorAll('.app__card-button');
const inputFocus = document.querySelector('#alternar-musica');
const music = new Audio('./sonidos/luna-rise-part-one.mp3');

music.loop= true;

inputFocus.addEventListener('change', ()=>{
    if(music.paused){
        music.play();        
    }
    else{
        music.pause();
    }
});

btnShort.addEventListener('click', () => {
    changeContext('descanso-corto');
    
});

btnFokus.addEventListener('click', () => {
    changeContext('enfoque');
});


btnLarge.addEventListener('click', () => {
    changeContext('descanso-largo');
});

function changeContext(context){
    btns.forEach(function(context){
        context.classList.remove('active');
    });

    html.setAttribute('data-contexto', context)
    banner.setAttribute('src', `./imagenes/${context}.png`)
    switch (context) {
        case 'enfoque':
            btnFokus.classList.add('active');
            title.innerHTML = `Optimiza tu productividad, <br>
                <strong class="app__title-strong">Sumergente en lo que importa.</strong>`;
            break;
        case 'descanso-corto':
            btnShort.classList.add('active');
            title.innerHTML = `que tal tomar un respiro <br> 
                <strong class="app__title-strong">Haz una pausa corta</strong>`;
            break;
        case 'descanso-largo':
            btnLarge.classList.add('active');
            title.innerHTML = `Hora de volver a la superficie
                <strong class="app__title-strong">Haz una pausa larga</strong>`;
                break;
        default:
            break;
    }
}