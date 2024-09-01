const nave = document.getElementById("nave");
const botaoNorte = document.getElementById("norte");
const botaoSul = document.getElementById("sul");
const botaoOeste = document.getElementById("oeste");
const botaoLeste = document.getElementById("leste");

let posicaoNaveComprimento = 60;
let posicaoNaveLargura = 40;
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

function moverNaveParaNorte() {
    if (posicaoNaveComprimento > -2 && screenHeight > 415) {
        posicaoNaveComprimento -= 1; // Ajuste a velocidade diminuindo o valor subtraído
        nave.style.top = posicaoNaveComprimento + "%";
    }
    if (screenHeight < 415 && posicaoNaveComprimento > -15) {
        posicaoNaveComprimento -= 1; // Ajuste a velocidade diminuindo o valor subtraído
        nave.style.top = posicaoNaveComprimento + "%";
    }
}

function moverNaveParaSul() {
    if (posicaoNaveComprimento < 78 && screenHeight > 415) {
        posicaoNaveComprimento += 1; // Ajuste a velocidade diminuindo o valor adicionado
        nave.style.top = posicaoNaveComprimento + "%";
    }
    if (screenHeight < 415 && posicaoNaveComprimento < 75) {
        posicaoNaveComprimento += 1; // Ajuste a velocidade diminuindo o valor adicionado
        nave.style.top = posicaoNaveComprimento + "%";
    }
}

function moverNaveParaOeste() {
    if (posicaoNaveLargura > 0 && screenWidth > 1000) {
        posicaoNaveLargura -= 1; // Ajuste a velocidade diminuindo o valor subtraído
        nave.style.left = posicaoNaveLargura + "%";
    } 
    if (screenWidth < 1000 && posicaoNaveLargura > 5) {
        posicaoNaveLargura -= 1; // Ajuste a velocidade diminuindo o valor subtraído
        nave.style.left = posicaoNaveLargura + "%";
    }
}

function moverNaveParaLeste() {
    if (posicaoNaveLargura < 85 && screenWidth > 1000) {
        posicaoNaveLargura += 1; // Ajuste a velocidade diminuindo o valor adicionado
        nave.style.left = posicaoNaveLargura + "%";
    }
    if (screenWidth < 1000 && posicaoNaveLargura < 110) {
        posicaoNaveLargura += 1; // Ajuste a velocidade diminuindo o valor adicionado
        nave.style.left = posicaoNaveLargura + "%";
    }
}

let intervaloNorte, intervaloSul, intervaloOeste, intervaloLeste;

// Função para iniciar o movimento
function iniciarMovimento(direcao) {
    if (direcao === 'norte') intervaloNorteM = setInterval(moverNaveParaNorte, 50);
    if (direcao === 'sul') intervaloSulM = setInterval(moverNaveParaSul, 50);
    if (direcao === 'oeste') intervaloOesteM = setInterval(moverNaveParaOeste, 50);
    if (direcao === 'leste') intervaloLesteM = setInterval(moverNaveParaLeste, 50);
}

// Função para parar o movimento
function pararMovimento(direcao) {
    if (direcao === 'norte') clearInterval(intervaloNorteM);
    if (direcao === 'sul') clearInterval(intervaloSulM);
    if (direcao === 'oeste') clearInterval(intervaloOesteM);
    if (direcao === 'leste') clearInterval(intervaloLesteM);
}

// Adicionando eventos de toque para dispositivos móveis
botaoNorte.addEventListener('touchstart', () => {
    botaoNorte.style = "background-color: var(--vermelho);";
    iniciarMovimento('norte');
});

botaoNorte.addEventListener('touchend', () => {
    botaoNorte.style = "background-color: var(--verde);";
    pararMovimento('norte');
});

botaoSul.addEventListener('touchstart', () => {
    botaoSul.style = "background-color: var(--vermelho);";
    iniciarMovimento('sul');
});

botaoSul.addEventListener('touchend', () => {
    botaoSul.style = "background-color: var(--verde);";
    pararMovimento('sul');
});

botaoOeste.addEventListener('touchstart', () => {
    botaoOeste.style = "background-color: var(--vermelho);";
    iniciarMovimento('oeste');
});

botaoOeste.addEventListener('touchend', () => {
    botaoOeste.style = "background-color: var(--verde);";
    pararMovimento('oeste');
});

botaoLeste.addEventListener('touchstart', () => {
    botaoLeste.style = "background-color: var(--vermelho);";
    iniciarMovimento('leste');
});

botaoLeste.addEventListener('touchend', () => {
    botaoLeste.style = "background-color: var(--verde);";
    pararMovimento('leste');
});
