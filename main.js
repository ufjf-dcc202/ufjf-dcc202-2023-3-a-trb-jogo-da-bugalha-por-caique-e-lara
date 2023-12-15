//Identificar elementos
export let numeroSorteado = document.querySelector('#Dado');
export let numeroSorteadoOponente = document.querySelector('#DadoOponente');
const imgDado = document.querySelector('#imgDado');
const imgDadoOponente = document.querySelector('#imgDadoOponente');
const bntJogar = document.querySelector('#btnJogar');
const JogarOponente = document.querySelector('#cOponente');
const sorteado = document.querySelector('#sorteado');
const sorteadoOponente = document.querySelector('#sorteadoOponente');

bntJogar.addEventListener('click', sortear);
JogarOponente.addEventListener('click', sortearOponente);

//importa função jogo.js
import { jogadaOponente } from "./jogo.js";

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


//Função dado do oponente
function sortearOponente(){
    imgDadoOponente.classList.add('animar');
    sorteadoOponente.classList.add('aparecer');

    //executa as ações depois de determinado tempo
    setTimeout(function animacaoOponente() {
        //armazena numero sorteado
        numeroSorteadoOponente = getRandomInt(1,6);

        //numero sorteado aparece no console
        console.log(numeroSorteadoOponente);

        //mostra imagem com base no numero
        imgDadoOponente.setAttribute('src', 'imagens/'+numeroSorteadoOponente+'.png');

        //retira animacao
        imgDadoOponente.classList.remove('animar');
        imgDadoOponente.classList.remove('aparecer');
        
        //seleciona uma coluna aleatória e adiciona o número
        jogadaOponente();
    }, 1750);

}

/*
    // Variáveis para contar o número de jogadas
    let contadorJogador = 1;
    let contadorOponente = 1;

    // Adiciona um ouvinte de evento ao botão de jogar
    bntJogar.addEventListener('click', function () {
        // Sorteia o número para o jogador
        const numeroSorteadoJogador = sortear();
        
        // Adiciona o número à tabela para o jogador
        adicionarNaTabela('Jogador', numeroSorteadoJogador, contadorJogador);

        // Incrementa o contador para o próximo jogador
        contadorJogador++;

        // Sorteia o número para o oponente
        const numeroSorteadoOponente = sortearOponente();

        // Adiciona o número à tabela para o oponente
        adicionarNaTabela('Oponente', numeroSorteadoOponente, contadorOponente);

        // Incrementa o contador para o próximo oponente
        contadorOponente++;
    });

    // Função para adicionar uma linha à tabela
    function adicionarNaTabela(jogador, numeroSorteado, contador) {
        // Obtém a referência da tabela
        const tabela = document.getElementById('tabelaResultados');

        // Obtém a referência do corpo da tabela
        const tbody = tabela.getElementsByTagName('tbody')[0];

        // Cria uma nova linha
        const novaLinha = tbody.insertRow();

        // Cria células para a linha
        const celulaJogador = novaLinha.insertCell(0);
        const celulaNumeroSorteado = novaLinha.insertCell(1);
        const celulaContador = novaLinha.insertCell(2);

        // Adiciona os valores às células
        celulaJogador.innerHTML = jogador;
        celulaNumeroSorteado.innerHTML = numeroSorteado;
        celulaContador.innerHTML = contador;
    }

*/
