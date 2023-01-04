let amigo = {
    nome: 'Hugo',
    idade: 29,
    sexo: 'M',
    peso: 90.2,
    engordar(p = 0) {
        console.log('Engordou')
        this.peso += p
    }
}

amigo.engordar(4.4)
console.log(amigo.peso)
