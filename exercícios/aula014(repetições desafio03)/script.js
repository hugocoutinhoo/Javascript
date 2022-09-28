function contar() {
    var ini = document.getElementById('num1')
    var fim = document.getElementById('num2')
    var passo = document.getElementById('nump')
    var res = document.getElementById('res')

    if (num1.value.length == 0 || num2.value.length == 0) {
        
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0 || p > f) {
            window.alert('Passo inválido. Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            for (var c = i; c <= f; c += p) {
            res.innerHTML += `${c} `
        }

    } else {
        for (var c = i; c >= f; c -= p) {
            res.innerHTML += `${c} `
        }
    }
    res.innerHTML += '\u{1F3C1}'
    }
}