//importa elementos importantes
import { listaTorre1, listaTorre2, listaTorre3, listaTorreOponente1, listaTorreOponente2, listaTorreOponente3, getLista } from "./lista.js";
import { bntJogar } from "./main.js";


//identifica elementos
let ponto1 = document.querySelector('#ponto1');
let ponto2 = document.querySelector('#ponto2');
let ponto3 = document.querySelector('#ponto3');
let pontoOponente1 = document.querySelector('#pontoOponente1');
let pontoOponente2 = document.querySelector('#pontoOponente2');
let pontoOponente3 = document.querySelector('#pontoOponente3');



//função que verifica fim de jogo
export function verificarFimJogo(){
    const ponto1Valor = parseInt(ponto1.textContent) || 0;
    const ponto2Valor = parseInt(ponto2.textContent) || 0;
    const ponto3Valor = parseInt(ponto3.textContent) || 0;
    const pontoOponente1Valor = parseInt(pontoOponente1.textContent) || 0;
    const pontoOponente2Valor = parseInt(pontoOponente2.textContent) || 0;
    const pontoOponente3Valor = parseInt(pontoOponente3.textContent) || 0;
    //calcula pontuação final
    const pontoJogador= ponto1Valor+ponto2Valor+ponto3Valor;
    const pontoOponente= pontoOponente1Valor+pontoOponente2Valor+pontoOponente3Valor;

    if((listaTorre1.length===3 && listaTorre2.length===3 && listaTorre3.length===3) || (listaTorreOponente1.length===3 && listaTorreOponente2.length===3 && listaTorreOponente3.length===3)){
        //esconde botao jogar dado
        bntJogar.style.display = 'none';
        //cria elemento div com classe
        const mensagemfinal=document.createElement('div');
        mensagemfinal.className = 'final';

        if(pontoJogador>pontoOponente){
            
            //cria mensagem
            mensagemfinal.textContent=`Parabéns! Você é o vencedor. ${pontoJogador}-${pontoOponente}`;

            //add elemnto a página
            document.body.appendChild(mensagemfinal);
        }
        else {
            //cria mensagem
            mensagemfinal.textContent=`Infelizmente, você perdeu! ${pontoJogador}-${pontoOponente}`;

            //add elemnto a página
            document.body.appendChild(mensagemfinal);    
        }
    }
}

//função que retorna a coluna diante a lista
function getLabel(lista) {
    switch (lista){
        case listaTorre1:
            return ponto1;
        case listaTorre2:
           return ponto2;
        case listaTorre3:
            return ponto3;
        case listaTorreOponente1:
            return pontoOponente1;
        case listaTorreOponente2:
            return pontoOponente2;
        case listaTorreOponente3:
            return pontoOponente3;
    }
}

export function calcularPontuacao(torre) {
    const lista = getLista(torre);
    const coluna = getLabel(lista);
    const quantidade={};
    let pontuacao = 0;
    // Verifica a quantidade de vezes que o número aparece
    for (let i = 0; i < lista.length; i++) {
        let num = lista[i];
        quantidade[num] = (quantidade[num] || 0) + 1;
    }

    // Calcula pontos de acordo com a quantidade de vezes que o número aparece
    for (let i = 0; i < lista.length; i++) {
        let num = lista[i];
        pontuacao += num * quantidade[num];
    }

// Atualiza o texto do com a pontuação
    coluna.textContent = pontuacao;
}