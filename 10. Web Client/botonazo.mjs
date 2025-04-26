const miBoton = document.getElementById('mi-boton');
const miContador = document.getElementById('mi-contador');
let contador = 0;

function actualizaContador() {
  contador++;
  miContador.innerText = contador;
  if (contador % 10 === 0) {
    miBoton.style.display = 'none';
    setTimeout(() => {
      miBoton.style.display = 'block';
    }, 5000);
  }
}

miBoton.addEventListener('click', actualizaContador);
