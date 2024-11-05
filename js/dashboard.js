document.addEventListener("DOMContentLoaded", function () {
    const grupos = obterDadosLocalStorage("grupos");
    const projetos = obterDadosLocalStorage("projetos");

    const gruposElemento = document.getElementById("grupos");
    const projetosElemento = document.getElementById("projetos");

    grupos.forEach((grupo, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="grupo.html?index=${index}">${grupo.nome}</a>`;
        gruposElemento.appendChild(li);
    });

    projetos.forEach((projeto, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="projeto.html?index=${index}">${projeto.nome}</a>`;
        projetosElemento.appendChild(li);
    });
});

function obterDadosLocalStorage(chave) {
    try {
        return JSON.parse(localStorage.getItem(chave)) || [];
    } catch (e) {
        console.error(`Erro ao parsear os dados de ${chave}:`, e);
        return [];
    }
}
