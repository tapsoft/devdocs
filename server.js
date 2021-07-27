const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 80;
app.set('port', port);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname));
app.get('/:slug/index.json', function(req, res) {
  res.sendFile(path.join(__dirname, 'docs', req.params.slug, 'index.json'));
});
app.get('/:slug/db.json', function(req, res) {
  res.sendFile(path.join(__dirname, 'docs', req.params.slug, 'db.json'));
});

let db = [];
app.get('/:slug/*.html', function(req, res) {
  const slug = req.params.slug;
  const key = req.params[0];
  if (db[slug] === undefined) {
    db[slug] = require(`./docs/${slug}/db.json`);
  }
  res.send(db[slug][key]);
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
