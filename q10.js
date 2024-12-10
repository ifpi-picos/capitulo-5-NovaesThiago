console.log("//////////////////MULTIPLOS PARES/////////////////////")

let cont = Number(0)
let num = Number(prompt("Digite um número positivo: "))

while (num<0){
    console.log("O número digitado é negativo. Por favor digite um nuúmero positivo")
    num = (prompt("Digite um número positivo: "))
}

if (num%2==1){
    num = (num-1)
}

while (cont<num) {
    console.log(cont)
    cont = cont+2
}
console.log("FIM")