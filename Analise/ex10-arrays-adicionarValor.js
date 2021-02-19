/*
EXERCÍCIO

Enunciado: Dada a array x. Itere pela array somando mais 2 de cada item e crie uma nova array com os resultados gerados.

*/

// SOLUÇÃO 1

const x = [23, 43, 63, 73, 83, 93, 102]
const novoArray = []
for (let i = 0; i <= x.length - 1; i++) {
  novoArray.push(x[i] + 2)
}

console.log(novoArray)

// SOLUÇÃO 2
const y = [23, 43, 63, 73, 83, 93, 102]
const novo = y.map(item => item + 2)
console.log(novo)