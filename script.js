const timerDisp = document.getElementById('timer');
const glitchDisp = document.getElementById('glitch-chars');

// ТАЙМЕР В 30 РАЗ БЫСТРЕЕ
// Используем Performance.now() для точности на высоких скоростях
setInterval(() => {
    const time = Date.now().toString();
    const part1 = time.slice(-8, -6);
    const part2 = time.slice(-6, -4);
    const part3 = time.slice(-4, -2);
    const part4 = time.slice(-2); // Самые быстрые цифры
    
    timerDisp.innerText = `${part1}:${part2}:${part3}:${part4}`;
}, 10); // 10мс = 100 кадров в секунду, будет лететь

// ГЛИТЧ СИМВОЛОВ (только после тире)
const chars = "ΔΣΦΨΩ777X?#@";
setInterval(() => {
    let res = "";
    for(let i=0; i<5; i++) res += chars[Math.floor(Math.random()*chars.length)];
    glitchDisp.innerText = res;
}, 100);

function openModal() { document.getElementById('modal').style.display = 'flex'; }
function closeModal(e) { if(e.target.id === 'modal') document.getElementById('modal').style.display = 'none'; }
