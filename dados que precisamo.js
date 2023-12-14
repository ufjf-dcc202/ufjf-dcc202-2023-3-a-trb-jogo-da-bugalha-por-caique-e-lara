 /* Variável de controle para garantir que a rolagem ocorra apenas uma vez
 let primeiraRolagem = true;

 document.addEventListener('DOMContentLoaded', function () {
     document.getElementById('btnJogar').addEventListener('click', function () {
         // Verifica se é a primeira rolagem
         if (primeiraRolagem) {
             // Chama a função sortearOponente
             sortearOponente();

         }
     });
 });*/