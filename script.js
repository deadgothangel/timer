const timerDisp = document.getElementById('timer');
const audioObj = document.getElementById('bg-audio');
const glitchTarget = document.getElementById('glitch-chars');

// Бешеный таймер
setInterval(() => {
    let m = Math.floor(Math.random() * 60).toString().padStart(2, '0');
    let s = Math.floor(Math.random() * 60).toString().padStart(2, '0');
    let ms = Math.floor(Math.random() * 99).toString().padStart(2, '0');
    timerDisp.innerText = `00:${m}:${s}:${ms}`;
}, 45);

// Глитч ника (быстрая смена символов)
const symbols = "ΔΣΦΨΩ777X?#@";
setInterval(() => {
    let out = "";
    for(let i=0; i<5; i++) out += symbols[Math.floor(Math.random()*symbols.length)];
    glitchTarget.innerText = out;
}, 80);

// Управление звуком
function toggleAudio() {
    audioObj.muted = !audioObj.muted;
    document.getElementById('speaker-icon').style.fill = audioObj.muted ? "#222" : "#f00";
}

// Модалки
function openModal(id) {
    closeModals();
    document.getElementById(id).style.display = 'flex';
    audioObj.play().catch(() => {}); // Автоплей при взаимодействии
}

function closeModals() {
    document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
}
