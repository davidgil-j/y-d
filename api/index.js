export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Test</title>
    </head>
    <body style="display: flex; align-items: center; justify-content: center; height: 100vh; font-size: 48px; font-family: Arial;">
      hola
    </body>
    </html>
  `);
}
