fetch('dados.json')
  .then(response => response.json())
  .then(filmes => {
    const container = document.getElementById('lista-filmes');

    filmes.forEach(filme => {
      const card = document.createElement('div');
      card.innerHTML = `
        <a href="detalhes.html?id=${filme.id}">
          <img src="${filme.poster}" alt="${filme.titulo}" />
          <h3>${filme.titulo}</h3>
        </a>
      `;
      container.appendChild(card);
    });
  });
  console.log("index.js");
