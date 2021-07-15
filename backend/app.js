const express = require('express');
const fetch = require('node-fetch');
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/topalbums', (request, response) => {
  const api_url = 'https://rss.itunes.apple.com/api/v1/us/apple-music/new-releases/all/25/non-explicit.json';
  fetch(api_url)
    .then(res => res.json())
    .then(json => response.send(json));  
})

app.get('/wikisearch/:searchterm', (request, response) => {
  let searchterm = request.params.searchterm;
  let api_url = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=${searchterm}`;
  fetch(api_url)
    .then(res => res.json())
    .then(json => response.send(json));  
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})