/*
EXERCÍCIO

Dados n pares de parênteses, crie um programa para gerar todas as combinações de parênteses possíveis. 
Exemplo: Recebendo: n = 3 Resposta esperada: [ "((()))", "(()())", "(())()", "()(())", "()()()" ]
*/

//SOLUÇÃO

const geraCombinacaoParenteses = (num) => {

    let seqN = [['(', ')']]; // sequencia da linha N. Ex: N = 1 -> (), N = 2 -> ()(), (()) etc...
    let proxSeqStr = []; // sequencia da linha N+1, irá armazenar os elementos em formas de string

    for (let h = 0; h < num - 1; h++) {
        const proxSeqArr = []; // sequencia da linha N+1, irá armazenar os elementos em formas de arrays onde os '(' estão separados
        proxSeqStr = []; // reseta a sequencia para iniciar a próxima
        for (let i = 0; i < seqN.length; i++) {
            let p = []; // Armazenará um elemento (ordenamento possível) da sequência a se encontrar

            for (let j = 0; j <= seqN[i].length; j++) {
                p = [...seqN[i]]; // Copia um elemento da sequência anterior
                p.splice(j, 0, '(', ')'); // Adiciona () nas possíveis posições de p
                // Se a lista atual de elementos, não contiver p, adiciona ele à lista de strings e à lista de arrays
                if (proxSeqStr.indexOf(p.join('')) === -1) {
                    proxSeqStr.push(p.join(''));
                    proxSeqArr.push(p);
                }

            }
        }

        seqN = (num === 1) ? seqN : proxSeqArr; // Atualiza a sequência atual. Se num = 1, retorna ()
    }

    return (num === 1) ? seqN[0].join('') : proxSeqStr; // Retorna a sequência final
}

console.log(geraCombinacaoParenteses(4));


