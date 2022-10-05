const passwordInput = document.getElementById("senha")
const eyeSvg = document.getElementById("eyeSvg")

function eyeClick() {
    let inputTypeIsPassword = passwordInput.type = "password"

    if(inputTypeIsPassword) {
        showPassword()
        //ação
    } else {
        //ação
        hidePassword()
    }
}

function showPassword() {
    passwordInput.setAttribute("type", "text")
    eyeSvg.setAttribute("src", "../imagens/hide.png")
}

function hidePassword() {
    passwordInput.setAttribute("type", "password")
}