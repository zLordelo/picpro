const listaOpcoes = document.querySelector(".detalhesConta-opcoesTransacoes")

listaOpcoes.addEventListener("click", identificarOpcoes)
listaOpcoes.addEventListener("click", removerBanner)

function identificarOpcoes(event){
    const target = event.target

    if (target.tagName == "LI"){
        
        const id = target.id

        const transacao = document.querySelector(`div[data-id="${id}"]`)

        removerClassMostrar()

        transacao.classList.add("mostrar")
    }
}

function removerClassMostrar(){
    const divs = document.querySelectorAll(".transacao .container div")

    for (i = 0; i < divs.length; i++){
        divs[i].classList.remove("mostrar")
    }
}

function removerBanner(event){
    const target = event.target

    if (target.tagName == "LI"){
        
        const banner = document.querySelector("#banner")

        banner.removeAttribute("id")
    }
}