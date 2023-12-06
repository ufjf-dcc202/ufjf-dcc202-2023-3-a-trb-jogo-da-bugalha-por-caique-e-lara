//Identificar elementos
let numeroSorteado = document.querySelector('#Dado');
let numeroSorteadoOponente = document.querySelector('#DadoOponente');
const imgDado = document.querySelector('#imgDado');
const imgDadoOponente = document.querySelector('#imgDadoOponente');
const bntJogar = document.querySelector('#btnJogar');
const sorteado = document.querySelector('#sorteado');
const sorteadoOponente = document.querySelector('#sorteadoOponente');

bntJogar.addEventListener('click', sortear);

//Função do dado
function sortear() {
    //animacao
    imgDado.classList.add('animar');
    sorteado.classList.add('aparecer');
    //esconde botao
    bntJogar.style.display = 'none';

    //executa as ações depois de determinado tempo
    setTimeout(function animacao() {
        //armazena numero sorteado
        numeroSorteado = getRandomInt(1,6);
        //numero sorteado aparece no console
        console.log(numeroSorteado);

        //mostra imagem com base no numero
        imgDado.setAttribute('src', 'imagens/'+numeroSorteado+'.png');

        //exibe botao
        bntJogar.style.display = 'inline-block';

        //retira animacao
        imgDado.classList.remove('animar');
        imgDado.classList.remove('aparecer');
        
    }, 1750);

}

function getRandomInt(min, max) {
    //arredonda para cima 
    min = Math.ceil(min);
    //arredonda para baixo
    max = Math.floor(max);

    return Math.floor(Math.random()*(max - min + 1)) + min;
}

//Função de seleção para onde o dado vai
function jogar(celulas){
    if(celulas.innerHTML ==""){
        celulas.innerHTML = numeroSorteado;
    }
    else{
        dado();
    }
}

//Função dado do oponente

function dado(){
    imgDadoOponente.classList.add('animar');
    sorteadoOponente.classList.add('aparecer');

    //executa as ações depois de determinado tempo
    setTimeout(function animacao() {
        //armazena numero sorteado
        numeroSorteadoOponente = getRandomInt(1,6);

        //numero sorteado aparece no console
        console.log(numeroSorteadoOponente);

        //mostra imagem com base no numero
        imgDadoOponente.setAttribute('src', 'imagens/'+numeroSorteadoOponente+'.png');

        //retira animacao
        imgDadoOponente.classList.remove('animar');
        imgDadoOponente.classList.remove('aparecer');
        
    }, 1750);
}