console.log("/////////////////////BEM-VINDO AO RESTAURANTE COME BEM!//////////////////////")
let hamburguer = (12.50)
let macarrao = (25.50)
let pizza = (42,50)
let salada = (22,50)

console.log("O que deseja pedir?")
let escolha = Number(prompt("Cardápio:     1- Hamburguer     2-Macarrão     3-Pizza    4-Salada"))

switch (escolha){
    case 1:
        console.log("Haburguer valor:","R$", hamburguer)
        break;
    case 2:
        console.log("Macarrão valor:","R$", macarrao)
        break;
    case 3:
        console.log("Pizza valor:","R$", pizza)
        break;
    case 4:
        console.log("Salada valor:","R$", salada)
        break;
}

console.log("Progama encerrado")