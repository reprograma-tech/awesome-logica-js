/*
EXERCÍCIO

Crie uma função que receba um número qualquer devolva o seguinte padrão como resultado (inclusive com os espaços). Por exemplo, caso receba o número 5 como parâmetro:

    *
   **
  ***
 ****
*****


*/

//SOLUÇÃO 1

const query = require("synchronous-user-input"); // Dependência para pegar entradas
console.log("TRIÂNGULO DE ASTERISCOS");
const numero = query("Digite um número N: ");

function criaTextoComEspacos(numeroDeEspacos){
    let texto = "";
    for(let contador = 1; contador <= numeroDeEspacos; contador++){
        texto += " "; 
    }
    return texto;
}

let asteriscos = "";
for(let contador = 1; contador <= numero; contador++){
    textoEspacos = criaTextoComEspacos((numero-contador));
    asteriscos += "*";
    console.log(`${textoEspacos}${asteriscos}`);
}

// SOLUÇÃO 2

function construirPiramide(num) {
    const arr = new Array(num).fill(' ') // Cria um array de dimensão num e preenchido com um espaço em cada posição
    for (let i = 0; i < num; i++) {
        arr.shift() // Remove um espaço do início do array
        arr.push('*') // Adiciona um asterico no fim do array
        console.log(arr.join(''))  // Exibe o array como string      
    }   
}

construirPiramide(5)

