const botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) {
    
    botao.curtiu = false; 

    botao.addEventListener("click", function() { 
        console.log("fui clicado");
        let texto = botao.querySelector("span");

        if (botao.curtiu === false) {  
            texto.textContent++;
            botao.curtiu = true; 
        } else {
            texto.textContent--;
            botao.curtiu = false; 
        }
    });
});