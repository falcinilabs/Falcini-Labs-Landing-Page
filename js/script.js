const button = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu_header');

button.addEventListener("click", function(){
    menu.classList.toggle("aberto");
    button.classList.toggle("ativo");
    
    const menuAberto = menu.classList.contains("aberto");

    if (menuAberto) {
        button.setAttribute("aria-label","Fechar menu");
    }else {
        button.setAttribute("aria-label","Abrir menu");
    }
});

const shareButton = document.querySelector("#share");

    shareButton.addEventListener("click", async () => {
        try{
            await navigator.share({ title: "Falcini Labs", url:"http://falcinilabs.com.br/"});
            console.log("Compartilhado com sucesso!");
        } catch (err) {
            console.error("Erro ao compartilhar", err.message);
        }
});