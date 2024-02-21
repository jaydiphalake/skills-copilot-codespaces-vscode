// Create web server
// 1. npm install express
// 2. npm install body-parser
// 3. npm install nodemon
// 4. nodemon comments.js
// 5. curl -d "comment=Hello" http://localhost:3000/comments
// 6. curl http://localhost:3000/comments
// 7. curl -X DELETE http://localhost:3000/comments/0
// 8. curl -X PUT -d "comment=New Hello" http://localhost:3000/comments/0

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const comments = [];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  comments.push(req.body.comment);
  res.json(comments);
});

app.put('/comments/:index', (req, res) => {
  const index = req.params.index;
  comments[index] = req.body.comment;
  res.json(comments);
});

app.delete('/comments/:index', (req, res) => {
  const index = req.params.index;
  comments.splice(index, 1);
  res.json(comments);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});