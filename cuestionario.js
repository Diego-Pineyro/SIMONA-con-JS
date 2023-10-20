let indicePreguntaActual = 0;
const preguntas = document.querySelectorAll('.pregunta');

function mostrarPregunta(indice) {
  preguntas.forEach((pregunta, i) => {
    if (i === indice) {
      pregunta.style.display = 'block';
    } else {
      pregunta.style.display = 'none';
    }
  });
}

function siguientePregunta() {
  const opcionSeleccionada = document.querySelector(`input[name=q${indicePreguntaActual + 1}]:checked`);
  if (opcionSeleccionada) {
    puntuacionTotal += parseInt(opcionSeleccionada.value, 10);
  }

  if (indicePreguntaActual < preguntas.length - 1) {
    indicePreguntaActual++;
    mostrarPregunta(indicePreguntaActual);
  } else {
    mostrarResultado();
  }
}

function preguntaAnterior() {
  if (indicePreguntaActual > 0) {
    indicePreguntaActual--;
    mostrarPregunta(indicePreguntaActual);
  }
}


// Mostrar la primera pregunta inicialmente
mostrarPregunta(indicePreguntaActual);
