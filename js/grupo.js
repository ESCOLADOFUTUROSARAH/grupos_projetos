document.addEventListener("DOMContentLoaded", function () {
    const grupos = JSON.parse(localStorage.getItem("grupos")) || [];
    const urlParams = new URLSearchParams(window.location.search);
    const grupoIndex = urlParams.get("index");

    if (grupoIndex !== null && grupos[grupoIndex]) {
        const grupo = grupos[grupoIndex];
        document.getElementById("grupoNome").textContent = grupo.nome;

        const participantesElemento = document.getElementById("participantes");
        grupo.participantes.forEach(participante => {
            const li = document.createElement("li");
            li.textContent = participante;
            participantesElemento.appendChild(li);
        });
    }
});
