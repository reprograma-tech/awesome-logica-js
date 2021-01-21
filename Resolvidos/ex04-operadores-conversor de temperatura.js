/*
EXERCÍCIO 

Sabendo que a fórmula para converter as temperatura de graus célsius para Farenheit é : 9*Celsius/5 + 32 

Crie um algoritmo para fazer isso pra gente
*/

const celsius = Number(prompt("Digite a temperatura em Celsius:"));
const farenheit = (9 * celsius) / 5 + 32;

console.log(
  celsius + "° Celsius equivalem a " + farenheit.toFixed(2) + " ° Farenheit"
);


/*
EXERCÍCIO 

Agora vamos fazer o contrário ? Vamos converter de Farenheit para Celsius ?

Fórmula: (Farenheit − 32) × 5/9

*/

const farenheit = Number(prompt("Digite a temperatura em Farenheit:"));
const celsius = ((farenheit - 32) * 5) / 9;

console.log(
  farenheit + "° Farenheit equivalem a " + celsius.toFixed(2) + " ° Celsius"
);
