const express = require('express');
const app = express();
const volleyball = require('volleyball');
const path = require('path');
const PORT = 5553;

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(volleyball);

app.get('/', (req, res, next) => {
  res.status(200).send('index.html');
});

app.listen(PORT, () => {
  console.log('Application is live on port ', PORT);
});
