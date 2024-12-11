console.log("CONVERSOR DE UNIDADES DE MEDIDAS(CELCIUS/FAHRENHEIT)")

let celcius = Number
let fahren = Number
let resultado = Number
let escolha = Number(prompt("Qual conversão deseja fazer? digite 1(°C -> °F) e 2(°F -> °C): "))

if (escolha==1){
    celcius = prompt("Digite o valor em °C: ")
    resultado = (celcius*1.8)+32
    console.log("A temperatura em Fahrenheit é:", resultado)
} else{
    fahren = prompt("Digite o valor em °F:")
    resultado = ((fahren-32)*5)/9
    console.log("A temperatura em °C é:", resultado)
}
