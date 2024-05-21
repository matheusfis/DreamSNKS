const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

registerLink.onclick = () => {
    wrapper.classList.add('active');

    document.getElementById('ipt_nome_log').value = "";
    document.getElementById('ipt_senha_log').value = "";
}

loginLink.onclick = () => {
    wrapper.classList.remove('active');

    document.getElementById('ipt_nome_cad').value = "";
    document.getElementById('ipt_email_cad').value = "";
    document.getElementById('ipt_senha_cad').value = "";
}

function redirect() {
    
    let nome_cad = document.getElementById('ipt_nome_cad').value;
    let email_cad = document.getElementById('ipt_email_cad').value;
    let senha_cad = document.getElementById('ipt_senha_cad').value;
    let nome_log = document.getElementById('ipt_nome_log').value;
    let senha_log = document.getElementById('ipt_senha_log').value;


if ( (nome_cad != '' && email_cad != '' && senha_cad != '') || (nome_log != '' && senha_log != '' )) {
    event.preventDefault();
    window.location.href = "../View/Quiz.html";
} else {
    alert('Preencha todos os campos')
}



}

