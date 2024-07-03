const express = require('express');
const app = express();

const PORT = '3000';

app.use(express.static(__dirname + '/src'));

app.get('/', (_: any, res: any) => {
	res.sendFile((__dirname + '/src/index.html'));
});

app.get('/videos', (_: any, res: any) => {
	res.sendFile((__dirname + '/src/index.html'));
});

app.get('/favoritos', (_: any, res: any) => {
	res.sendFile((__dirname + '/src/favorites.html'));
});

app.listen(PORT);
console.log(`Serving at localhost:${PORT}`);