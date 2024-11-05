let grupos = obterDadosLocalStorage("grupos");
let projetos = obterDadosLocalStorage("projetos");

function adicionarGrupo() {
    let nomeGrupo = document.getElementById("nomeGrupo").value.trim();
    if (nomeGrupo) {
        if (grupos.some(gr => gr.nome === nomeGrupo)) {
            mostrarMensagem("Esse grupo já existe. Escolha outro nome.", "erro");
        } else {
            let grupo = { nome: nomeGrupo, participantes: [] };
            grupos.push(grupo);
            salvarDados();
            atualizarListaGrupos();
            document.getElementById("nomeGrupo").value = "";
            mostrarMensagem("Grupo adicionado com sucesso!", "sucesso");
        }
    } else {
        mostrarMensagem("Por favor, insira um nome para o grupo.", "erro");
    }
}

function adicionarParticipante() {
    let nomeParticipante = document.getElementById("nomeParticipante").value.trim();
    let grupoAssociado = document.getElementById("gruposAssociadosParticipante").value;
    if (nomeParticipante && grupoAssociado) {
        let grupo = grupos.find(gr => gr.nome === grupoAssociado);
        if (grupo) {
            if (grupo.participantes.includes(nomeParticipante)) {
                mostrarMensagem("Esse participante já está no grupo.", "erro");
            } else {
                grupo.participantes.push(nomeParticipante);
                salvarDados();
                document.getElementById("nomeParticipante").value = "";
                mostrarMensagem("Participante adicionado com sucesso!", "sucesso");
            }
        } else {
            mostrarMensagem("Grupo inválido.", "erro");
        }
    } else {
        mostrarMensagem("Por favor, preencha todos os campos.", "erro");
    }
}

function adicionarProjeto() {
    let nomeProjeto = document.getElementById("nomeProjeto").value.trim();
    let grupoAssociado = document.getElementById("gruposAssociados").value;
    if (nomeProjeto && grupoAssociado) {
        if (projetos.some(pr => pr.nome === nomeProjeto)) {
            mostrarMensagem("Esse projeto já existe. Escolha outro nome.", "erro");
        } else {
            let projeto = { nome: nomeProjeto, grupo: grupoAssociado };
            projetos.push(projeto);
            salvarDados();
            document.getElementById("nomeProjeto").value = "";
            mostrarMensagem("Projeto adicionado com sucesso!", "sucesso");
        }
    } else {
        mostrarMensagem("Por favor, preencha todos os campos.", "erro");
    }
}

function atualizarListaGrupos() {
    criarOpcoesSelect(document.getElementById("gruposAssociados"), grupos);
    criarOpcoesSelect(document.getElementById("gruposAssociadosParticipante"), grupos);
}

function criarOpcoesSelect(elemento, grupos) {
    elemento.innerHTML = "";
    grupos.forEach(grupo => {
        let option = document.createElement("option");
        option.value = grupo.nome;
        option.innerHTML = grupo.nome;
        elemento.appendChild(option);
    });
}

function salvarDados() {
    localStorage.setItem("grupos", JSON.stringify(grupos));
    localStorage.setItem("projetos", JSON.stringify(projetos));
}

function obterDadosLocalStorage(chave) {
    try {
        return JSON.parse(localStorage.getItem(chave)) || [];
    } catch (e) {
        console.error(`Erro ao parsear os dados de ${chave}:`, e);
        return [];
    }
}

function mostrarMensagem(mensagem, tipo) {
    const divMensagem = document.createElement("div");
    divMensagem.textContent = mensagem;
    divMensagem.className = `mensagem ${tipo}`;
    document.body.appendChild(divMensagem);

    setTimeout(() => {
        divMensagem.remove();
    }, 3000);
}

document.addEventListener("DOMContentLoaded", atualizarListaGrupos);
