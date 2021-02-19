/*
EXERCÍCIO:

Retorne o valor mais alto das somas entre o total de valors por linha, de uma array 4x4.
const arr4x4 = [[23, 56, 9, 0], 
                [8, 24, 50, 5], 
                [9, 10, 40, 7], 
                [9, 48, 15, 2]]

 Exemplo:
 4 4 4 4
 5 6 6 7
 9 9 9 9
 Resultado esperado -> 36

*/

// SOLUÇÃO 1

/*

const arrSomas = []
const arr4x4 = [[23, 56, 9, 0], [8, 24, 50, 5], [9, 10, 40, 7], [9, 48, 15, 2]]

for (let i = 0; i < arr4x4.length; i++) {
  let total = arr4x4[i].reduce(function(a, b) { 
    return a + b
  }) // Para cada linha da matriz, soma todos os elementos
  arrSomas[i] = total // Armazena a soma no array de somas
}

const valorMaximo = Math.max(...arrSomas) // Calcula o valor máximo do array de somas
console.log(valorMaximo)

*/

// SOLUÇÃO 2

const arrSomas = []
const arr4x4 = [[23, 56, 9, 0], [8, 24, 50, 5], [9, 10, 40, 7], [9, 48, 15, 2]]

for (let i = 0; i < arr4x4.length; i++) {
  let somaLinha = 0
  for (let j = 0; j < arr4x4.length; j++) {
    somaLinha += arr4x4[i][j] // Em cada linha, soma os valores de todas as suas posições
  }
  arrSomas.push(somaLinha) // Armazena o total no array de somas
}

const valorMaximo = Math.max(...arrSomas)
console.log("O valor mais alto entre as somas das linhas é:", valorMaximo)
