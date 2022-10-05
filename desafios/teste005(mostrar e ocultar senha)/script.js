const passwordInput = document.getElementById("senha")
const eyeSvg = document.getElementById("eyeSvg")

function eyeClick() {
    let inputTypeIsPassword = passwordInput.type == "password"

    if (inputTypeIsPassword) {
        showPassword()
    } else {
        hidePassword()
    }
}

function showPassword() {
    passwordInput.setAttribute("type", "text")
    eyeSvg.setAttribute("src", "hide.png")
}

function hidePassword() {
    passwordInput.setAttribute("type", "password")
    eyeSvg.setAttribute("src", "show.png")
}