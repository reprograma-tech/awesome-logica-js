/*
EXERCÍCIO

Dado o array de objetos abaixo, faça:
a) Retorne a mulher que tiver o user = 238
b) Retorne as mulheres que tem por hobbie estudar
c) Mostre o nome de todas as mulheres da lista
d) Retorne as mulheres menores de idade

*/

//SOLUÇÃO

const mulheres = [
    {
      user: 234,
      name: "Marcia",
      idade: 40,
      hobbies: ["estudar", "comer", "falar"]
    },
    {
      user: 235,
      name: "Lorena",
      idade: 20,
      hobbies: ["dançar", "assistir tv", "estudar"]
    },
    {
      user: 236,
      name: "Patricia",
      idade: 24,
      hobbies: ["correr", "acampar", "surfar"]
    },
    {
      user: 237,
      name: "Mariana",
      idade: 15,
      hobbies: ["skate", "bicicleta", "break dance"]
    },
    {
      user: 238,
      name: "Isis",
      idade: 34,
      hobbies: ["ler", "estudar", "discutir"]
    },
    {
      user: 239,
      name: "Pietra",
      idade: 23,
      hobbies: ["jogar dominó", "sinuca", "cartas"]
    }
  ]

function userById(id) {
    const user = mulheres.find(item => item.user === id) // Encontra no array a mulher cujo user seja igual ao id passado
    return user
} 
console.log('Mulher de id 238:', userById(238))

function userByHobbie(hobbie) {
    const users = mulheres.filter(item => item.hobbies.indexOf(hobbie) > -1)
    // Encontra no array as mulheres que tenha o hobbie passado por parâmetro
    // A condição só é verdadeira de o hobbie estiver na lista
    return users
}

console.log('Mulheres com o hobbie de estudar: ', userByHobbie('estudar'))

function showNames (arrMulheres) {
    console.log('Nome das mulheres da lista:')
    arrMulheres.map(item => {
        console.log(item.name)
    })
}
  
showNames(mulheres)

function userMenorDeIdade () {
    const users = mulheres.filter(item => item.idade < 18)
    // Encontra no array as mulheres que tenha menos de 18 anos
    return users
}

console.log('Mulheres menores de idade:', userMenorDeIdade())