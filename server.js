const express = require('express');
const { getTimestamp, getUnixTimestamp } = require('./services/getTimestamp');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.get('/:timestamp', (req, res) => {
  const timestamp = req.params.timestamp;

  res.json({
    natural: getTimestamp(timestamp),
    unix: getUnixTimestamp(timestamp)
  });
});

app.listen(3000);
console.log('Listening on port 3000');
