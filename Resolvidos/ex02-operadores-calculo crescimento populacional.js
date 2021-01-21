/*
EXERCÍCIO

Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3% e que a população de B seja 200000 habitantes com uma taxa de crescimento de 1.5%. 
Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.
*/

//SOLUÇÃO

/* Antes de mergulhar no código vamos entender o problema
   Para calcular a população nos diferentes anos fazemos:

   No ano 1: 
          PopA1 =  Pop. Inicial + Pop. que cresceu naquele ano 
          PopA1 = 8000 + (8000 * 0.03) 
          PopA1 = 8000 * (1 + 0.03) Isso é a mesma coisa da fórmula anterior, só usamos um truque da matemática e colocamos o 8000 em evidência, pra você entender de onde sai o bendito 1,03 
            
          PopA1 = 8000 * 1.03

    No ano 2 a população inicial vai ser a população no ano 1, logo:
          PopA2 = PopA1 * 1.03 , mas substituindo o valor da PopA1 pelo valor que calculamos antes temos (8000 * 1.03)
          PopA2 = (8000 * 1.03) * 1.03
    
    No ano 3 seguimos o mesmo raciocínio:
          PopA3 = PopA2 * 1.03 , substituindo o valor da PopA2 pelo valor da PopA2 que calculamos antes temos (8000 * 1.03 * 1.03)
          PopA2 = (8000 * 1.03 * 1.03) * 1.03  

    Opa...já conseguimos ver um padrão aqui, você notou?

    PopA1 = 8000 * 1.03
    PopA2 = 8000 * 1.03 * 1.03
    PopA3 = 8000 * 1.03 * 1.03 * 1.03

    Sempre que aumentamos um ano, multiplicamos a população por 1.03. Puxando da memória, a gente pode escrever esses valores usando potência, lembra ?

    PopA1 = 8000 * (1.03)**1
    PopA2 = 8000 * (1.03)**2
    PopA3 = 8000 * (1.03)**3

    É assim que chegamos na fórmula geral: 

    Pop = PopInicial * (1 + taxaAnual) ** QuantidadeDeAnos 

    Legal né ? 
*/

//como a porcentagem se repete ao ano, cria-se uma potência com (1,03)

function calcula_crescimento(popInicial, taxaAnual, anos){
    return popInicial * (1 + taxaAnual)**anos
}

let anos = 1
let popA = calcula_crescimento(80000, 0.03, anos)
let popB = calcula_crescimento(200000, 0.015, anos)

 while(popA <= popB){
    anos++
    popA = calcula_crescimento(80000, 0.03, anos)
    popB = calcula_crescimento(200000, 0.015, anos)
} 

console.log(new Intl.NumberFormat().format(popA))
console.log(new Intl.NumberFormat().format(popB))
console.log(`O tempo é de ${anos} anos`)









