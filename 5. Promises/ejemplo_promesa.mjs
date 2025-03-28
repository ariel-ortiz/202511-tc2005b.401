
let miPromesita = new Promise((resolve, reject) => {
  setTimeout(
    () => {
      let volado = Math.random();
      if (volado < 0.5) {
        resolve('promesa resuelta');
      } else {
        reject('promesa rechazada');
      }
    },
  1000);
});

function main() {
  console.log('Inicio de main');
  setTimeout(() => { console.log('Primer timer.'); }, 200);
  setTimeout(() => { console.log('Segundo timer.'); }, 500);
  setTimeout(() => { console.log('Tercer timer.'); }, 100);
  miPromesita
    .then((valorResuelto) => {
      console.log('Cumplida');
      console.log(valorResuelto);
    })
    .catch((valorRechazado) => {
      console.error('No cumplida');
      console.log(valorRechazado);
    });
  console.log('fin de main');
}

main();
