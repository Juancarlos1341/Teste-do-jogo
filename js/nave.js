nave = document.getElementById("nave")
botaoNorte = document.getElementById("norte")
botaoSul = document.getElementById("sul")
botaoOeste = document.getElementById("oeste")
botaoLeste = document.getElementById("leste")

posicaoNaveComprimento = 60
posicaoNaveLargura = 40
intervaloNorte = null
intervaloSul = null
intervaloLeste = null
intervaloOeste = null
const screenWidth = window.screen.width
const screenHeight = window.screen.height

function moverNaveParaNorte(){
    if (posicaoNaveComprimento > -2 && screenHeight > 415){
        posicaoNaveComprimento -= 5
        nave.style.top = posicaoNaveComprimento + "%"
    }
    if (screenHeight < 415 && posicaoNaveComprimento > -20){
        posicaoNaveComprimento -= 5
        nave.style.top = posicaoNaveComprimento + "%"
        console.log(nave.style.top)
    }
}

function moverNaveParaSul(){
    if (posicaoNaveComprimento < 78 && screenHeight > 415){
        posicaoNaveComprimento += 5
        nave.style.top = posicaoNaveComprimento + "%"
    }
    if (screenHeight < 415 && posicaoNaveComprimento < 60){
        posicaoNaveComprimento += 5
        nave.style.top = posicaoNaveComprimento + "%"
        console.log(nave.style.top)
    }
}

function moverNaveParaOeste(){
    if (posicaoNaveLargura < 85 && screenWidth > 1000){
        posicaoNaveLargura += 5
        nave.style.left = posicaoNaveLargura + "%"
    } 
    if(screenWidth < 1000 && posicaoNaveLargura < 105) {
        posicaoNaveLargura += 5
        nave.style.left = posicaoNaveLargura + "%"
        console.log(nave.style.left)
    }
}

function moverNaveParaLeste(){
    if (posicaoNaveLargura > 0 && screenWidth > 1000){
        posicaoNaveLargura -= 5
        nave.style.left = posicaoNaveLargura + "%"
    }
    if(screenWidth < 1000 && posicaoNaveLargura > -30){
        posicaoNaveLargura -= 5
        nave.style.left = posicaoNaveLargura + "%"
        console.log(nave.style.left)
    }
}

botaoNorte.addEventListener('mouseover', () => {
    botaoNorte.style = "background-color: var(--vermelho);"
    intervaloNorte = setInterval(moverNaveParaNorte, 50)
})
botaoNorte.addEventListener('mouseout',() => {
    botaoNorte.style = "background-color: var(--verde);"
    clearInterval(intervaloNorte)
})


botaoSul.addEventListener("mouseover", () =>{
    botaoSul.style = "background-color: var(--vermelho);"
    intervaloSul = setInterval(moverNaveParaSul, 50)
    
})
botaoSul.addEventListener('mouseout',() => {
    botaoSul.style = "background-color: var(--verde);"
    clearInterval(intervaloSul)
})

botaoOeste.addEventListener("mouseover", ()=>{
    botaoOeste.style = "background-color: var(--vermelho);"
    intervaloOeste = setInterval(moverNaveParaOeste,50)
    
})
botaoOeste.addEventListener('mouseout',() => {
    botaoOeste.style = "background-color: var(--verde);"
    clearInterval(intervaloOeste)
})

botaoLeste.addEventListener("mouseover", () => {
    botaoLeste.style = "background-color: var(--vermelho);"
    intervaloLeste = setInterval(moverNaveParaLeste, 50)
    
})
botaoLeste.addEventListener('mouseout',() => {
    botaoLeste.style = "background-color: var(--verde);"
    clearInterval(intervaloLeste)
})
botaoNorte.addEventListener("touchend", () =>{
    botaoNorte.style = "background-color: var(--vermelho);"
    moverNaveParaNorte()
})

window.addEventListener('keydown', (evento) =>{
    tecla = evento.keyCode

    if (tecla == '87' || tecla == '38'){
        botaoNorte.style = "background-color: var(--vermelho);"
        moverNaveParaNorte()
    }
    if (tecla == '83' || tecla == '40' ){
        botaoSul.style = "background-color: var(--vermelho);"
        moverNaveParaSul()
    }
    if (tecla == '65' || tecla == '37'){
        botaoLeste.style = "background-color: var(--vermelho);"
        moverNaveParaLeste()
    }
    if (tecla == '68' || tecla == '39'){
        botaoOeste.style = "background-color: var(--vermelho);"
        moverNaveParaOeste()
    }
 

})

window.addEventListener('keyup', (evento) => {
    tecla = evento.keyCode

    if (tecla == '87' || tecla == '38'){
        botaoNorte.style = "background-color: var(--verde);"
    }
    if (tecla == '83' || tecla == '40' ){
        botaoSul.style = "background-color: var(--verde);"
    }
    if (tecla == '65' || tecla == '37'){
        botaoLeste.style = "background-color: var(--verde);"
    }
    if (tecla == '68' || tecla == '39'){
        botaoOeste.style = "background-color: var(--verde);"
    }
})