const express = require('express');
const app = express();

const PORT = '3000';

app.use(express.static(__dirname + '/src'));

app.get('/', (req, res) => {
	res.sendFile((__dirname + '/src/videos.html'));
});

app.get('/videos', (req, res) => {
	res.sendFile((__dirname + '/src/videos.html'));
});

app.get('/favoritos', (req, res) => {
	res.sendFile((__dirname + '/src/favorites.html'));
});

app.listen(PORT);
console.log(`Serving at localhost:${PORT}`);