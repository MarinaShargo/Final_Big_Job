const modalButton = document.getElementById("modalButton");
const closeModalButton = document.getElementById("closeModal");
const modal = document.getElementById("modal");

modalButton.addEventListener("click", function() {
    modal.classList.add("show-modal");
})

closeModalButton.addEventListener("click", function() {
    modal.classList.remove("show-modal");
})
