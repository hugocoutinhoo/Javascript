// Else if:
/* let agora = new Date()
let hora = agora.getHours();
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia')
} else if (hora <= 18) {
    console.log('Boa tarde')
} else {
    console.log('Boa noite')
} */

// ----------------- Switch / Case ------------------------
let agora = new Date();
let diaSem = agora.getDay();

switch (diaSem) {
    case 0:
        console.log('Domingo');
        break
    case 1:
        console.log('Segunda-feira');
        break
    case 2:
        console.log('Terça-feira');
        break
    case 3:
        console.log('Quarta-feira');
        break
    case 4:
        console.log('Quinta-feira');
        break
    case 5:
        console.log('Sexta-feira');
        break
    case 6:
        console.log('Sábado');
        break
}

console.log(diaSem);

