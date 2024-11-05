document.addEventListener("DOMContentLoaded", function () {
    const grupos = JSON.parse(localStorage.getItem("grupos")) || [];
    const projetos = JSON.parse(localStorage.getItem("projetos")) || [];

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