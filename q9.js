console.log("////////////////////////CALCULADORA DE IMC//////////////////////////////")

let peso = Number(prompt("Digite o peso do usuário: "))
let altura = Number(prompt("Digite a altura do usuário: "))
let imc = Number

imc = (peso/(altura*altura))

switch (true){
    case (imc<18.5):
        console.log("Abaixo do peso.")
        break;
    case (imc>=18.5 && imc<24.9):
        console.log("Peso normal.")
        break;
    case (imc>=24.9 && imc<29.9):
        console.log("Pré-obesidade.")
        break;
    case (imc>=29.9 && imc<34.9):
        console.log("Obesidade Grau 1.")
        break;
    case (imc>=34.9 && imc<39.9):
        console.log("Obesidade Grau 2.")
        break;
    case (imc>=39.9):
        console.log("Obesidade Grau 3.")
        break
}