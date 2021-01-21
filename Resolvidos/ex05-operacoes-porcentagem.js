/*
Faça um programa que calcule o aumento de um salário. Ele deve solicitar o valor do salário e a porcentagem do aumento. Exiba o valor do aumento e do novo salário.

*/

// SOLUÇÃO 1


/* const salario = 1000
const porcentagem = 0.3

const aumento = salario * porcentagem
const novoSalario = salario + aumento

console.log("Valor do aumento: "+ aumento)
console.log("Novo salário: " + novoSalario) */



// SOLUÇÃO 2

// Módulo para pedir valores ao usuário
const prompt = require('prompt-sync')()

const salario = prompt("Digite seu salário: ")
const porcentagem = prompt("Digite a porcentagem do aumento: ")

function calcularAumento(salario, porcentagem) {
    return salario * porcentagem
}

const aumento = calcularAumento(salario, porcentagem)

console.log("Valor do aumento: " + aumento.toFixed(2))

function calcularNovoSalario(salario, aumento) {
    // O Number transforma a string do prompt a se tornar número
    return Number(salario) + Number(aumento)
}

console.log("Novo salário: " + calcularNovoSalario(salario, aumento).toFixed(2))



