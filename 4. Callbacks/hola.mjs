// Comentario de línea

/*
   Comentario de bloque
*/

function unTiempoFuera() {
  console.log('¡tiempo fuera!');
}

console.log('¡Hola, mundo!');

setTimeout(unTiempoFuera, 2000);

setTimeout(
  () => { console.log('¡Otro tiempo fuera!'); },
  1000
);

console.log('Fin de programa');
