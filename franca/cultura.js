let indiceAtual = 0;

function mudarSlide(direcao) {
  const slides = document.querySelectorAll('.carrossel-slide');
  const totalSlides = slides.length;

  // Atualizar o índice do slide atual
  indiceAtual += direcao;

  // Garantir que o índice esteja dentro dos limites
  if (indiceAtual >= totalSlides) {
    indiceAtual = 0;
  }
  if (indiceAtual < 0) {
    indiceAtual = totalSlides - 1;
  }

  // Mudar a posição do carrossel
  const carrosselContainer = document.querySelector('.carrossel-container');
  carrosselContainer.style.transform = `translateX(-${indiceAtual * 100}%)`;
}

// Função para transição automática a cada 5 segundos
setInterval(() => mudarSlide(1), 5000);