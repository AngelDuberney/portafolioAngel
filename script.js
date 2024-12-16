function applyRandomAnimation() {
  const letters = document.querySelectorAll('.comentario-principal span');
  letters.forEach(letter => {
    // Aleatorio entre -400px (izquierda) y 400px (derecha)
    const randomX = Math.random() < 0.5 ? '-400px' : '400px';
    letter.style.setProperty('--random-x', randomX);
    letter.style.animation = 'moveRandom 0.3s ease-in-out';

    // Restablece la animación al terminar
    letter.addEventListener('animationend', () => {
      letter.style.animation = '';
    });
  });
}

window.addEventListener('scroll', () => {
  applyRandomAnimation();
});


function animarTarjetas(selector, claseAnimacion) {
  const tarjetas = document.querySelectorAll(selector);
  tarjetas.forEach((tarjeta, index) => {
    setTimeout(() => {
      tarjeta.classList.add(claseAnimacion);
    }, index * 500); // Retraso de 0.5s entre cada tarjeta
  });
}

function activarAnimacion() {
  const ventanas = document.querySelectorAll('.ventana');
  ventanas.forEach(ventana => {
    const rect = ventana.getBoundingClientRect();
    if (rect.top <= window.innerHeight - ventana.offsetHeight * 0.15) {
      if (ventana.id === 'ventana-reclutamiento') {
        animarTarjetas('.tarjeta-reclutamiento', 'aparecer-reclutamiento');
      } else if (ventana.id === 'ventana-tecnologias') {
        animarTarjetas('.tarjeta-tecnologias', 'aparecer-tecnologias');
      }
    }
  });
}

window.addEventListener('scroll', activarAnimacion);
