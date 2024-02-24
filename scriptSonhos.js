
function openWhatsapp() {
  const nome = document.getElementById("input-nome").value;
  const telefone = document.getElementById("input-numero").value;
  const email = document.getElementById("input-email").value;
  const cidadeEstado = document.getElementById("input-cidade").value;
  const valorConta = document.getElementById("input-valorConta").value;
  const Mensagem = document.getElementsByClassName("input-mensagem")[1];
  const url = "https://wa.me/5561994180249?text=" // Seu numero
    + "*Formulário de Contato*" + "%0a" // Mensagem personalizada
    + "%0a" // Quebra de linha
    + "*Nome*: " + nome + "%0a" // Dados do formulário
    + "*Telefone*: " + telefone + "%0a"
    + "*E-mail*: " + email + "%0a"
    + "*Cidade / Estado*: " + cidadeEstado + "%0a%0"
    + "*Valor da conta*: R$ " + valorConta; "%0a%0"
      + "Mensagem: " + Mensagem;
  window.open(url, '_blank').focus();
};
const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");
const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};
[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});
const openModalButton2 = document.querySelector("#open-modal2");
const closeModalButton2 = document.querySelector("#close-modal2");
const modal2 = document.querySelector("#modal2");
const fade2 = document.querySelector("#fade2");
const toggleModal2 = () => {
  modal2.classList.toggle("hide");
  fade2.classList.toggle("hide");
};
[openModalButton2, closeModalButton2, fade2].forEach((el) => {
  el.addEventListener("click", () => toggleModal2());
});
const openModalButton3 = document.querySelector("#open-modal3");
const closeModalButton3 = document.querySelector("#close-modal3");
const modal3 = document.querySelector("#modal3");
const fade3 = document.querySelector("#fade3");
const toggleModal3 = () => {
  modal3.classList.toggle("hide");
  fade3.classList.toggle("hide");
};
[openModalButton3, closeModalButton3, fade3].forEach((el) => {
  el.addEventListener("click", () => toggleModal3());
});
const openModalButton4 = document.querySelector("#open-modal4");
const closeModalButton4 = document.querySelector("#close-modal4");
const modal4 = document.querySelector("#modal4");
const fade4 = document.querySelector("#fade4");
const toggleModal4 = () => {
  modal4.classList.toggle("hide");
  fade4.classList.toggle("hide");
};
[openModalButton4, closeModalButton4, fade4].forEach((el) => {
  el.addEventListener("click", () => toggleModal4());
});
const openModalButton5 = document.querySelector("#Link-orçamento");
const closeModalButton5 = document.querySelector("#close-modal5");
const modal5 = document.querySelector("#modal5");
const fade5 = document.querySelector("#fade5");
const toggleModal5 = () => {
  modal5.classList.toggle("hide");
  fade5.classList.toggle("hide");
};
[openModalButton5, closeModalButton5, fade5].forEach((el) => {
  el.addEventListener("click", () => toggleModal5());
});