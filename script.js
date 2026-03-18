const timer = document.getElementById('timer');
const audio = document.getElementById('bg-audio');
const nick = document.getElementById('glitch-nick');

// Таймер
setInterval(() => {
    let mm = Math.floor(Math.random() * 60).toString().padStart(2, '0');
    let ss = Math.floor(Math.random() * 60).toString().padStart(2, '0');
    let ms = Math.floor(Math.random() * 99).toString().padStart(2, '0');
    timer.innerText = `00:${mm}:${ss}:${ms}`;
}, 50);

// Глитч ника
const chars = "ΔΣΦΨΩ777XX???";
setInterval(() => {
    let raw = "DEADGOTHANGEL — ";
    let glitch = "";
    for(let i=0; i<5; i++) glitch += chars[Math.floor(Math.random()*chars.length)];
    nick.innerText = raw + glitch;
}, 100);

// Звук
function toggleMute() {
    audio.muted = !audio.muted;
    document.getElementById('speaker-icon').style.fill = audio.muted ? "#222" : "red";
}

// Окна
function openModal(id) {
    document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
    document.getElementById(id).style.display = 'flex';
}

function closeModal(e, id) {
    if(e.target.className === 'modal') document.getElementById(id).style.display = 'none';
}
