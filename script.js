const timerElement = document.getElementById('timer');
const audio = document.getElementById('bg-audio');
const glitchNick = document.getElementById('glitch-title');

// !!! БЕСКОНЕЧНЫЙ ТАЙМЕР !!!
setInterval(() => {
    let now = Date.now().toString();
    // Берем последние 2 цифры как миллисекунды для эффекта глюка
    let msGlitch = now.slice(-2);
    timerElement.innerText = `00:00:00:${msGlitch}`;
}, 40); // Очень быстрое обновление

// !!! ГЛИТЧ НИКА (Всего текста) !!!
const gothChars = "ΔΣΦΨΩ777XX???DEADGOTHANGEL";
setInterval(() => {
    let raw = "DEADGOTHANGEL — ";
    let glitch = "";
    for(let i=0; i<15; i++) glitch += gothChars[Math.floor(Math.random()*gothChars.length)];
    // Вставляем глитч в ник
    glitchNick.innerText = glitch;
}, 80);

// Mute/Unmute
function toggleMute() {
    audio.muted = !audio.muted;
    document.getElementById('speaker-icon').style.fill = audio.muted ? "#222" : "red";
}

// Окна
const mainModal = document.getElementById('main-modal');
const instrModal = document.getElementById('instr-modal');

function openMainModal() {
    closeAllModals();
    mainModal.style.display = 'flex';
    audio.play().catch(e => console.log("Play blocked")); // Автоплей
}

function openInstrModal() {
    closeAllModals();
    instrModal.style.display = 'flex';
}

function closeAllModals() {
    mainModal.style.display = 'none';
    instrModal.style.display = 'none';
}

// Закрытие по клику на фон
function closeModal(e, id) {
    if(e.target.id === id) document.getElementById(id).style.display = 'none';
}
