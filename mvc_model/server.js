const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cardController = require('./controllers/CardController');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/get-cards', cardController.getCards);
app.post('/submit-form', cardController.submitForm);
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views','index.html'));
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
