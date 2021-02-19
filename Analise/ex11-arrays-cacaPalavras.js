/*
EXERCÍCIO

Dado o array do jogo de caça-palavras abaixo, crie um programa que ache as palavras pedidas (do array palavras) e diga em qual linha e em qual coluna elas estão.

Ex: A palavra elefante está na linha 4 e começa na coluna 3.

*/

const cacaPalavras = [
    ["a", "w", "e", "r", "t", "y", "u", "u", "i", "r"],
    ["a", "w", "e", "r", "t", "y", "u", "u", "i", "r"],
    ["a", "w", "e", "r", "t", "y", "u", "u", "i", "r"],
    ["a", "w", "e", "l", "e", "f", "a", "n", "t", "e"],
    ["a", "w", "e", "r", "t", "y", "u", "u", "i", "r"],
    ["a", "w", "e", "r", "t", "y", "u", "u", "i", "r"],
    ["a", "w", "e", "r", "t", "y", "u", "u", "i", "r"],
    ["c", "a", "s", "a", "t", "y", "u", "u", "i", "r"],
    ["a", "w", "e", "r", "t", "y", "u", "u", "i", "r"],
    ["a", "w", "e", "r", "e", "d", "e", "u", "i", "r"],
    ["a", "w", "e", "r", "t", "y", "u", "u", "i", "r"]
]

const palavras = ["elefante", "casa", "rede"]

//SOLUÇÃO

for (let i = 0; i < cacaPalavras.length; i++) {
    cacaPalavras[i] = cacaPalavras[i].join("") // Em cada linha do array, junta as letras presentes

    for (let j = 0; j < palavras.length; j++) {
        if (cacaPalavras[i].indexOf(palavras[j]) > -1) {
            // O condicional verifica se alguma das palavras pedidas está na linha atual do array
            const linha = i + 1 //+1 porque o array começa em zero
            const coluna = cacaPalavras[i].indexOf(palavras[j]) + 1 //+1 porque o array começa em zero
            console.log(`A palavra ${palavras[j]} está na linha ${linha} e começa na coluna ${coluna}`)  // Imprime onde está a palavra achada
        }
    }
}