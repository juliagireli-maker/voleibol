
const botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) {
    let curtiu = false; // Variável de controle local para cada botão

    botao.addEventListener("click", function () {
        let texto = botao.querySelector("span");

        if (curtiu === false) {
            texto.textContent++;
            curtiu = true;
        } else {
            texto.textContent--;
            curtiu = false;
        }
    });    
});

 querySelector (caso seja apenas um botão) 
const btnTemaEscuro = document.querySelector(".btn-tema-escuro");

if (btnTemaEscuro) {
    btnTemaEscuro.addEventListener("click", function () {
        const corpoPagina = document.body;
        corpoPagina.classList.toggle("tema-escuro"); // O toggle substitui o if/else de adicionar/remover
    });
}