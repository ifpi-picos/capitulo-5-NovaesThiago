console.log("QUAL TIPO DO SEU TRIANGULO")

let lado1 = Number(prompt("Digite o número do primeiro lado: "))
let lado2 = Number(prompt("Digite o número do segundo lado: "))
let lado3 = Number(prompt("Digite o número do terceiro lado: "))

if (lado1+lado2<=lado3 || lado2+lado3<=lado1 || lado1+lado3>=lado2){
        console.log("Triangulo inválido: ")
}else if ((lado1==lado2)&&(lado2==lado3)){
    console.log("Seu triangulo é Equilatero.")
} else if ((lado1==lado2)||(lado2==lado3)||(lado1==lado3)){
        console.log("Seu triangulo é Isoceles.")
}      else { 
        console.log("Seu triangulo é Escaleno.")
}

console.log("Progama encerrado")