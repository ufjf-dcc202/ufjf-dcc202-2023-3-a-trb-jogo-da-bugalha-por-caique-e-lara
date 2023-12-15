//definir elementos importantes
let listaTorre1 = [];
let listaTorre2 = [];
let listaTorre3 = [];
let listaTorre1Oponente = [];
let listaTorre2Oponente = [];
let listaTorre3Oponente = [];

//retorna lista de acordo com id
export function getLista(id) {
    switch (id){
        case 'listaTorre1':
            return listaTorre1;
        case 'listaTorre2':
           return listaTorre2;
        case 'listaTorre3':
            return listaTorre3;
        case 1:
            return listaTorre1Oponente;
        case 2:
            return listaTorre2Oponente;
        case 3:
            return listaTorre3Oponente;
        default:
            console.error('ID torre inválido');
    }
}

//adiciona número na lista de acordo com id
export function adicionaNaLista(id, numero){
    const lista = getLista(id);

    if (lista){
       lista.push(numero);
    }
}
