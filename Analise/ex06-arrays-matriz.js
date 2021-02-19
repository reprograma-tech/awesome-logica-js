/*
EXERCÍCIO:

Usando um loop, crie uma matriz 5 x 5 cujos elementos são:
 1 2 3 4 5
 6 7 8 9 10
 11 12 13 14 15
 16 17 18 19 20
 21 22 23 24 25

*/

// SOLUÇÃO 1

function matriz(linha, col, inicio) {
  const arr = []
  let count = inicio
  for (let i = 0; i < linha; i++) {
    const linha = [] // Cria uma linha (array vazio)
    for (let j = 0; j < col; j++) {
      linha[j] = count // Preenche a linha em cada posição
      count++
    }
    arr[i] = linha // Adiciona a linha ao array inicial
  }
  console.log(arr) // Exibe array após finalizado
}

matriz(5, 5, 1) // Executa a função
