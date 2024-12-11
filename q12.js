console.log("////////////////////CALCULADORA DE FATORIAL/////////////////////////////")

let num = Number(prompt("Digite o número desejado: "))
let soma = num

for(let i = 1; i<=num ; i++){
    soma = soma*(num-1)
    num = num-1
}

console.log(soma)
console.log("Progama encerrado")