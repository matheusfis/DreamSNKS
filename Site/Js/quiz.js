const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const all = document.querySelector('.all-out-quiz');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const optionList = document.querySelector('.option-list');

startBtn.onclick = () => {
    popupInfo.classList.add('active');
    all.classList.add('active');
}

exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    all.classList.remove('active');
}

continueBtn.onclick = () => {
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    all.classList.remove('active');
    quizBox.classList.remove('active');

    showQuestions(0);
    questionCounter(1);
}

let questionCount = 0; // Contador de perguntas
let questionNumb = 1; // Número da pergunta atual

const nextBtn = document.querySelector('.next-btn');

nextBtn.onclick = () => {
    if (questionCount < questions.length - 1) {
        questionCount++;
        showQuestions(questionCount); // Carrega a próxima pergunta
        questionNumb++;
        questionCounter(questionNumb); // Atualiza o contador de perguntas
    } else {
        console.log('Quiz Completed');
    }
}

// Função para mostrar questões e opções
function showQuestions(index) {
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`; // Define o texto da pergunta

    let optionTag = `
        <div class="option"><span>${questions[index].options[0]}</span></div>
        <div class="option"><span>${questions[index].options[1]}</span></div>
        <div class="option"><span>${questions[index].options[2]}</span></div>
        <div class="option"><span>${questions[index].options[3]}</span></div>`;
    
    optionList.innerHTML = optionTag; // Insere as opções no HTML

    // Adiciona eventos de clique a cada opção
    const options = document.querySelectorAll('.option');
    for (let i = 0; i < options.length; i++) {
        options[i].addEventListener('click', function() {
            optionSelected(this); // Chama a função optionSelected quando uma opção é clicada
        });
    }
}

// Função chamada quando uma opção é selecionada
function optionSelected(answer) {
    let userAnswer = answer.textContent.trim(); // Remove espaços em branco ao redor
    let correctAnswer = questions[questionCount].answer;

    // Verifica se a resposta selecionada é correta ou incorreta
    if (userAnswer === correctAnswer) {
        answer.classList.add('correct'); // Adiciona classe 'correct' se a resposta estiver correta
    } else {
        answer.classList.add('incorrect'); // Adiciona classe 'incorrect' se a resposta estiver incorreta
    }
            // Seleciona automaticamente a resposta correta se a resposta estiver incorreta
            const allOptions = optionList.children.length;
            for (let i = 0; i < allOptions; i++) {
                if (optionList.children[i].textContent.trim() === correctAnswer) {
                    optionList.children[i].setAttribute('class', 'option correct');
                }
            }

    // Desabilita outras opções após a seleção
    const options = document.querySelectorAll('.option');
    for (let i = 0; i < options.length; i++) {
        options[i].classList.add('disabled'); // Adiciona classe 'disabled' para desativar outras opções
    }
}

// Atualiza o contador de perguntas
function questionCounter(index) {
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} of ${questions.length} Questions`;
}
