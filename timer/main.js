function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

//console.log(criaHoraDosSegundos(10));

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos)
    }, 1000);
}

document.addEventListener('click', function(e) {  //serve para fazer os eventlist abaixo quando há muitos botões
    const el = e.target;
    //console.log(e.target);  //aparece o elemento que eu clico no console

    if (el.classList.contains('zerar')) {  //apos clicar no elemento com a classe 'zerar' acontece isso abaixo
        console.log('Você clicou em zerar')
    }
});

iniciar.addEventListener('click', function(event) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
});

pausar.addEventListener('click', function(event) {
    relogio.classList.add('pausado')
    clearInterval(timer);
});

zerar.addEventListener('click', function(event) {  //posso pegar tudo desse function e mover para o if do el.classlist.contains('zerar')
    relogio.classList.remove('pausado');
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
});