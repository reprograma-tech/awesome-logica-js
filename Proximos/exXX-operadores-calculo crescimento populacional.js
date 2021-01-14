/*
EXERCÍCIO

Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3% e que a população de B seja 200000 habitantes com uma taxa de crescimento de 1.5%. 
Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.
*/

//SOLUÇÃO
//como a porcentagem se repete ao ano, cria-se uma potência com (1,03)

function calcula_crescimento(popInicial, taxaAnual, anos){
    return popInicial * (1 + taxaAnual)**anos
}

let anos = 1
let popA = calcula_crescimento(80000, 0.03, anos)
let popB = calcula_crescimento(200000, 0.015, anos)

 while(popA <= popB){
    anos++
    popA = calcula_crescimento(80000, 0.03, anos)
    popB = calcula_crescimento(200000, 0.015, anos)
} 

console.log(new Intl.NumberFormat().format(popA))
console.log(new Intl.NumberFormat().format(popB))
console.log(`O tempo é de ${anos} anos`)









