function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        // como se colocasse a tag <img> com id='foto' no HTML.
        if (fsex[0].checked) {
            gender = 'um homem'
            if (idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade <= 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            gender = 'uma mulher'
            if (idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade <= 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                //Adulta
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                //Idosa
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gender} com ${idade} anos.`
        res.appendChild(img)
        //adicionar elemento img 
    }
}