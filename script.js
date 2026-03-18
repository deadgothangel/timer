const timerDisp = document.getElementById('timer');
const audioObj = document.getElementById('bg-audio');
const glitchTarget = document.getElementById('glitch-chars');

// Бесконечный таймер (зацикливает миллисекунды)
setInterval(() => {
    // Получаем текущее время в миллисекундах и берем последние 2 цифры
    let now = Date.now().toString();
    let msGlitch = now.slice(-2);
    
    timerDisp.innerText = `00:00:00:${msGlitch}`;
}, 45); // Частота обновления 45мс для эффекта глитча

// Глитч ника (быстрая смена символов)
const symbols = "ΔΣΦΨΩ777X?#@";
setInterval(() => {
    let out = "";
    for(let i=0; i<5; i++) out += symbols[Math.floor(Math.random()*symbols.length)];
    glitchTarget.innerText = out;
}, 80);

// Управление звуком
function toggleMute() {
    audioObj.muted = !audioObj.muted;
    document.getElementById('speaker-icon').style.fill = audioObj.muted ? "#222" : "#f00";
}

// Модалки
function openModal(id) {
    document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
    document.getElementById(id).style.display = 'flex';
    audioObj.play().catch(e => console.log("Audio play blocked")); // Автоплей при взаимодействии
}

function closeModals() {
    document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
}

// Закрытие по клику на фон
function closeModal(e, id) {
    if(e.target.id === id) document.getElementById(id).style.display = 'none';
}
