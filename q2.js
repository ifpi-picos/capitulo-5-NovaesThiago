const num1 = Number(prompt("Digite o primeiro número:"))
const num2 = Number(prompt("Digite o segundo número:"))
const num3 = Number(prompt("Digite o terceiro número:"))
let numfinal = Number

if (num1>num2 && num1>num3) {
    numfinal = num1
} else{
    if (num2>num3 && num2>num1) {
        numfinal = num2
    } else {
        numfinal = num3
    }
}

console.log("O maior numero digitado foi: ", numfinal)