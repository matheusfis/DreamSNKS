const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

registerLink.onclick = () => {
    wrapper.classList.add('active');
}

loginLink.onclick = () => {
    wrapper.classList.remove('active');
}

function validarEmail(email) {
    const re = /\S+@\S+\.\S+/; // expressão regular que define o padrão de um email válido
    return re.test(email); // método test para verificar se o email corresponde ao padrão da constante 're'
}

function cadastrar() {
    var nomeVar = ipt_nome.value;
    var emailVar = ipt_email.value;
    var senhaVar = ipt_senha.value;

    if (nomeVar.length < 3) {
        alert("O nome deve ter mais do que 5 caracteres.");
        return false;
    }

    if (!validarEmail(emailVar)) {
        alert("Por favor, insira um email válido.");
        return false;
    }

    if (senhaVar.length < 6) {
        alert("A senha deve ter 6 dígitos ou mais.");
        return false;
    }

    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nomeServer: nomeVar,
            emailServer: emailVar,
            senhaServer: senhaVar,
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                alert("Cadastro realizado com sucesso! Redirecionando para tela de Login...")

                setTimeout(() => {
                    wrapper.classList.remove('active');
                }, 500);

            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;
}

// ------------------SCRIPT PARA O LOGIN------------------

function entrar() {
    var emailVar = email_log.value;
    var senhaVar = senha_log.value;

    if (emailVar == "" || senhaVar == "") {
        alert("Mensagem de erro para todos os campos em branco");
        return false;
    }

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.idUsuario;

                setTimeout(function () {
                    window.location = "./Quiz.html";
                }, 500);

            });

        } else {
            alert('Senha ou email incorretos')
            console.log("Houve um erro ao tentar realizar o login!");

        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}
