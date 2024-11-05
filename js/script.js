let grupos = JSON.parse(localStorage.getItem("grupos")) || [];
let projetos = JSON.parse(localStorage.getItem("projetos")) || [];

function adicionarGrupo() {
    let nomeGrupo = document.getElementById("nomeGrupo").value;
    if (nomeGrupo) {
        let grupo = { nome: nomeGrupo, participantes: [] };
        grupos.push(grupo);
        salvarDados();
        atualizarListaGrupos();
        document.getElementById("nomeGrupo").value = "";
    } else {
        alert("Por favor, insira um nome para o grupo.");
    }
}

function adicionarParticipante() {
    let nomeParticipante = document.getElementById("nomeParticipante").value;
    let grupoAssociado = document.getElementById("gruposAssociadosParticipante").value;
    if (nomeParticipante && grupoAssociado) {
        let grupo = grupos.find(gr => gr.nome === grupoAssociado);
        if (grupo) {
            grupo.participantes.push(nomeParticipante);
            salvarDados();
            document.getElementById("nomeParticipante").value = "";
        } else {
            alert("Grupo inválido.");
        }
    }
}

function adicionarProjeto() {
    let nomeProjeto = document.getElementById("nomeProjeto").value;
    let grupoAssociado = document.getElementById("gruposAssociados").value;
    if (nomeProjeto && grupoAssociado) {
        let projeto = { nome: nomeProjeto, grupo: grupoAssociado };
        projetos.push(projeto);
        salvarDados();
        document.getElementById("nomeProjeto").value = "";
    }
}

function atualizarListaGrupos() {
    let gruposAssociados = document.getElementById("gruposAssociados");
    let gruposAssociadosParticipante = document.getElementById("gruposAssociadosParticipante");
    gruposAssociados.innerHTML = "";
    gruposAssociadosParticipante.innerHTML = "";

    grupos.forEach(grupo => {
        let option = document.createElement("option");
        option.value = grupo.nome;
        option.innerHTML = grupo.nome;
        gruposAssociados.appendChild(option);

        let optionParticipante = document.createElement("option");
        optionParticipante.value = grupo.nome;
        optionParticipante.innerHTML = grupo.nome;
        gruposAssociadosParticipante.appendChild(optionParticipante);
    });
}

function salvarDados() {
    localStorage.setItem("grupos", JSON.stringify(grupos));
    localStorage.setItem("projetos", JSON.stringify(projetos));
}
