console.log ("SISTEMA DE APROVAÇÃO")
const nota1 = Number(prompt("Digite a primeira nota")) 
const nota2 = Number(prompt("Digite a segunda nota"))
const nota3 = Number(prompt("Digite a terceira nota"))
let media = Number

media = (nota1+nota2+nota3)/3

if (media>=7){
    console.log("Parabéns! Aluno Aprovado!")
} else {
    console.log("Aluno Reprovado!")
}
