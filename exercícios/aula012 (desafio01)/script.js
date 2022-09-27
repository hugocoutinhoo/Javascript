function carregar() {
    var relogio = window.document.getElementById('relogio')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var horas = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()

    if (horas >= 0 && horas < 12) {
        img.src = 'imagens/manhã.png'
        document.body.style.background = 'rgb(224, 210, 84)'
    } else if (horas >= 12 && horas <= 18) {
        img.src = 'imagens/tarde2.png'
        document.body.style.background = 'rgb(248, 134, 59)'
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background = 'rgb(5, 28, 58)'
    }
    
}

function relogio () {
    var data = new Date()
    var horas = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()

    if (horas < 10) {
        horas = '0'+ horas
    } else if (minutos < 10) {
        minutos = '0'+ minutos
    } else if (segundos < 10) {
        segundos = '0'+ segundos
    }
    document.querySelector('#relogio').innerHTML= horas+':'+minutos+':'+segundos
    }
    window.setInterval('relogio()', 1000)

