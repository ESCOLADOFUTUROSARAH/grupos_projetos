document.addEventListener("DOMContentLoaded", function () {
    const projetos = JSON.parse(localStorage.getItem("projetos")) || [];
    const urlParams = new URLSearchParams(window.location.search);
    const projetoIndex = urlParams.get("index");

    if (projetoIndex !== null && projetos[projetoIndex]) {
        const projeto = projetos[projetoIndex];
        document.getElementById("projetoNome").textContent = projeto.nome;
        document.getElementById("grupoAssociado").textContent = `Grupo Associado: ${projeto.grupo}`;
    }
});
