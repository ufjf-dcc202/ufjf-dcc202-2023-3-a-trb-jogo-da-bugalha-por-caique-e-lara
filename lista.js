//definir elementos importantes
let listaTorre1 = [];
let listaTorre2 = [];
let listaTorre3 = [];
let listaTorreOponente1 = [];
let listaTorreOponente2 = [];
let listaTorreOponente3 = [];

//retorna lista de acordo com id
export function getLista(id) {
    switch (id){
        case 'listaTorre1':
            return listaTorre1;
        case 'listaTorre2':
           return listaTorre2;
        case 'listaTorre3':
            return listaTorre3;
        case 'listaTorreOponente1':
            return listaTorreOponente1;
        case 'listaTorreOponente2':
            return listaTorreOponente2;
        case 'listaTorreOponente3':
            return listaTorreOponente3;
    }
}

//retorna a lista a ser verificada tendo como parâmetro a lista recebida
function getListaVerificar(id) {
    switch (id){
        case 'listaTorre1':
            return listaTorreOponente1;
        case 'listaTorre2':
           return listaTorreOponente2;
        case 'listaTorre3':
            return listaTorreOponente3;
        case 'listaTorreOponente1':
            return listaTorre1;
        case 'listaTorreOponente2':
            return listaTorre2;
        case 'listaTorreOponente3':
            return listaTorre3;
    }
}


//adiciona número na lista de acordo com id
export function adicionaNaLista(id, numero){
    const lista = getLista(id);
    if (lista && lista.length<3){
       lista.push(numero);
    }
}

 //atualiza os numeros da lista correspondente
 export function atualizarItensDeLista(torre) {
     const olElement = document.getElementById(torre); // Referenciar o elemento <ol> pelo ID

     if(olElement){
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
    }
}


export function verificaIgualdade(torre, numero) {

    const lista = getLista(torre);
    const listaVerificar = getListaVerificar(torre);
    console.log(listaVerificar);

    // verifica se ambas as listas existem
   if (lista && listaVerificar) {
        // percorre listas e remove núm igual
        for (let i = lista.length-1; i < lista.length && i < listaVerificar.length; i--) {
            if (lista[i] === numero || listaVerificar[i] === numero) {
                listaVerificar.splice(i,numero);
            }
        }
    }

   // atualizarItensDeLista(listaVerificar);
    console.log(listaVerificar);
}