console.log("Maior de Idade?")

const anoatual = (new Date().getFullYear())
let idade = Number
let anousuario = Number(prompt("Digite o ano de nascimento do usuário: "))

idade = (anoatual-anousuario)

if (idade>=18){
    console.log("Usuário é maior de idade")
} else {
    console.log("Usuario menor de idade")
}