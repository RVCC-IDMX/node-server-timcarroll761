const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello world and words and words</h1>');
});

server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
