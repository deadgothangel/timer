const timerDisp = document.getElementById('timer');
const glitchTarget = document.getElementById('glitch-chars');
const audioObj = document.getElementById('bg-audio');

function updateTimer() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    const ms = String(Math.floor(performance.now() % 1000 / 10)).padStart(2, '0');
    timerDisp.innerText = `${h}:${m}:${s}:${ms}`;
    requestAnimationFrame(updateTimer);
}
updateTimer();

const symbols = "ΔΣΦΨΩ777X?#@";
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
}

function closeModals() {
    document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
}

function closeModal(e, id) {
    if(e.target.className === 'modal') closeModals();
}
