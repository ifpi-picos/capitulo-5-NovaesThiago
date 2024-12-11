console.log("//////////////////////MULTIPLOS IMPARES/////////////////////////")

let num = Number(prompt("Digite um número positivo: "))

while(num<0){
    console.log("O número digitado é negativo. Por favor digite um nuúmero positivo")
    num = (prompt("Digite um número positivo: "))
}

if (num%2==0){
    num = num-1
}

for (let i = 1; i<num; i+=2){
    console.log(i)
}

console.log("FIM")