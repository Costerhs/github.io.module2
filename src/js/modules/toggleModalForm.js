function toggleModalForm() {
    let openModal = document.querySelector('.start__button');
    let modal = document.querySelector('.modal-none');
    let closeModal = document.querySelector('.modalWindow__close')
    openModal?.addEventListener('click', function () {
        modal.classList.add('modalWindow-bg');
        modal.classList.remove('modal-none')
    });
    closeModal?.addEventListener('click', function () {
        modal.classList.remove('modalWindow-bg');
        modal.classList.add('modal-none')
    });
}

export default toggleModalForm;