document.addEventListener("DOMContentLoaded", function () {
    const projetos = obterDadosLocalStorage("projetos");
    const urlParams = new URLSearchParams(window.location.search);
    const projetoIndex = urlParams.get("index");

    if (projetoIndex !== null && projetos[projetoIndex]) {
        const projeto = projetos[projetoIndex];
        document.getElementById("projetoNome").textContent = projeto.nome;
        document.getElementById("grupoAssociado").textContent = `Grupo Associado: ${projeto.grupo}`;
    }
});

function obterDadosLocalStorage(chave) {
    try {
        return JSON.parse(localStorage.getItem(chave)) || [];
    } catch (e) {
        console.error(`Erro ao parsear os dados de ${chave}:`, e);
        return [];
    }
}
