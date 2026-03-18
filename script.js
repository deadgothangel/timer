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
