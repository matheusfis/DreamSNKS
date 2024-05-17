const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const all = document.querySelector('.all-out-quiz');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');

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
}