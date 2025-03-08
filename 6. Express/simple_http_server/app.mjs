import express from 'express';
import fs from 'fs/promises';

const app = express();
const port = process.env.PORT ?? 8080;
const ipAddress = process.env.C9_HOSTNAME ?? 'localhost';

app.get('/', (req, res) => {
  res.send('Este es el recurso raíz');
});

app.get('/mi_pagina_html', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Mi Página HTML</title>
    </head>
    <body>
      <h1>¡Hola, Mundo!</h1>
      <p>
        Este es un ejemplo.
      </p>
      <p>
        La hora y fecha de hoy: ${ new Date().toISOString() }
      </p>
      <p>
        Fin.
      </p>
    </body>
  </html>
  `);
});

app.get('/chorrito', async (req, res) => {
  let texto = await fs.readFile('chorrito.txt', 'utf-8');
  res.type('txt').send(texto);
});

// Custom 404 page
app.use((req, res) => {
  res.status(404).send(`<h1>404 Not Found: ${ req.originalUrl }</h1>`);
});

app.listen(port, () => {
  console.log(`Servidor esperando en: http://${ ipAddress }:${ port }`);
});
