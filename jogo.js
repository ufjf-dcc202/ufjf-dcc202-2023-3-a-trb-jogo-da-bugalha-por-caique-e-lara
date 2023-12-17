//identifica elementos importantes
const torre1 = document.querySelector('#listaTorre1');
const torre2 = document.querySelector('#listaTorre2');
const torre3 = document.querySelector('#listaTorre3');

torre1.addEventListener('click', criaElementoNaLista);
torre2.addEventListener('click', criaElementoNaLista);
torre3.addEventListener('click', criaElementoNaLista);

//importa funções
import {adicionaNaLista, atualizarItensDeLista, getLista, getListaVerificar, verificarIgualdade} from "./lista.js";
import { getRandomInt, numeroSorteado, numeroSorteadoOponente } from "./main.js";
import { calcularPontuacao } from "./pontos.js";

//adiciona numero sorteado na lista
export function criaElementoNaLista(event) {
    
    let torreClick = event.currentTarget;

    //verifica se o clique foi apenas na torre do jogador
    if(torreClick === torre1 || torreClick === torre2 || torreClick=== torre3){
        let torre = event.target.id;
        console.log(torre);
        adicionaNaLista(torre, numeroSorteado);
        atualizarItensDeLista(torre);
        calcularPontuacao(torre);
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

        //adiciona novo número na lista
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
    
    verificarIgualdade(torreOponente, numeroSorteadoOponente);
    calcularPontuacao(torreOponente);
    atualizarItensDeLista(getListaVerificar(listaOponente));
}