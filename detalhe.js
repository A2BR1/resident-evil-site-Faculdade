// ============================================
//   RESIDENT EVIL — CATÁLOGO DA FRANQUIA
//   detalhe.js  (somente na jogo.html)
// ============================================

// Lê o parâmetro "id" da URL (ex: jogo.html?id=4)
const params = new URLSearchParams(window.location.search);
const jogoId = parseInt(params.get("id")); // converte para número inteiro

// Busca no array de jogos (definido em script.js) o jogo com o ID correspondente
const jogo = jogos.find(function(j) { return j.id === jogoId; });

// Referência ao container onde o conteúdo será inserido
const container = document.getElementById("detailContainer");

// Se não encontrou nenhum jogo com esse ID, exibe mensagem de erro
if (!jogo) {
  container.innerHTML = `
    <p style="font-family:var(--font-mono);color:var(--text-muted);letter-spacing:.1em;padding:3rem;">
      ☣ Jogo não encontrado. <a href="index.html" style="color:var(--red-primary)">Voltar ao catálogo</a>
    </p>
  `;
} else {

  // Atualiza o título da aba do navegador com o nome do jogo
  document.title = jogo.nomeSimples + " — Resident Evil Database";

  // Constrói as linhas de avaliação dinamicamente a partir do objeto jogo.avaliacoes
  // Object.entries() transforma o objeto em array de pares [chave, valor]
  const linhasAvaliacao = Object.entries(jogo.avaliacoes).map(function(entrada) {
    const criterio = entrada[0]; // nome do critério (ex: "Jogabilidade")
    const nota = entrada[1];     // nota do critério (ex: 9)
    const barraLargura = (nota / 10) * 100; // converte para porcentagem

    return `
      <div class="rating-row">
        <span class="rating-label">${criterio}</span>
        <div class="rating-bar-bg">
          <div class="rating-bar-fill" style="width: ${barraLargura}%"></div>
        </div>
        <span class="rating-num">${nota}</span>
      </div>
    `;
  }).join(""); // junta todos os itens em uma única string HTML

  // Constrói a lista de plataformas dinamicamente a partir do array jogo.plataformas
  const listaPlataformas = jogo.plataformas.map(function(plat) {
    return `<div class="platform-item">${plat}</div>`;
  }).join("");

  // Monta o HTML completo da página de detalhes e insere no container
  container.innerHTML = `

    <!-- Descrição do jogo -->
    <article class="detail-desc">
      <h2>${jogo.nome}</h2>
      <p class="meta">
        ${jogo.ano} &nbsp;|&nbsp; ${jogo.categoria} &nbsp;|&nbsp;
        <span style="color:var(--red-bright)">★ ${jogo.notaGeral.toFixed(1)} / 10</span>
      </p>
      <p>${jogo.descricao}</p>
    </article>

    <!-- Imagem do jogo -->
    <div class="detail-img-wrap">
      <img
        src="${jogo.imagem}"
        alt="Capa de ${jogo.nome}"
        onerror="this.src='https://via.placeholder.com/300x400/1a0000/cc0000?text=${encodeURIComponent(jogo.nomeSimples)}'"
      />
      <p class="detail-img-caption">${jogo.nomeSimples.toUpperCase()}</p>
    </div>

    <!-- Sinopse -->
    <section class="detail-sinopse">
      <h3>Sinopse</h3>
      <p>${jogo.sinopse}</p>
    </section>

    <!-- Avaliação por critério -->
    <section class="detail-avaliacao">
      <h3>Avaliação</h3>
      ${linhasAvaliacao}
    </section>

    <!-- Plataformas disponíveis -->
    <section class="detail-platforms">
      <h3>Disponível em</h3>
      <div class="platform-list">
        ${listaPlataformas}
      </div>
    </section>

  `;
}
