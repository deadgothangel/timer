const timerElement = document.getElementById('timer');

function glitchTimer() {
    // Генерируем случайные цифры для эффекта взлома системы
    let mm = Math.floor(Math.random() * 60).toString().padStart(2, '0');
    let ss = Math.floor(Math.random() * 60).toString().padStart(2, '0');
    let ms = Math.floor(Math.random() * 99).toString().padStart(2, '0');
    
    timerElement.innerText = `00:${mm}:${ss}:${ms}`;
}

// Интервал обновления — 50 миллисекунд (очень быстро)
setInterval(glitchTimer, 50);

function openModal() {
    document.getElementById('modal').style.display = "block";
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}
