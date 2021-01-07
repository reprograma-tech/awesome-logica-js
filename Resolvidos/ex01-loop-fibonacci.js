/*
EXERCÍCIO

A seqüência de Fibonacci é a seguinte: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ... 
Sua regra de formação é simples: os dois primeiros elementos são 1; a partir de então, cada elemento é a soma dos dois anteriores. 
Faça um algoritmo que leia um número inteiro calcule o seu número de Fibonacci. F1 = 1, F2 = 1, F3 = 2, etc.
*/

// SOLUÇÃO 1
let fb = 1 // Variável guarda o número de fibonacci atual
const posicao = 6 // Representa a posição recebida (número inteito digitado pelo usuário)

// Verifica se a posição dada é inválida (não está entre 1 e infinito)
if(posicao <= 0){
    console.log('Digite um número maior que zero.')

}else if(posicao == 1 || posicao == 2){
    fb = 1 // Os números de Fibonacci nas posições 1 e 2 são iguais a 1

}else{

    // Entra aqui se a posição dada é entre 3 e infinito
    let penultimo = 1 // Número de Fibonacci na posição 1
    let ultimo = 1 // Número de Fibonacci na posição 2

    for(let i = 3; i <= posicao; i++){
        fb = penultimo + ultimo // O número de Fibonacci nesta posição é a soma do número de 
        // fibonacci da posição anterior com o número de fibonacci da segunda posição anterior

        penultimo = ultimo // Para a próxima posição, o penúltimo será o último atual

        ultimo = fb // Para a próxima posição, o último será o número de Fibonacci desta posição
    }
    
}

console.log('Fibonacci: ' + fb)



// SOLUÇÃO 2
// const prompt = require('prompt-sync')(); //Usamos esse módulo para permitir capturar informações digitadas pelo usuário no node
 
// const posicaoString = prompt('Digite um número inteiro correspondente à posição desejada na sequência de Fibonacci: '); // Apresentamos uma mensagem na tela e capturamos o valor digitado

// const posicao = parseInt(posicaoString); // Representa a posição recebida. Como o prompt retorna sempre uma string, convertemos esse valor para um número inteiro.Assim deixamos nosso código mais dinâmico

// const arrFb = [0, 1, 1]; // A sequência de Fibonacci começa em 1, que fica na posição 1 do array.
// // O zero na posição zero pode e deve ser ignorado.

// // Laço para calcular os próximos números de Fibonacci se a posição dada for maior ou igual a 3
// // Os números de Fibonacci da posição 1 e 2 já foram definidos na inicialização do array.
// for (let i = 3; i <= posicao; i++) {

//     const fb = arrFb[i-1] + arrFb[i-2]; // O número de Fibonacci é soma os dois anteriores
//     arrFb.push(fb); // Adiciona o número de Fibonacci na posição certa
// }

// console.log('Fibonacci: ' + (arrFb[posicao] ? arrFb[posicao] : 'Não encontrei. Tente outra posição')); // Comando ternário: demonstra o número de Fibonacci ou mostra mensagem de erro caso seja digitado um número menor que zero.