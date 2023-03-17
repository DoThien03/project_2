var btnOpen = document.querySelector('.open-modal-btn');
var btnModal = document.querySelector('.modal');
var btnClose = document.querySelector('.modal_footer');
var iconClose = document.querySelector('.modal_header i');
function toggleModal() {
    btnModal.classList.toggle('hide')
}
btnOpen.addEventListener('click', toggleModal);
btnClose.addEventListener('click', toggleModal);
iconClose.addEventListener('click', toggleModal);
btnModal.addEventListener('click', function (e) {
    if (e.target == e.currentTarget) {
        toggleModal();
    }
});