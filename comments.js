//create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const commentsPath = path.join(__dirname, 'comments.json');
const comments = require(commentsPath);

//middleware
app.use(bodyParser.json());
app.use(express.static('public'));

//get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

//add a comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  fs.writeFile(commentsPath, JSON.stringify(comments), (err) => {
    if (err) {
      res.status(500).send('An error occurred. Please try again later.');
      console.error('Error writing to comments.json file:', err);
      console.error('Error writing to comments.json file:', err);
    } else {
      res.status(201).send('Comment added');
    }
  });
});

//start server
//app.listen(3000, () => {
  //console.log('Server is running on port 3000');
//});