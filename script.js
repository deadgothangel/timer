const timerDisp = document.getElementById('timer');
const audioObj = document.getElementById('bg-audio');
const glitchTarget = document.getElementById('glitch-chars');

// Таймер (эффект бегущих цифр)
setInterval(() => {
    let ms = Math.floor(Math.random() * 99).toString().padStart(2, '0');
    timerDisp.innerText = `00:00:00:${ms}`;
}, 30);

// Глитч ника
const symbols = "ΔΣΦΨΩ777X#@";
setInterval(() => {
    let out = "";
    for(let i=0; i<5; i++) out += symbols[Math.floor(Math.random()*symbols.length)];
    glitchTarget.innerText = out;
}, 100);

function toggleMute() {
    audioObj.muted = !audioObj.muted;
    document.getElementById('speaker-icon').style.fill = audioObj.muted ? "#333" : "red";
}

function openModal(id) {
    document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
    document.getElementById(id).style.display = 'flex';
    audioObj.play().catch(() => {});
}

function closeModals() {
    document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
}

function closeModal(e, id) {
    if(e.target.className === 'modal') closeModals();
}
