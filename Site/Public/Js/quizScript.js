// Seleciona elementos HTML, CSS
const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');
const tryAgainBtn = document.querySelector('.tryAgain-btn');
const goHomeBtn = document.querySelector('.goHome-btn');
const ID_USUARIO = Number(sessionStorage.getItem("ID_USUARIO"));


console.log(`ID-USUARIO: ${ID_USUARIO}`)
// Inicia o quiz
startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
}

// Sai do popup
exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}

// Continua para o quiz
continueBtn.onclick = () => {
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');

    showQuestions(0); // Mostra a primeira pergunta
    questionCounter(1); // Atualiza o contador de perguntas
    headerScore(); // Atualiza a pontuação no cabeçalho
}

// Tenta novamente o quiz
tryAgainBtn.onclick = () => {
    // quizBox.classList.add('active');
    // nextBtn.classList.remove('active');
    // resultBox.classList.remove('active');

    // questionCount = 0;
    // questionNumb = 1;
    // userScore = 0;
    // showQuestions(questionCount);
    // questionCounter(questionNumb);
    // headerScore();

    window.location.href = './dashboard.html';
}

// Volta para a tela inicial
goHomeBtn.onclick = () => {
    quizSection.classList.remove('active');
    nextBtn.classList.remove('active');
    resultBox.classList.remove('active');

    questionCount = 0;
    questionNumb = 1;
    userScore = 0;
    showQuestions(questionCount);
    questionCounter(questionNumb);
}

// variavel de controle
let questionCount = 0;
let questionNumb = 1;
let userScore = 0;

let idQuiz = 1;
let questoesErros = 0;

const nextBtn = document.querySelector('.next-btn');

// Avança para a proxima pergunta
nextBtn.onclick = () => {
    if (questionCount < questions.length - 1) {
        questionCount++;
        showQuestions(questionCount);
        questionNumb++;
        questionCounter(questionNumb);
        nextBtn.classList.remove('active');
    } else {
        showResultBox();
    }
}

const optionList = document.querySelector('.option-list');

// Mostra perguntas e opções
function showQuestions(index) {
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

    let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
        <div class="option"><span>${questions[index].options[1]}</span></div>
        <div class="option"><span>${questions[index].options[2]}</span></div>
        <div class="option"><span>${questions[index].options[3]}</span></div>`;

    optionList.innerHTML = optionTag;

    const option = document.querySelectorAll('.option');
    // Adiciona evento de clique
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', 'optionSelected(this)');
    }
}

// Verifica a resposta selecionada
function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;
    let allOptions = optionList.children.length;

    if (userAnswer == correctAnswer) {
        answer.classList.add('correct');
        userScore++;
        headerScore();
    } else {
        questoesErros++;
        answer.classList.add('incorrect');
        // Marca a resposta correta se a resposta for errada
        for (let i = 0; i < allOptions; i++) {
            if (optionList.children[i].textContent == correctAnswer) {
                optionList.children[i].setAttribute('class', 'option correct');
            }
        }
    }

    // Desabilita todas as opções depois da seleção da resposta
    for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add('disabled');
    }

    nextBtn.classList.add('active');
}

// Atualiza o contador  perguntas
function questionCounter(index) {
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} de ${questions.length} Questões`;
}

// Atualiza a pontuação 
function headerScore() {
    const headerScoreText = document.querySelector('.header-score');
    headerScoreText.textContent = `Pontuação: ${userScore} / ${questions.length}`;
}

// Mostra a caixa de resultados
function showResultBox() {

    quizBox.classList.remove('active'); // Fecha a caixa da seção do quiz
    resultBox.classList.add('active'); // Adiciona a box do resultado

    const scoreText = document.querySelector('.score-text');
    scoreText.textContent = `Seus acertos: ${userScore} de ${questions.length}`;

    const circularProgress = document.querySelector('.circular-progress');
    const progressValue = document.querySelector('.progress-value');
    let progressStartValue = -1;
    let progressEndValue = (userScore / questions.length) * 100; // Calculo matematico referente a porcentagem de acertos
    let speed = 20;

    // Atualiza o progresso do grafico até chegar no ultimo valor 
    let progress = setInterval(() => {
        progressStartValue++;
        progressValue.textContent = `${progressStartValue}%`;
        circularProgress.style.background = `conic-gradient(#3E7CFA ${progressStartValue * 3.6}deg, rgba(255, 255, 255, .1) 0deg)`;

        if (progressStartValue == progressEndValue) {
            clearInterval(progress);
        }
    }, speed);
    fetchQuiz()

}

function fetchQuiz() {
    qtdAcertos = userScore;
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