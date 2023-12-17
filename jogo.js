//lista.js

import {adicionaNaLista, atualizarItensDeLista, getLista, getListaVerificar, verificaIgualdade} from "./lista.js";
import { getRandomInt, numeroSorteado, numeroSorteadoOponente } from "./main.js";

//definir elementos importantes
const torre1 = document.querySelector('#listaTorre1');
const torre2 = document.querySelector('#listaTorre2');
const torre3 = document.querySelector('#listaTorre3');

torre1.addEventListener('click', criaElementoNaLista);
torre2.addEventListener('click', criaElementoNaLista);
torre3.addEventListener('click', criaElementoNaLista);

 function verificarFimJogo(){
    if(cont1 === 3 && cont2 === 3 && cont3 === 3){
            return cont1 >= 3 && cont2 >= 3 && cont3 >= 3;
    }
   
}

//adiciona numero sorteado na lista
export function criaElementoNaLista(event) {
    
    let torreClick = event.currentTarget;

    //verifica se o clique foi apenas na torre do jogador
    if(torreClick === torre1 || torreClick === torre2 || torreClick=== torre3){
        let torre = event.target.id;
        console.log(torre);
        adicionaNaLista(torre, numeroSorteado);
        atualizarItensDeLista(torre);
    }
}

export function jogadaOponente(){
    let torre = getRandomInt(1,3);
    let torreOponente = 'listaTorreOponente' + torre;

    console.log(torreOponente);

    const listaOponente = getLista(torreOponente);

    //verifica se a coluna está incompleta, caso não, adiciona o número, caso sim sorteia de novo
    if(listaOponente && listaOponente.length<3){
        listaOponente.push(numeroSorteadoOponente);

        const olElement = document.getElementById(torreOponente); // Referenciar o elemento <ol> pelo ID
        olElement.innerHTML = ""; // Limpar o conteúdo interno do elemento <ol>

        //adiciona novo nnúmero na lista
        for(let i=0; i<3;i++){
            const item = listaOponente[i];
            const li = document.createElement('li');
            li.textContent = item;
            olElement.appendChild(li);
        }
    }
    else{
        jogadaOponente();
    }
    
    verificaIgualdade(torreOponente, numeroSorteadoOponente);
    atualizarItensDeLista(getListaVerificar(listaOponente));
}


function calcularPontuacao(torre) {
    const lista = getLista(torre);
    //const valorDado = numeroSorteado;
    let pontuacao = 0;

    for (let i = 1; i <= 6; i++) {
        const quantidade = lista.filter(item => item === i).length;
        pontuacao += i * quantidade;
    }
    const elementoPontuacaoJogador = document.getElementById('pontuacaoJogador');
    elementoPontuacaoJogador.textContent = pontuacao;
    return elementoPontuacaoJogador.textContent;
}
