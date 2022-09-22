var n1 = 7.3
var n2 = 6.9
var media = (n1 + n2) / 2
console.log(`Sua média é ${media}`)
if (media >= 7.0) {
    console.log('Você foi aprovado!')
} else if (media < 7.0 && media >= 6.0) {
    console.log('Você está em recuperação.')
} else if (media < 6.0) { 
    console.log('Você foi reprovado.')
}

