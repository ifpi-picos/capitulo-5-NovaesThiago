let num = Number(Math.floor(Math.random() * 101))
let palpite = Number
let resetGame = Number
let usuario = Number(100)

console.log("////////////////////ADIVINHE O NUMERO!/////////////////////")
console.log("ADIVINHE UM NÚMERO DE 0 À 100")
console.log("LEMBRE-SE: O USUÁRIO TEM 10 TENTATIVAS. BOA SORTE!")


while (true) {

    palpite = prompt("DIGITE O SEU PALPITE: ") 
    if (palpite == num){
        console.log("PARABÉNS! VOCÊ ACERTOU!")
        console.log("SUA PONTUAÇÃO FOI: ", usuario)
        break
    }else if (palpite<0){
        console.log("NÚMERO INVALIDO")
        usuario = (usuario-1)
    } else if (palpite<num){ 
        console.log("O NÚMERO SECRETO É MAIOR QUE O PALPITE DIGITADO")
        usuario = (usuario-1)
    }else {
        console.log("O NÚMERO SECRETO É MENOR QUE O PALPITE DIGITADO")
        usuario = (usuario-1)
    }
}      
console.log("PROGAMA ENCERRADO.")