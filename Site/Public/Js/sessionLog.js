function logOut() {
    sessionStorage.clear();
    window.location = "./index.html";
}

function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var nome_usuario = document.getElementById("nome_usuario");

    if (email != null && nome != null) {
        nome_usuario.innerHTML = nome;
    } else {
        window.location = "./login.html";
    }
}