const html = document.querySelector('html');
const btnFokus = document.querySelector('.app__card-button--enfoque');
const btnShort = document.querySelector('.app__card-button--corto');
const btnLarge = document.querySelector('.app__card-button--largo');

btnShort.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-corto')
});

btnFokus.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'enfoque')
});


btnLarge.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-largo')
});