const express = require('express')
var cors = require('cors');
const app = express()
const port = process.env.PORT || 5000
const categories = require('./data/categories.json');
const news = require('./data/news.json');

app.use(cors());

app.get('/', (req, res) => {
  res.send('News API Running');
})

app.get('/news-categories', (req, res) => {
  res.send(categories);
})

app.get('/news/:id', (req, res) => {
  // res.send(news);
  console.log(req.params);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})