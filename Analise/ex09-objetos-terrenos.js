/*
EXERCÍCIO

Siga os passos:

1- Crie uma função construtora para Terreno, cada terreno deve ter:
largura, comprimento, area(largura x comprimento)

2 - Crie métodos usando o prototype, eles devem ser:
    - calcularPreco -> que vai ser a area x 1000 reais.
    - mostrarInfos -> que mostrar a area e o preço do terreno.

3 - Crie 5 instancias do terreno, usando o operador new. ex: const t1 = new Terreno(arg1, arg2)

4 - Crie uma array vazia chamada terrenos.
5 - Insira as instâncias criadas no array de terrrenos.
6 - Use a função calcular preço para que todas as instâncias tenham seus preços
7 - Imprima na tela o último terreno da array terrenos.
8 - Imprima a área do terceiro item da array terrenos.
9 - Usando um loop, execute o método mostrarInfos de todos os terrenos.
10 - Crie uma função que vai receber o array de objetos e vai ordenar a lista do mais barato para o mais caro.
11 - Crie uma função que imprima o mais barato
12 - Crie uma função que imprima o mais caro.
*/

//SOLUÇÃO

// 1)
function Terreno(largura, comprimento) {
    this.largura = largura
    this.comprimento = comprimento
    this.area = largura * comprimento
}

// 2)
Terreno.prototype.calcularPreco = function () {
    this.preco = this.area * 1000
}

Terreno.prototype.mostrarInfos = function () {
    console.log(`A area é ${this.area} e o preco é: ${this.preco}`)
}

// 3)
const t1 = new Terreno(30, 20)
const t2 = new Terreno(10, 50)
const t3 = new Terreno(34, 200)
const t4 = new Terreno(33, 19)
const t5 = new Terreno(3, 2)

// 4)
const terrenos = []

// 5)
terrenos.push(t1, t2, t3, t4, t5)

// 6)
terrenos.forEach(item => item.calcularPreco())

// 7)
console.log('Último terreno da lista: \n', terrenos[terrenos.length - 1])

// 8)
console.log('Área do terceiro terreno da lista: ', terrenos[2].area)

// 9)
for (const item of terrenos) {
    item.mostrarInfos()
}

// for (let i = 0; i < terrenos.length; i++) {
//   console.log(terrenos[i].mostrarInfos())
// }

// 10, 11, 12)
function ordenaTerrenos(arrTerrenos) {
    const ordenados = arrTerrenos.sort(function (a, b) {
        return a.preco - b.preco // Ordena os terrenos pelo preço em ordem crescente
    })
    console.log('Terreno mais barato: \n', ordenados[0], '\nTerreno mais caro: \n', ordenados[ordenados.length - 1])
}

ordenaTerrenos(terrenos)