import fs from 'fs';

function main() {
  fs.readFile('pablito.txt', 'utf-8', (err, data) => {
    if (err) {
      console.error('No se pudo abrir el archivo');
      console.error(err);
      process.exit(1);
    }
    fs.writeFile(
      'PABLITO.txt',
      data.toUpperCase(),
      'utf-8',
      (err) => {
        if (err) {
          console.error('No se pudo escribir el archivo');
          console.error(err);
          process.exit(1);
        }
        console.log('¡Archivo creado exitosamente!');
      });
  });
}

main();
