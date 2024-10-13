

const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");


listaSelecaoPokedevs.forEach(pokedev => {
    pokedev.addEventListener("click",() =>{


        EsconderCartaoPokedev();


  
        const idPokedevSelecionado = mostrarCartaoPokedev(pokedev);


         DesativarPokedevNaListagem();


        AtivarPokedevnaLisagem(idPokedevSelecionado, pokedevAtivoNaListagem);
        



})                              



function mostrarCartaoPokedev(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;

    const idDoCartaoPokedeveParaAbrir = "cartao-" + idPokedevSelecionado;
    const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedeveParaAbrir);
    cartaoPokedevParaAbrir.classList.add("aberto");
    return idPokedevSelecionado;
}

function EsconderCartaoPokedev() {
    const cartaoPokedeveAberto = document.querySelector(".aberto");
    cartaoPokedeveAberto.classList.remove("aberto");
}

    function DesativarPokedevNaListagem() {
        const pokedevAtivoNaListagem = document.querySelector(".ativo");
        pokedevAtivoNaListagem.classList.remove("ativo");
        
    }

    function AtivarPokedevnaLisagem(idPokedevSelecionado, pokedevAtivoNaListagem) {
        const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
        pokedevAtivoNaListagem.classList.add("ativo");
    }






})
