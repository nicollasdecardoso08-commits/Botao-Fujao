
const bN = document.getElementById('botaoNao');

bN.addEventListener('mouseover', () => {
  const larguraTela = window.innerWidth;
  const alturaTela = window.innerHeight;

  const novaPosicaoX = Math.random() * (larguraTela - 100);
  const novaPosicaoY = Math.random() * (alturaTela - 100);

  bN.style.left = novaPosicaoX + 'px';
  bN.style.top = novaPosicaoY + 'px';
});


const bS = document.getElementById('botaoSim');
bS.addEventListener('click', () => {
  window.location.href = "sim.html";
});

function criarCoracao() {
    const coracao = document.createElement("div");
    coracao.classList.add("coracao");
    coracao.innerHTML = "❤️";

    // posição horizontal aleatória
    coracao.style.left = Math.random() * 100 + "vw";

    // tamanho aleatório
    const tamanho = Math.random() * 20 + 15;
    coracao.style.fontSize = tamanho + "px";

    // duração da queda aleatória
    const duracao = Math.random() * 3 + 4;
    coracao.style.animationDuration = duracao + "s";

    document.body.appendChild(coracao);

    // remove o coração depois que a animação termina
    setTimeout(() => {
      coracao.remove();
    }, duracao * 1000);
  }

  // cria um coração a cada 300ms
  setInterval(criarCoracao, 300);