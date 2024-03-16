
let count = 1;
document.getElementById("radio1").checked = true;
setInterval(function () {
    nextImage()
}, 5000);
function nextImage() {
    count++;
    if (count > 2) count = 1;
    document.getElementById("radio" + count).checked = true;
};
const elements = document.querySelectorAll(".hidden");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("show");
        else entry.target.classList.remove("show");
    })
});


elements.forEach((element) => observer.observe(element));
const openModalButton = document.querySelector("#Link-orçamento");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal5");
const fade = document.querySelector("#fade5");
const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
};
[openModalButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});
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