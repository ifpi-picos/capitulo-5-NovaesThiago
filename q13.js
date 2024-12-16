
let num = Number(Math.floor(Math.random() * 101))
let palpite = Number
let resetGame = Number

//esse while vai fazer o jogo resetar quando o usuario digitar numeros diferente de 2
while (resetGame!=2) {
    console.log("////////////////////ADIVINHE O NUMERO!/////////////////////")
    console.log("ADIVINHE UM NÚMERO DE 0 À 100")
    console.log("LEMBRE-SE: O USUÁRIO TEM 10 TENTATIVAS. BOA SORTE!")


    palpite = prompt("DIGITE O SEU PALPITE: ") 

    if (palpite == num){
    console.log("PARABÉNS! VOCÊ ACERTOU!")

    }else{
        // esse for esta com i<9 por ja ter gastado uma tentativa antes do if
        for (let i = 0; i<9; i++){

            if (palpite<0){
                console.log("NÚMERO INVALIDO")
                palpite = prompt("DIGITE O SEU PALPITE: ")
            }else if (palpite==num){
                console.log("PARABÉNS! VOCÊ ACERTOU!")
             break
            } else if (palpite<num){ 
                console.log("O NÚMERO SECRETO É MAIOR QUE O PALPITE DIGITADO")
                palpite = prompt("DIGITE O SEU PALPITE: ")
            }else {
                console.log("O NÚMERO SECRETO É MENOR QUE O PALPITE DIGITADO")
                palpite = prompt("DIGITE O SEU PALPITE: ") 
            }
        }
    }
        if (palpite!=num){
            console.log("TENTATIVAS ESGOTADAS ;-;   TENTE NOVAMENTE!")
        }
}

    console.log("O NÚMERO SECRETO ERA:", num)
    num = (Math.floor(Math.random() * 101)) //vai escolher outro numero aleatorio para reiniciar o jogo
    resetGame = prompt("DESEJA JOGAR NOVAMENTE?          1(SIM)    2(NÃO)")


console.log("PROGAMA ENCERRADO ")