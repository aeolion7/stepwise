const express = require('express');
const app = express();
const path = require('path');
const PORT = 5553;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log('Application is live on port ', PORT);
})
