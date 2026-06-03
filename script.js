// ============================================
//   RESIDENT EVIL — CATÁLOGO DA FRANQUIA
//   script.js  (compartilhado entre as páginas)
// ============================================

// ─── DADOS DOS JOGOS ───────────────────────
// Array de objetos. Cada objeto é um jogo completo com todos os dados.
const jogos = [
  {
    id: 1,
    nome: "Resident Evil (1996)",
    nomeSimples: "Resident Evil",
    ano: 1996,
    categoria: "Clássico",
    notaGeral: 9.0,
    descricao: "O jogo que deu início a tudo. Desenvolvido pela Capcom e dirigido por Shinji Mikami, o primeiro Resident Evil colocou os jogadores dentro da Mansão Spencer, cheia de zumbis, criaturas mutantes e segredos sombrios. Câmeras fixas, recursos limitados e uma trilha sonora inquietante criaram uma experiência de horror sem precedentes.",
    sinopse: "Os membros do esquadrão S.T.A.R.S. são enviados investigar desaparecimentos nas montanhas Arklay. Ao serem atacados por uma matilha de cães, se refugiam numa mansão abandonada — que revela ser um laboratório secreto da Umbrella Corporation, palco de experimentos com o vírus T. Cabe a Chris Redfield ou Jill Valentine sobreviver e expor a verdade.",
    avaliacoes: {
      Jogabilidade: 8,
      Gráficos: 7,
      "Design de Áudio": 9,
      História: 9,
      Dificuldade: 8
    },
    plataformas: ["PlayStation 1", "Saturn", "PC (Windows)", "Nintendo DS", "PlayStation 4", "Xbox One"],
    imagem: "Resident_Evil_1996.jpeg"
  },
  {
    id: 2,
    nome: "Resident Evil 2 (1998)",
    nomeSimples: "Resident Evil 2",
    ano: 1998,
    categoria: "Clássico",
    notaGeral: 9.5,
    descricao: "Considerado por muitos o ápice da era clássica da franquia. Com duas campanhas entrelaçadas (Leon S. Kennedy e Claire Redfield) e a icônica Delegacia de Raccoon City como cenário principal, RE2 expandiu tudo o que o original havia estabelecido. Mr. X — o Tyrant que persegue o jogador — tornou-se um dos antagonistas mais marcantes da história dos games.",
    sinopse: "Raccoon City está tomada por zumbis. Leon Kennedy, em seu primeiro dia como policial, e Claire Redfield, em busca de seu irmão Chris, se encontram no meio do caos. Enquanto tentam escapar pela delegacia da cidade e depois pelo laboratório subterrâneo da Umbrella, descobrem a origem do surto e os experimentos por trás do vírus G.",
    avaliacoes: {
      Jogabilidade: 9,
      Gráficos: 8,
      "Design de Áudio": 10,
      História: 10,
      Dificuldade: 8
    },
    plataformas: ["PlayStation 1", "Nintendo 64", "PC (Windows)", "Dreamcast", "GameCube", "PlayStation 4"],
    imagem: "Resident_Evil_2.jpeg"
  },
  {
    id: 3,
    nome: "Resident Evil 3: Nemesis (1999)",
    nomeSimples: "Resident Evil 3: Nemesis",
    ano: 1999,
    categoria: "Clássico",
    notaGeral: 8.5,
    descricao: "Com ritmo mais frenético e focado em ação e fuga, RE3 coloca Jill Valentine como protagonista numa Raccoon City prestes a ser destruída. Nemesis — o bio-arma da Umbrella enviada para eliminar os S.T.A.R.S. — é uma das criaturas mais aterrorizantes já criadas para um jogo: imprevisível, resistente e capaz de perseguir o jogador entre salas.",
    sinopse: "Um dia antes dos eventos de RE2, Jill Valentine tenta escapar de Raccoon City enquanto é implacavelmente perseguida pelo Nemesis, um Tyrant programado especificamente para caçar membros dos S.T.A.R.S. Com a ajuda de mercenários da Umbrella, ela tenta chegar a um helicóptero de evacuação antes da destruição total da cidade.",
    avaliacoes: {
      Jogabilidade: 8,
      Gráficos: 8,
      "Design de Áudio": 9,
      História: 8,
      Dificuldade: 7
    },
    plataformas: ["PlayStation 1", "PC (Windows)", "Dreamcast", "GameCube", "PlayStation 4"],
    imagem: "Resident_Evil_3.jpeg"
  },
  {
    id: 4,
    nome: "Resident Evil 4 (2005)",
    nomeSimples: "Resident Evil 4",
    ano: 2005,
    categoria: "Clássico",
    notaGeral: 10.0,
    descricao: "O jogo mais influente da franquia e um dos mais importantes da história dos videogames. Dirigido novamente por Shinji Mikami, RE4 abandonou o horror lento e adotou uma câmera ao ombro que revolucionou o gênero de ação em terceira pessoa para sempre. Cada elemento — o inventário de mala, os Ganados, o vilão Saddler, os chefes memoráveis — é executado com perfeição absoluta.",
    sinopse: "Leon S. Kennedy, agora agente do governo americano, é enviado à Europa rural para resgatar Ashley Graham, filha do presidente dos EUA, sequestrada por um culto chamado Los Iluminados. Ao chegar numa aldeia espanhola isolada, descobre que os habitantes estão sob controle de um parasita chamado Las Plagas — e que a conspiração vai muito além do que imaginava.",
    avaliacoes: {
      Jogabilidade: 10,
      Gráficos: 10,
      "Design de Áudio": 10,
      História: 9,
      Dificuldade: 9
    },
    plataformas: ["GameCube", "PlayStation 2", "PC (Windows)", "Wii", "PlayStation 3", "Xbox 360", "PlayStation 4", "Xbox One", "Nintendo Switch"],
    imagem: "Resident_Evil_4.jpeg"
  },
  {
    id: 5,
    nome: "Resident Evil 5 (2009)",
    nomeSimples: "Resident Evil 5",
    ano: 2009,
    categoria: "Clássico",
    notaGeral: 7.5,
    descricao: "Apostando forte no co-op cooperativo, RE5 leva Chris Redfield e Sheva Alomar para a África, com um visual espetacular e tiroteios intensos. O horror ficou em segundo plano, mas o jogo em dupla — online ou local — é genuinamente divertido. A revelação de Wesker como antagonista principal tem seus momentos épicos, mesmo que exagerados.",
    sinopse: "Chris Redfield, agora na BSAA (Bioterrorism Security Assessment Alliance), é enviado à região africana de Kijuju com sua parceira Sheva Alomar para investigar um traficante de armas biológicas. Lá, descobre que os habitantes estão sendo infectados por um parasita similar ao Las Plagas, e que por trás de tudo está seu velho inimigo Albert Wesker.",
    avaliacoes: {
      Jogabilidade: 8,
      Gráficos: 9,
      "Design de Áudio": 8,
      História: 6,
      Dificuldade: 7
    },
    plataformas: ["PlayStation 3", "Xbox 360", "PC (Windows)", "PlayStation 4", "Xbox One", "Nintendo Switch"],
    imagem: "Resident_Evil_5.jpeg"
  },
  {
    id: 6,
    nome: "Resident Evil 6 (2012)",
    nomeSimples: "Resident Evil 6",
    ano: 2012,
    categoria: "Atuais",
    notaGeral: 6.0,
    descricao: "O mais ambicioso e controverso da franquia. Com quatro campanhas jogáveis (Leon, Chris, Jake e Ada), RE6 tentou agradar todos os públicos ao mesmo tempo — e acabou sendo dividido por isso. A campanha de Leon é a mais próxima do horror clássico; a de Chris é puro filme de ação. Uma experiência desigual, mas com escala impressionante.",
    sinopse: "Um novo bioterrorismo de escala global estoura simultaneamente em vários países. Leon Kennedy protege o presidente dos EUA, Chris Redfield combate uma milícia na China, e Jake Muller — filho de Wesker — é caçado por seus anticorpos. Por trás de tudo está Neo-Umbrella e a misteriosa Ada Wong (ou sua clone Carla Radames).",
    avaliacoes: {
      Jogabilidade: 7,
      Gráficos: 8,
      "Design de Áudio": 7,
      História: 5,
      Dificuldade: 6
    },
    plataformas: ["PlayStation 3", "Xbox 360", "PC (Windows)", "PlayStation 4", "Xbox One", "Nintendo Switch"],
    imagem: "Resident_Evil_6.jpeg"
  },
  {
    id: 7,
    nome: "Resident Evil 7: Biohazard (2017)",
    nomeSimples: "Resident Evil 7: Biohazard",
    ano: 2017,
    categoria: "Atuais",
    notaGeral: 9.2,
    descricao: "O retorno triunfal ao survival horror. Com perspectiva em primeira pessoa — uma novidade absoluta para a franquia — e suporte a realidade virtual, RE7 reinventou a série do zero, se tornando um dos jogos de horror mais tensos e imersivos da geração. A família Baker é um dos conjuntos de antagonistas mais memoráveis de toda a franquia.",
    sinopse: "Ethan Winters vai a Louisiana atrás de sua esposa desaparecida Mia e se vê preso na fazenda degradada dos Baker, uma família aparentemente infectada por um fungo bioorgânico. O que começa como uma tentativa de fuga se transforma numa descoberta sobre a verdadeira origem da família Baker e a volta da Umbrella sob uma nova roupagem.",
    avaliacoes: {
      Jogabilidade: 9,
      Gráficos: 10,
      "Design de Áudio": 10,
      História: 9,
      Dificuldade: 8
    },
    plataformas: ["PlayStation 4", "Xbox One", "PC (Windows)", "PlayStation VR", "PlayStation 5", "Nintendo Switch (Cloud)"],
    imagem: "Resident_Evil_7.jpeg"
  },
  {
    id: 8,
    nome: "Resident Evil Village (2021)",
    nomeSimples: "Resident Evil Village",
    ano: 2021,
    categoria: "Atuais",
    notaGeral: 8.8,
    descricao: "Sequência direta de RE7, Village eleva a produção e mistura horror gótico europeu com uma narrativa emocionante sobre paternidade. Cada seção do jogo tem um horror diferente — vampiros no castelo de Lady Dimitrescu, lobisomens na aldeia, fantasmas na casa Beneviento — criando variedade e ritmo excelentes. A história de Ethan Winters chega a um desfecho poderoso.",
    sinopse: "Ethan e Mia vivem em paz com sua filha Rose na Europa. Tudo muda quando Chris Redfield invade sua casa e Rose é sequestrada. Ethan acorda numa aldeia da Europa Central dominada por criaturas e governada por quatro Lordes sob o comando da Mãe Miranda — que possui um plano para ressuscitar sua filha morta usando o corpo de Rose.",
    avaliacoes: {
      Jogabilidade: 9,
      Gráficos: 10,
      "Design de Áudio": 9,
      História: 9,
      Dificuldade: 7
    },
    plataformas: ["PlayStation 5", "PlayStation 4", "Xbox Series X/S", "Xbox One", "PC (Windows)", "iPhone 15 Pro", "Mac"],
    imagem: "Resident_Evil_8.jpeg"
  },
  {
    id: 9,
    nome: "Resident Evil 2 Remake (2019)",
    nomeSimples: "Resident Evil 2 Remake",
    ano: 2019,
    categoria: "Remake",
    notaGeral: 9.8,
    descricao: "O remake definitivo e um dos melhores jogos de toda a geração. A Capcom reconstruiu o RE2 do zero com motor RE Engine, câmera ao ombro moderna, gráficos fotorrealistas e Mr. X mais aterrorizante do que nunca. Respeitou cada detalhe do original enquanto tornava tudo mais intenso e acessível. Praticamente perfeito.",
    sinopse: "Remake fiel dos eventos de 1998: Leon Kennedy e Claire Redfield chegam a Raccoon City tomada por zumbis e se refugiam na Delegacia de Polícia. Enquanto tentam escapar, investigam o laboratório subterrâneo da Umbrella e descobrem as origens do surto, sempre perseguidos pelo implacável Mr. X.",
    avaliacoes: {
      Jogabilidade: 10,
      Gráficos: 10,
      "Design de Áudio": 10,
      História: 10,
      Dificuldade: 9
    },
    plataformas: ["PlayStation 4", "Xbox One", "PC (Windows)", "PlayStation 5", "Xbox Series X/S"],
    imagem: "Resident_Evil_2_Remake.jpeg"
  },
  {
    id: 10,
    nome: "Resident Evil 3 Remake (2020)",
    nomeSimples: "Resident Evil 3 Remake",
    ano: 2020,
    categoria: "Remake",
    notaGeral: 7.2,
    descricao: "Visualmente impressionante e com Nemesis mais agressivo do que nunca, o remake de RE3 decepcionou pela brevidade e por cortar conteúdo significativo do original. Comparado ao fenomenal RE2 Remake lançado um ano antes, ficou abaixo das expectativas. Ainda assim, é uma experiência sólida para novos jogadores.",
    sinopse: "Remake dos eventos pré-RE2: Jill Valentine tenta escapar de uma Raccoon City em colapso enquanto é caçada pelo Nemesis, um Tyrant upgradado enviado para eliminar membros dos S.T.A.R.S. Com a ajuda de Carlos Oliveira, mercenário da Umbrella, ela busca uma vacina e uma rota de fuga antes que a cidade seja obliterada.",
    avaliacoes: {
      Jogabilidade: 8,
      Gráficos: 10,
      "Design de Áudio": 9,
      História: 6,
      Dificuldade: 6
    },
    plataformas: ["PlayStation 4", "Xbox One", "PC (Windows)", "PlayStation 5", "Xbox Series X/S"],
    imagem: "Resident_Evil_3_Remake.jpeg"
  },
  {
    id: 11,
    nome: "Resident Evil 4 Remake (2023)",
    nomeSimples: "Resident Evil 4 Remake",
    ano: 2023,
    categoria: "Remake",
    notaGeral: 9.7,
    descricao: "Fazer um remake de um jogo perfeito parecia impossível — a Capcom conseguiu. Mantendo toda a grandiosidade do original, o remake aprofundou os personagens, modernizou combate e movimentação, e adicionou novas camadas à história. Uma obra de amor que tanto respeitou o clássico quanto o elevou.",
    sinopse: "Remake dos eventos de 2005: Leon Kennedy vai à Europa rural resgatar Ashley Graham. A aldeia, o castelo de Salazar, a ilha militar — tudo está de volta com visual deslumbrante e novos elementos narrativos, incluindo uma Ashley mais ativa e um Leon com mais profundidade emocional.",
    avaliacoes: {
      Jogabilidade: 10,
      Gráficos: 10,
      "Design de Áudio": 10,
      História: 10,
      Dificuldade: 9
    },
    plataformas: ["PlayStation 5", "PlayStation 4", "Xbox Series X/S", "PC (Windows)", "iPhone 15 Pro", "Mac"],
    imagem: "Resident_Evil_4_Remake.jpeg"
  },
  {
    id: 12,
    nome: "Resident Evil 0 (2002)",
    nomeSimples: "Resident Evil 0",
    ano: 2002,
    categoria: "Spin-off",
    notaGeral: 7.8,
    descricao: "Prequel que revela os eventos da noite anterior ao primeiro jogo, ambientado num trem e depois num centro de treinamento da Umbrella. O sistema de parceiros — alternar entre Rebecca Chambers e Billy Coen sem baú de itens — é criativo mas pode frustrar. Ótimo para fãs da lore.",
    sinopse: "Rebecca Chambers, médica dos S.T.A.R.S., embarca num trem de transporte de prisioneiros que vai dar errado de formas horríveis. Ela se alia a Billy Coen, soldado condenado à morte, para sobreviver ao ataque de criaturas mutantes e descobrir a conexão com a Umbrella Corporation e seu cientista James Marcus.",
    avaliacoes: {
      Jogabilidade: 7,
      Gráficos: 8,
      "Design de Áudio": 8,
      História: 8,
      Dificuldade: 8
    },
    plataformas: ["GameCube", "Wii", "PC (Windows)", "PlayStation 3", "PlayStation 4", "Xbox 360", "Xbox One", "Nintendo Switch"],
    imagem: "Resident_Evil_0.jpeg"
  },
  {
    id: 13,
    nome: "Resident Evil: Revelations (2012)",
    nomeSimples: "RE: Revelations",
    ano: 2012,
    categoria: "Spin-off",
    notaGeral: 8.0,
    descricao: "Surgido no Nintendo 3DS e depois portado para consoles, Revelations foi uma surpresa enorme: num período em que a franquia estava esquecendo o horror, ele trouxe de volta a tensão e atmosfera dos clássicos. Jill Valentine num navio abandonado, munição escassa e criaturas aquáticas perturbadoras. O modo Raid é viciante.",
    sinopse: "Jill Valentine e Parker Luciani investigam o navio Zenobia, onde encontram pistas sobre uma organização bioterrorista chamada Il Veltro. Em paralelo, Chris Redfield e Jessica Sherawat investigam outra ameaça. As linhas do tempo se entrelaçam revelando uma conspiração maior envolvendo a BSAA e o vírus T-Abyss.",
    avaliacoes: {
      Jogabilidade: 8,
      Gráficos: 8,
      "Design de Áudio": 8,
      História: 8,
      Dificuldade: 7
    },
    plataformas: ["Nintendo 3DS", "PC (Windows)", "PlayStation 3", "Xbox 360", "Wii U", "PlayStation 4", "Xbox One", "Nintendo Switch"],
    imagem: "Resident_Evil_Revelation.jpeg"
  },
  {
    id: 14,
    nome: "Resident Evil: Revelations 2 (2015)",
    nomeSimples: "RE: Revelations 2",
    ano: 2015,
    categoria: "Spin-off",
    notaGeral: 7.9,
    descricao: "Lançado em episódios, Revelations 2 alterna entre Claire Redfield com Moira Burton no presente, e Barry Burton com Natalia numa linha do tempo futura. A narrativa entrelaçada é o ponto forte; o co-op local é divertido com cada dupla tendo habilidades complementares.",
    sinopse: "Claire Redfield e Moira Burton são sequestradas e jogadas numa ilha-prisão abandonada, forçadas a sobreviver sob os experimentos de uma figura misteriosa chamada Overseer. Em paralelo, Barry Burton chega à ilha seis meses depois, acompanhado por Natalia — uma menina com poderes sensoriais que guarda um segredo sobre Moira.",
    avaliacoes: {
      Jogabilidade: 8,
      Gráficos: 7,
      "Design de Áudio": 8,
      História: 8,
      Dificuldade: 7
    },
    plataformas: ["PC (Windows)", "PlayStation 3", "PlayStation 4", "Xbox 360", "Xbox One", "PlayStation Vita", "Nintendo Switch"],
    imagem: "Resident_Evil_Revelation_2.jpeg"
  }
];

