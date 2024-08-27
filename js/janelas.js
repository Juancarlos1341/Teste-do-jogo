function abrirJanelaModalMissoes() {
    document.getElementById("janela-missoes").style.display = 'block';
}

function fecharJanelaPc() {
    document.getElementById('janela-missoes').style.display = 'none';
}

document.getElementById("closeJanelaMissoes").addEventListener("click", function () {
    fecharJanelaPc();
})

function abrirJanelaModalPlacar() {
    document.getElementById("janela-placar").style.display = 'block';
}

function fecharJanelaPlacar() {
    document.getElementById('janela-placar').style.display = 'none';
}
