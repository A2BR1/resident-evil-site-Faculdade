// ============================================
//   RESIDENT EVIL — ÁUDIO PERSISTENTE
//   audio.js  (compartilhado entre todas as páginas)
//   Música contínua — retoma do ponto onde parou
// ============================================

(function () {
  const KEY_TIME    = 're_audio_time';
  const KEY_PLAYING = 're_audio_playing';

  // Cria o elemento de áudio
  const audio = document.createElement('audio');
  audio.loop    = true;
  audio.preload = 'auto';
  audio.volume  = 0.05;

  const source = document.createElement('source');
  source.src  = 'sound.mp3';
  source.type = 'audio/mpeg';
  audio.appendChild(source);
  document.body.appendChild(audio);

  // Cria o botão flutuante
  const btn = document.createElement('button');
  btn.id = 'audioBtn';
  btn.title = 'Controle de som';
  btn.style.cssText = `
    position:fixed;bottom:1.5rem;right:1.5rem;z-index:9999;
    width:46px;height:46px;border-radius:50%;
    background:linear-gradient(135deg,#1a1510,#0d0b09);
    border:1px solid #4a3f30;color:#c8860a;font-size:1.2rem;
    cursor:pointer;display:flex;align-items:center;justify-content:center;
    box-shadow:0 4px 16px rgba(0,0,0,.7),0 0 12px rgba(184,0,30,.2);
    transition:all .25s;
  `;
  btn.textContent = '🔊';
  document.body.appendChild(btn);

  let playing = false;
  let muted   = false;

  // Restaura posição salva da página anterior
  const savedTime = parseFloat(localStorage.getItem(KEY_TIME) || '0');
  // Se KEY_PLAYING nunca foi definido (primeira visita), assume true
  const wasMuted  = localStorage.getItem(KEY_PLAYING) === 'false';

  if (wasMuted) {
    btn.textContent = '🔇';
    muted = true;
  }

  // Tenta tocar imediatamente (funciona se o browser permitir)
  function tryPlay() {
    if (muted) return;
    audio.currentTime = savedTime;
    audio.play().then(function () {
      playing = true;
      btn.textContent = '🔊';
    }).catch(function () {
      // Browser bloqueou — aguarda qualquer interação
      playing = false;
    });
  }

  // Tenta logo ao carregar
  tryPlay();

  // Fallback: na primeira interação do usuário, toca se ainda não tocou
  function onFirstInteraction() {
    if (!playing && !muted) {
      tryPlay();
    }
  }
  document.addEventListener('click',      onFirstInteraction);
  document.addEventListener('keydown',    onFirstInteraction);
  document.addEventListener('touchstart', onFirstInteraction);
  document.addEventListener('scroll',     onFirstInteraction);

  // Salva estado antes de sair
  function saveState() {
    localStorage.setItem(KEY_TIME,    audio.currentTime);
    localStorage.setItem(KEY_PLAYING, playing && !muted ? 'true' : 'false');
  }
  window.addEventListener('beforeunload', saveState);
  window.addEventListener('pagehide',     saveState);

  // Botão toggle
  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    if (playing) {
      audio.pause();
      playing = false;
      muted   = true;
      btn.textContent = '🔇';
    } else {
      muted = false;
      audio.currentTime = audio.currentTime;
      audio.play().then(function () {
        playing = true;
        btn.textContent = '🔊';
      });
    }
    saveState();
  });

  btn.addEventListener('mouseenter', function () {
    btn.style.transform  = 'scale(1.1)';
    btn.style.boxShadow  = '0 6px 20px rgba(0,0,0,.8),0 0 16px rgba(200,137,10,.3)';
  });
  btn.addEventListener('mouseleave', function () {
    btn.style.transform  = 'scale(1)';
    btn.style.boxShadow  = '0 4px 16px rgba(0,0,0,.7),0 0 12px rgba(184,0,30,.2)';
  });
})();
