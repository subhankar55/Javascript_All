//console.log("Hello World!");
const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BackEnd Tutorials</title>
    <style>
    button {
    background-color: rgb(1, 101, 1);
    color: rgb(234, 246, 238);
    margin: 2 px;
}
    </style>
</head>
<link rel="stylesheet" href="style.css">
<body>
    <div class="container">
        <h1>This Is a BackEnd Tutorial</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, totam.</p>
    </div>
    <button>Explore</button>
</body>
</html>`);// Here in place of 'Hello World' we can write our required html file and converting plain to http we can host our server
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
