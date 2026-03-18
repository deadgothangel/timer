const timerDisp = document.getElementById('timer');
const audioObj = document.getElementById('bg-audio');
const glitchTarget = document.getElementById('glitch-chars');

// ТАЙМЕР В 30 РАЗ БЫСТРЕЕ (Бешеный бег миллисекунд)
setInterval(() => {
    // Получаем текущее время в миллисекундах и берем последние 2 цифры
    let now = Date.now().toString();
    let msGlitch = now.slice(-2);
    
    // Мы просто заставляем цифры бежать, имитируя отсчет
    timerDisp.innerText = `00:00:00:${msGlitch}`;
}, 10); // Частота обновления 10мс для эффекта глитча

// ГЛИТЧ НИКА (только в части символов)
const symbols = "ΔΣΦΨΩ777X?#@";
setInterval(() => {
    let out = "";
    for(let i=0; i<5; i++) out += symbols[Math.floor(Math.random()*symbols.length)];
    glitchTarget.innerText = out;
}, 80);

// Управление звуком (По клику на динамик)
function toggleMute() {
    audioObj.muted = !audioObj.muted;
    document.getElementById('speaker-icon').style.fill = audioObj.muted ? "#333" : "red";
}

// !!! ЛОГИКА ОКОН !!!

function openModal(id) {
    document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
    document.getElementById(id).style.display = 'flex';
    // Попытка запустить музыку при клике (обход блоков браузера)
    audioObj.play().catch(e => console.log("Audio play blocked"));
}

function openInstr() {
    openModal('instr-modal');
}

function closeModals() {
    document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
}

// Закрытие по клику на фон
function closeModal(e, id) {
    if(e.target.className === 'modal') closeModals();
}
