"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsShowModal = document.querySelectorAll(".show-modal");
for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener("click", () => {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}
btnCloseModal.addEventListener("click", () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
overlay.addEventListener("click", () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});
