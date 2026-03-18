const timerElement = document.getElementById('timer');
const audio = document.getElementById('bg-audio');

function glitchTimer() {
    let mm = Math.floor(Math.random() * 99).toString().padStart(2, '0');
    let ss = Math.floor(Math.random() * 99).toString().padStart(2, '0');
    let ms = Math.floor(Math.random() * 99).toString().padStart(2, '0');
    
    timerElement.innerText = `00:${mm}:${ss}:${ms}`;
}

setInterval(glitchTimer, 50);

function openModal() {
    document.getElementById('modal').style.display = "block";
    // Попытка запустить музыку при клике (обход блоков браузера)
    audio.play().catch(e => console.log("Audio play blocked"));
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}
