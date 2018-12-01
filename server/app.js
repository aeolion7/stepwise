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

app.use((err, req, res, next) => {
  console.error(err);
  res
    .status(err.status || 500)
    .send(err.message || '500: Internal Server Error.');
});

app.listen(PORT, () => {
  console.log('Application is live on port', PORT);
});
