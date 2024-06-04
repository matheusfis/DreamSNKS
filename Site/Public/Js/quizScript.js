
const btnComecar = document.querySelector('.btn-comecar');
const popupInfo = document.querySelector('.popup-info');
const btnSairQuiz = document.querySelector('.btn-sair-quiz');
const principal = document.querySelector('.principal');
const btnContinuar = document.querySelector('.btn-continuar');
const secaoQuiz = document.querySelector('.secao-quiz');
const caixaQuiz = document.querySelector('.caixa-quiz');
const caixaResultado = document.querySelector('.caixa-resultado');
const btnTentarNovamente = document.querySelector('.btn-tentar-novamente');
const btnVoltarInicio = document.querySelector('.btn-voltar-inicio');
const ID_USUARIO = Number(sessionStorage.getItem("ID_USUARIO"));

console.log(`ID-USUARIO: ${ID_USUARIO}`);

btnComecar.onclick = () => {
    popupInfo.classList.add('ativo');
    principal.classList.add('ativo');
}

btnSairQuiz.onclick = () => {
    popupInfo.classList.remove('ativo');
    principal.classList.remove('ativo');
}

btnContinuar.onclick = () => {
    secaoQuiz.classList.add('ativo');
    popupInfo.classList.remove('ativo');
    principal.classList.remove('ativo');
    caixaQuiz.classList.add('ativo');

    mostrarPerguntas(0);
    contadorPerguntas(1); 
    pontuacaoCabecalho(); 
}

// Tenta novamente o quiz
btnTentarNovamente.onclick = () => {
    window.location.href = './dashboard.html';
}

// Volta para a tela inicial
btnVoltarInicio.onclick = () => {
    secaoQuiz.classList.remove('ativo');
    btnProxima.classList.remove('ativo');
    caixaResultado.classList.remove('ativo');

    contadorQuestoes = 0;
    numeroPergunta = 1;
    pontuacaoUsuario = 0;
    mostrarPerguntas(contadorQuestoes);
    contadorPerguntas(numeroPergunta);
}
let contadorQuestoes = 0;
let numeroPergunta = 1;
let pontuacaoUsuario = 0;

let idQuiz = 1;
let questoesErros = 0;

const btnProxima = document.querySelector('.btn-proxima');

btnProxima.onclick = () => {
    if (contadorQuestoes < questions.length - 1) {
        contadorQuestoes++;
        mostrarPerguntas(contadorQuestoes);
        numeroPergunta++;
        contadorPerguntas(numeroPergunta);
        btnProxima.classList.remove('ativo');
    } else {
        mostrarCaixaResultado();
    }
}

const listaOpcoes = document.querySelector('.lista-opcoes');

// Mostra perguntas e opções
function mostrarPerguntas(index) {
    const textoPergunta = document.querySelector('.texto-pergunta');
    textoPergunta.textContent = `${questions[index].numb}. ${questions[index].question}`;

    let tagOpcoes = `<div class="opcao"><span>${questions[index].options[0]}</span></div>
        <div class="opcao"><span>${questions[index].options[1]}</span></div>
        <div class="opcao"><span>${questions[index].options[2]}</span></div>
        <div class="opcao"><span>${questions[index].options[3]}</span></div>`;

    listaOpcoes.innerHTML = tagOpcoes;

    const opcao = document.querySelectorAll('.opcao');

    // Adiciona evento de clique
    for (let i = 0; i < opcao.length; i++) {
        opcao[i].setAttribute('onclick', 'opcaoSelecionada(this)');
    }
}

function opcaoSelecionada(resposta) {
    let respostaUsuario = resposta.textContent;
    let respostaCorreta = questions[contadorQuestoes].answer;
    let todasOpcoes = listaOpcoes.children.length;

    if (respostaUsuario == respostaCorreta) {
        resposta.classList.add('correta');
        pontuacaoUsuario++;
        pontuacaoCabecalho();
    } else {
        questoesErros++;
        resposta.classList.add('incorreta');

        // Marca a resposta correta se a resposta for errada
        for (let i = 0; i < todasOpcoes; i++) {
            if (listaOpcoes.children[i].textContent == respostaCorreta) {
                listaOpcoes.children[i].setAttribute('class', 'opcao correta');
            }
        }
    }

    // Desabilita todas as opções depois da seleção da resposta
    for (let i = 0; i < todasOpcoes; i++) {
        listaOpcoes.children[i].classList.add('desativada');
    }

    btnProxima.classList.add('ativo');
}

function contadorPerguntas(index) {
    const totalPerguntas = document.querySelector('.total-perguntas');
    totalPerguntas.textContent = `${index} de ${questions.length} Questões`;
}

function pontuacaoCabecalho() {
    const textoPontuacaoCabecalho = document.querySelector('.cabecalho-pontuacao');
    textoPontuacaoCabecalho.textContent = `Pontuação: ${pontuacaoUsuario} / ${questions.length}`;
}

function mostrarCaixaResultado() {
    caixaQuiz.classList.remove('ativo'); // Fecha a caixa da seção do quiz
    caixaResultado.classList.add('ativo'); // Adiciona a box do resultado

    const textoPontuacao = document.querySelector('.texto-pontuacao');
    textoPontuacao.textContent = `Seus acertos: ${pontuacaoUsuario} de ${questions.length}`;

    const progressoCircular = document.querySelector('.progresso-circular');
    const valorProgresso = document.querySelector('.valor-progresso');
    let valorInicialProgresso = -1;
    let valorFinalProgresso = (pontuacaoUsuario / questions.length) * 100; // Calculo matemático referente a porcentagem de acertos
    let velocidade = 20;

    // Atualiza o progresso do gráfico até chegar no último valor
    let progresso = setInterval(() => {
        valorInicialProgresso++;
        valorProgresso.textContent = `${valorInicialProgresso}%`;
        progressoCircular.style.background = `conic-gradient(#3E7CFA ${valorInicialProgresso * 3.6}deg, rgba(255, 255, 255, .1) 0deg)`;

        if (valorInicialProgresso == valorFinalProgresso) {
            clearInterval(progresso);
        }
    }, velocidade);
    fetchQuiz()
}

function fetchQuiz() {
    qtdAcertos = pontuacaoUsuario;
    // Fetch para enviar os arquivos para o banco
    fetch(`quizRoute/registrar/${ID_USUARIO}`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            idQuizServer: idQuiz,
            idUsuarioServer: ID_USUARIO,
            qtdAcertosServer: qtdAcertos,
            qtdErrosServer: questoesErros
        })
    }).then(res => {
        console.log(res);
    })
    console.log(`Seus acertos: ${qtdAcertos} Seus erros: ${questoesErros}`);
    questoesErros = 0;
}
