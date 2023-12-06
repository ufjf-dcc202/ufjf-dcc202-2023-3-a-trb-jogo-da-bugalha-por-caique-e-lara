//Identificar elementos
let numeroSorteado = document.querySelector('#Dado');
const imgDado = document.querySelector('#imgDado');
const bntJogar = document.querySelector('#btnJogar');
const sorteado = document.querySelector('#sorteado');

bntJogar.addEventListener('click', sortear);

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