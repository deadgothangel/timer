const timer = document.getElementById('timer-display');
const nick = document.getElementById('glitch-nick');
const audio = document.getElementById('bg-audio');

// 1. ТАЙМЕР (Бесконечный бег)
setInterval(() => {
    const now = Date.now().toString();
    const ms = now.slice(-2);
    const secs = (Math.floor(Date.now() / 1000) % 60).toString().padStart(2, '0');
    // Мы просто заставляем цифры бежать, имитируя отсчет
    timer.innerText = `00:00:${secs}:${ms}`;
}, 30);

// 2. ГЛИТЧ НИКА (Всего слова)
const original = "DEADGOTHANGEL";
const chars = "ΔΣΦΨΩ777X?#@";
setInterval(() => {
    let result = "";
    for(let i = 0; i < original.length; i++) {
        // С шансом 30% заменяем букву на символ
        result += Math.random() > 0.7 ? chars[Math.floor(Math.random()*chars.length)] : original[i];
    }
    nick.innerText = result;
}, 100);

// 3. ЗВУК И МОДАЛКИ
function toggleSound() {
    if (audio.paused) { audio.play(); document.getElementById('spk-icon').style.fill = "red"; }
    else { audio.pause(); document.getElementById('spk-icon').style.fill = "#333"; }
}

function openMod() { document.getElementById('modal-overlay').style.display = 'flex'; }
function forceClose() { document.getElementById('modal-overlay').style.display = 'none'; }
function closeMod(e) { if(e.target.id === 'modal-overlay') forceClose(); }
