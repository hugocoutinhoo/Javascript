var senha = document.getElementById('senha');
var olho = document.getElementById('olho');

function showhide() {
    if (senha.type === 'senha') {
        senha.setAttribute('type','text');
        olho.classList.add('hide')
    } else {
        senha.setAttribute('type','senha');
        olho.classList.remove('hide')
    }
}