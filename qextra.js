let num = Number(Math.floor(Math.random() * 101))
let palpite = Number
let resetGame = Number
let pontuacao = Number(99)

console.log("////////////////////ADIVINHE O NUMERO!/////////////////////")
console.log("ADIVINHE UM NÚMERO DE 0 À 100")
console.log("O JOGADOR TERÁ 100 PONTOS, A CADA ERRO ELE PERDERÁ 1 PONTO!")
console.log("BOA SORTE!")

while (true) {

    palpite = prompt("DIGITE O SEU PALPITE: ") 
    if (palpite == num){
        console.log("PARABÉNS! VOCÊ ACERTOU!")
        console.log("SUA PONTUAÇÃO FOI: ", pontuacao)
        break
    }else if (palpite<0){
        console.log("NÚMERO INVALIDO")
        pontuacao = (pontuacao-1)
    } else if (palpite<num){ 
        console.log("O NÚMERO SECRETO É MAIOR QUE O PALPITE DIGITADO")
        pontuacao = (pontuacao-1)
    }else {
        console.log("O NÚMERO SECRETO É MENOR QUE O PALPITE DIGITADO")
        pontuacao = (pontuacao-1)
    }
}      
console.log("PROGAMA ENCERRADO.")