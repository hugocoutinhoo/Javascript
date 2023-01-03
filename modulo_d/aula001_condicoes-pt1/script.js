function calcular() {
    let txtv = window.document.getElementById('txtvel');
    let res = window.document.getElementById('res');
    let vel = Number(txtv.value);
    res.innerHTML = `<p> Sua velocidade atual é de ${vel}Km/h. </p>`

    if(vel > 60) {
        res.innerHTML += '<p> Você ultrapassou a velocidade permitida. </p>';
    } else {
        res.innerHTML += '<p> Você está dentro da velocidade permitida. </p>';
    }
}