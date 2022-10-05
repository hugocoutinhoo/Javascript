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
}

function hidePassword() {
    passwordInput.setAttribute("type", "password")
}