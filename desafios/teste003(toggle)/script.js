function showhide(){
    const senha = document.getElementById('senha');
    const icon = document.getElementById('olho');
    
    if (senha.type === 'senha') {
        senha.setAttribute('type','text');
        icon.classList.add('hide')
    } 
    else {
        senha.setAttribute('type','senha');
        icon.classList.remove('hide')
    }
}