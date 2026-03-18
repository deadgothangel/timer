const timerDisp = document.getElementById('timer');
const glitchDisp = document.getElementById('glitch-chars');
const audio = document.getElementById('bg-audio');

// 1. УЛЬТРА-ТАЙМЕР
setInterval(() => {
    const time = Date.now().toString();
    timerDisp.innerText = `${time.slice(-8,-6)}:${time.slice(-6,-4)}:${time.slice(-4,-2)}:${time.slice(-2)}`;
}, 10);

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
}

function openInstr() {
    document.getElementById('modal-main').style.display = 'none';
    document.getElementById('modal-instr').style.display = 'flex';
}

function closeByOverlay(e, id) {
    if(e.target.id === id) document.getElementById(id).style.display = 'none';
}