// ─── LÓGICA DO CATÁLOGO (somente na index.html) ───────────────
// Verifica se os elementos do catálogo existem na página atual
const catalogGrid  = document.getElementById("catalogGrid");
const emptyState   = document.getElementById("emptyState");
const countNum     = document.getElementById("countNum");
const searchInput  = document.getElementById("searchInput");
const filterBtns   = document.querySelectorAll(".filter-btn");

// Se não encontrou o grid, significa que estamos em outra página — para por aqui
if (catalogGrid) {

  let filtroCategoria = "todos";
  let termoBusca = "";

  // Renderiza os cards no grid a partir de um array de jogos filtrado
  function renderizarJogos(lista) {
    catalogGrid.innerHTML = "";

    if (lista.length === 0) {
      emptyState.hidden = false;
      countNum.textContent = 0;
      return;
    }

    emptyState.hidden = true;
    countNum.textContent = lista.length;

    // Percorre cada jogo e cria um elemento <a> (link para a página de detalhes)
    lista.forEach(function(jogo, index) {
      const card = document.createElement("a");
      card.classList.add("game-card");
      // Passa o ID do jogo na URL para a página de detalhes saber qual exibir
      card.href = "jogo.html?id=" + jogo.id;
      card.style.animationDelay = (index * 0.05) + "s";
      card.setAttribute("aria-label", "Ver detalhes de " + jogo.nome);

      card.innerHTML = `
        <div class="card-img-wrapper">
          <img
            src="${jogo.imagem}"
            alt="Capa de ${jogo.nome}"
            loading="lazy"
            onerror="this.src='https://via.placeholder.com/300x400/1a0000/cc0000?text=${encodeURIComponent(jogo.nomeSimples)}'"
          />
          <span class="card-category category-${jogo.categoria}">${jogo.categoria}</span>
          <span class="card-year">${jogo.ano}</span>
        </div>
        <div class="card-footer">
          <p class="card-title">${jogo.nome}</p>
          <span class="card-nota">★ ${jogo.notaGeral.toFixed(1)} / 10</span>
        </div>
      `;

      catalogGrid.appendChild(card);
    });
  }

  // Filtra o array de jogos com base na categoria e no termo de busca
  function filtrarEAtualizar() {
    const resultado = jogos.filter(function(jogo) {
      // O jogo passa se a categoria bate e se o nome contém o termo buscado
      const passaCategoria = filtroCategoria === "todos" || jogo.categoria === filtroCategoria;
      const passaBusca = jogo.nome.toLowerCase().includes(termoBusca.toLowerCase());
      return passaCategoria && passaBusca;
    });
    renderizarJogos(resultado);
  }

  // Evento: digitação na barra de busca — atualiza o filtro em tempo real
  searchInput.addEventListener("input", function(e) {
    termoBusca = e.target.value;
    filtrarEAtualizar();
  });

  // Evento: clique nos botões de categoria
  filterBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
      filterBtns.forEach(b => b.classList.remove("active"));
      this.classList.add("active");
      filtroCategoria = this.dataset.category;
      filtrarEAtualizar();
    });
  });

  // Renderização inicial com todos os jogos
  renderizarJogos(jogos);
}
