const express = require('express');
const open = require('open');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static('src'));

app.get('/', (req, res) => {
	res.sendFile('./src/index.html', { root: __dirname });
});

app.listen(PORT, async () => {
	console.log(`Server listening on port ${PORT}`);
	await open(`http://localhost:${PORT}`);
});
