/*
EXERCÍCIO

Vamos escrever um programa que receba um número digitado no `prompt`

Então, se o número for múltiplos de 3 o console imprimirá a palavra **“Fizz”** .

Se for múltiplo de 5 mostraremos **“Buzz”**. 

Agora, se ele for múltiplo de 3 e 5 mostre **“FizzBuzz”**.
*/ 

// SOLUÇÃO 1
let resultado = "";

if (numero % 3 === 0) {
  resultado = "Fizz";
}

if (numero % 5 === 0) {
  // resultado = resultado + "Buzz"
  resultado += "Buzz";
}

if (resultado === "") {
  resultado = numero;
}

console.log(resultado);


// SOLUÇÃO 2
// if (numero % 3 === 0 && numero % 5 === 0) {
//   console.log("FizzBuzz");
// } else if (numero % 3 === 0) {
//   console.log("Fizz");
// } else if (numero % 5 === 0) {
//   console.log("Buzz");
// } else {
//   console.log(numero);
// }
