document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("filmes-container");

  fetch("http://localhost:3000/filmes")
    .then(response => {
      if (!response.ok) throw new Error("Erro ao buscar dados.");
      return response.json();
    })
    .then(data => {
      data.forEach(filme => {
        const card = document.createElement("div");
        card.classList.add("filme-card");

        card.innerHTML = `
          <img src="${filme.imagem}" alt="${filme.titulo}" class="filme-img">
          <h2>${filme.titulo}</h2>
          <p>${filme.descricao}</p>
        `;

        container.appendChild(card);
      });
    })
    .catch(error => {
      container.innerHTML = "<p>Erro ao carregar os filmes.</p>";
      console.error(error);
    });
});