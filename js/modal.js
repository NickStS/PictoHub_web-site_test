(() => {
    const modalButtons = document.querySelectorAll("[data-modal-open]");
    const modalCloseButtons = document.querySelectorAll("[data-modal-close]");
    const modals = document.querySelectorAll("[data-modal]");

    modalButtons.forEach((button, index) => {
        button.addEventListener("click", () => toggleModal(modals[index]));
    });

    modalCloseButtons.forEach((button, index) => {
        button.addEventListener("click", () => toggleModal(modals[index]));
    });

    function toggleModal(modal) {
        if (modal.classList.contains("is-hidden")) {
            // Открывание модального окна
            document.body.classList.add("modal-body-open");
            modal.classList.remove("is-hidden");
            // Блокировка скролла
            bodyScrollLock.disableBodyScroll(document.body);
        } else {
            // Закрытие модального окна
            document.body.classList.remove("modal-body-open");
            modal.classList.add("is-hidden");
            // Разблокировка скролла
            bodyScrollLock.enableBodyScroll(document.body);
        }
    }
})();
