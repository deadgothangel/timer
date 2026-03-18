const timerDisp = document.getElementById('timer');
const glitchDisp = document.getElementById('glitch-chars');
const audio = document.getElementById('bg-audio');

// 1. УЛЬТРА-ТАЙМЕР (Бешеный бег)
setInterval(() => {
    // Получаем текущее время в миллисекундах и берем последние 2 цифры
    let now = Date.now().toString();
    let msGlitch = now.slice(-2);
    let seconds = now.slice(-4, -2);
    
    // Мы просто заставляем цифры бежать, имитируя отсчет
    timerDisp.innerText = `00:00:${seconds}:${msGlitch}`;
}, 10); // Частота обновления 10мс для эффекта глитча

// 2. ГЛИТЧ НИКА
const chars = "ΔΣΦΨΩ777X?#@";
setInterval(() => {
    let res = "";
    for(let i=0; i<5; i++) res += chars[Math.floor(Math.random()*chars.length)];
    glitchDisp.innerText = res;
}, 80);

// 3. ЗВУК И ОКНА
function toggleMute() {
    audio.muted = !audio.muted;
    document.getElementById('spk-icon').style.fill = audio.muted ? "#333" : "red";
}

function openMainModal() {
    document.getElementById('modal-instr').style.display = 'none';
    document.getElementById('modal-main').style.display = 'flex';
    // Попытка запустить музыку при клике (обход блоков браузера)
    audio.play().catch(e => console.log("Audio play blocked"));
}

function openInstr() {
    document.getElementById('modal-main').style.display = 'none';
    document.getElementById('modal-instr').style.display = 'flex';
}

function closeByOverlay(e, id) {
    if(e.target.id === id) document.getElementById(id).style.display = 'none';
}
