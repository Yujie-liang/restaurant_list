const express = require('express');
const app = express();
port = 3000;

app.get('/', (req, res) => {
  res.send('Hello!')
})

app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})