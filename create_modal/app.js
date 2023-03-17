var btnopen = document.querySelector('.open-modal-btn');
var modal = document.querySelector('.modal');
var btnclose = document.querySelector('.modal__footer');
var iconclose = document.querySelector('.modal__header i');
function toggleModal() {
    modal.classList.toggle('hide')
}
btnopen.addEventListener('click', toggleModal);
btnclose.addEventListener('click', toggleModal);
iconclose.addEventListener('click', toggleModal);
modal.addEventListener('click', function (e) {
    if (e.target == e.currentTaget) {
        toggleModal();
    }
});
