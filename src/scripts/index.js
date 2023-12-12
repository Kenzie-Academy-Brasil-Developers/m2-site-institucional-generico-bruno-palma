function handleModalHeader() {
  const buttonHeader = document.querySelector(".header__button");
  const modalContainer = document.querySelector(".modal__container");

  buttonHeader.addEventListener("click", function () {
    modalContainer.showModal();
    closeModal();
  });
}

function handleModalFaq() {
  const buttonFaq = document.querySelector(".left-side__button");
  const modalContainer = document.querySelector(".modal__container");

  buttonFaq.addEventListener("click", function () {
    modalContainer.showModal();
    closeModal();
  });
}

function closeModal() {
  const buttonClose = document.querySelector(".modal__button");
  const modalContainer = document.querySelector(".modal__container");

  buttonClose.addEventListener("click", function () {
    modalContainer.close();
  });
}

handleModalHeader();
handleModalFaq();
