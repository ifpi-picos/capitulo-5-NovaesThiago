console.log("Identificar de numeros multiplos: ")

let num1 = Number(prompt("Digite o primeiro número: "))
let num2 = Number(prompt("Digite o segundo número: "))

if ((num1%num2==0)||(num2%num1==0)){
    console.log("Pelo menos um dos números é múltiplo do outro.")
} else {
    console.log("Nenhum dos números são multiplos")
}