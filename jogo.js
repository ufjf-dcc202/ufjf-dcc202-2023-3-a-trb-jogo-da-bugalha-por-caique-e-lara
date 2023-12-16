//lista.js
import {adicionaNaLista, getLista} from "./lista.js";
import { getRandomInt, numeroSorteado, numeroSorteadoOponente } from "./main.js";

//definir elementos importantes
const torre1 = document.querySelector('#listaTorre1');
const torre2 = document.querySelector('#listaTorre2');
const torre3 = document.querySelector('#listaTorre3');
let cont1=0;
let cont2=0;
let cont3=0;

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


//atualiza os numeros da lista correspondente
function atualizarItensDeLista(torre) {
    const olElement = document.querySelector('#'+torre); // Referenciar o elemento <ol> pelo ID
    olElement.innerHTML = ""; // Limpar o conteúdo interno do elemento <ol>
    const lista = getLista(torre);

    if (lista && lista.length > 0) {
        for(let i=0; i<3;i++){
            const item = lista[i];
            const li = document.createElement('li');
            li.textContent = item;
            olElement.appendChild(li);
        }
    }
    calcularPontuacao();
    console.log(calcularPontuacao);
    verificarFimJogo();
}



function calcularPontuacao(torre) {
    const lista = getLista(torre);
    const valorDado = numeroSorteado;
    let pontuacao = 0;

    for (let i = 1; i <= 6; i++) {
        const quantidade = lista.filter(item => item === i).length;
        pontuacao += i * quantidade;
    }
    const elementoPontuacaoJogador = document.getElementById('pontuacaoJogador');
    elementoPontuacaoJogador.textContent = pontuacao;

}

export function jogadaOponente(){
    let torreOponente = getRandomInt(1,3);

    //verifica se a coluna já foi seelcionada 3 vezes
    do {
        torreOponente = getRandomInt(1,3);
        if (torreOponente==1 && cont1 < 3) {
            cont1++;
        }
        else if (torreOponente==2 && cont2 < 3) {
            cont2++;
        }
        else if (torreOponente==3 && cont3 < 3) {
            cont3++;
        }
        
    } while (cont1>=3 || cont2 >=3 || cont3 >=3);

    console.log(torreOponente);

    const listaOponente = getLista(torreOponente);

    if (listaOponente){
        listaOponente.push(numeroSorteadoOponente);
    }

    const olElement = document.querySelector('#listaTorreOponente'+torreOponente); // Referenciar o elemento <ol> pelo ID
    olElement.innerHTML = ""; // Limpar o conteúdo interno do elemento <ol>

    if (listaOponente && listaOponente.length > 0) {
        for(let i=0; i<3;i++){
            const item = listaOponente[i];
            const li = document.createElement('li');
            li.textContent = item;
            olElement.appendChild(li);
        }
    }
    calcularPontuacao();
    console.log(calcularPontuacao);
    verificarFimJogo();
}