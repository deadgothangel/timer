const timerElement = document.getElementById('timer');

function glitchTimer() {
    // Безумная генерация цифр
    let mm = Math.floor(Math.random() * 99).toString().padStart(2, '0');
    let ss = Math.floor(Math.random() * 99).toString().padStart(2, '0');
    let ms = Math.floor(Math.random() * 99).toString().padStart(2, '0');
    
    timerElement.innerText = `00:${mm}:${ss}:${ms}`;
}

// Обновление каждые 50мс для эффекта поломки
setInterval(glitchTimer, 50);

function openModal() {
    document.getElementById('modal').style.display = "block";
    // Включаем музыку, если она заблокирована браузером
    document.getElementById('bg-audio').play();
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}
