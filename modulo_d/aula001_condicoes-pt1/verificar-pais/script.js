function verificar() {
    let pais = document.getElementById('txtpais');
    let res = window.document.getElementById('res');
    let result = pais.value;

    if(result !== 'Brasil') {
        res.innerHTML = '<p> Você é estrangeiro. </p>';
    } else {
        res.innerHTML = '<p> Você é brasileiro. </p>';
    }
}