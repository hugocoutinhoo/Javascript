let num = [2, 3, 1, 4, 5, 7, 6, 8];
num.push(9);
num.length //não é um método, por isso não tem parênteses. é um atributo.
console.log(num.indexOf(7));


/* for(let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
} */

for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}




