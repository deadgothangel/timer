const timerElement = document.getElementById('timer');
const audio = document.getElementById('bg-audio');
const speakerIcon = document.getElementById('speaker-icon');
const glitchTitle = document.querySelector('.error-title');

// Бешеный глитч-эффект для таймера
function glitchTimer() {
    let mm = Math.floor(Math.random() * 99).toString().padStart(2, '0');
    let ss = Math.floor(Math.random() * 99).toString().padStart(2, '0');
    let ms = Math.floor(Math.random() * 99).toString().padStart(2, '0');
    
    timerElement.innerText = `00:${mm}:${ss}:${ms}`;
}

// Запуск таймера
setInterval(glitchTimer, 50);

// !!! УПРАВЛЕНИЕ ЗВУКОМ (По клику на динамик) !!!
function toggleAudio() {
    if (audio.paused) {
        audio.play().catch(e => console.log("Audio play blocked"));
        speakerIcon.style.fill = "#555"; // Серый при включении
    } else {
        audio.pause();
        speakerIcon.style.fill = "#222"; // Почти черный при выключении
    }
}

// Слушатель клика по иконке
speakerIcon.addEventListener('click', toggleAudio);

// !!! ЛОГИКА ОКОН !!!

const mainModal = document.getElementById('main-modal');
const instrModal = document.getElementById('instr-modal');

function openMainModal() {
    closeAllModals();
    mainModal.style.display = "block";
    // Попытка запустить музыку при клике (обход блоков браузера)
    audio.play().catch(e => console.log("Audio play blocked"));
}

function openInstrModal() {
    closeAllModals();
    instrModal.style.display = "block";
}

function closeAllModals() {
    mainModal.style.display = "none";
    instrModal.style.display = "none";
}
