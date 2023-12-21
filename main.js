//importa função de jogo.js
import { jogadaOponente} from "./jogo.js";

//Identifica e define elementos
let dadoSorteado = document.querySelector('#Dado');
let dadoSorteadoOponente = document.querySelector('#DadoOponente');
export let numeroSorteado=0;
export let numeroSorteadoOponente=0;
export const bntJogar = document.querySelector('#btnJogar');
const imgDado = document.querySelector('#imgDado');
const imgDadoOponente = document.querySelector('#imgDadoOponente');
const JogarOponente = document.querySelector('.cOponente');
const sorteado = document.querySelector('#sorteado');
const sorteadoOponente = document.querySelector('#sorteadoOponente');

bntJogar.addEventListener('click', sortear);

//gera número aleatório
export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

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
        dadoSorteado = numeroSorteado;
        //numero sorteado aparece no console
        console.log(numeroSorteado);

        //mostra imagem com base no numero
        imgDado.setAttribute('src', 'imagens/'+numeroSorteado+'.png');

        //retira animacao
        imgDado.classList.remove('animar');
        imgDado.classList.remove('aparecer');

    }, 1750);

    JogarOponente.addEventListener('click',sortearOponente);
    
}

//Função dado do oponente
export function sortearOponente(){
    imgDadoOponente.classList.add('animar');
    sorteadoOponente.classList.add('aparecer');

    //executa as ações depois de determinado tempo
    setTimeout(function animacaoOponente() {
        //armazena numero sorteado
        numeroSorteadoOponente = getRandomInt(1,6);
        dadoSorteadoOponente = numeroSorteadoOponente;

        //numero sorteado aparece no console
        console.log(numeroSorteadoOponente);

        //mostra imagem com base no numero
        imgDadoOponente.setAttribute('src', 'imagens/'+numeroSorteadoOponente+'.png');

        //retira animacao
        imgDadoOponente.classList.remove('animar');
        imgDadoOponente.classList.remove('aparecer');
        
        //seleciona uma coluna aleatória e adiciona o número
        jogadaOponente();

         //exibe botao
        bntJogar.style.display = 'inline-block';
    }, 1750);

}



