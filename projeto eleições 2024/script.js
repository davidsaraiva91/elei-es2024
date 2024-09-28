document.getElementById("buscar").addEventListener("click", function () {
  const estado = document.getElementById("estado").value;

  if (!estado) {
    alert("Por favor, insira a sigla da cidade.");
    return;
  }

  buscarResultados(estado);
});

function buscarResultados(estado) {
  // resutado das eleiçoes
  const url = `https://api.eleicoes2024.com/resultados/${cidade}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro na requisição");
      }
      return response.json();
    })
    .then((data) => {
      mostrarResultados(data);
    })
    .catch((error) => {
      document.getElementById(
        "resultados"
      ).innerHTML = `<p>Erro: ${error.message}</p>`;
    });
}

function mostrarResultados(resultados) {
  const container = document.getElementById("resultados");
  container.innerHTML = ""; // limpa os resultados

  // formata os resultado da forma desejada
  resultados.forEach((resultado) => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${resultado.candidato}</h3><p>Votos: ${resultado.votos}</p>`;
    container.appendChild(div);
  });
}
