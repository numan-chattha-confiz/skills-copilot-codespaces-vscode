// create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

//parse body of post request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//get comments from json file
app.get('/comments', function(req, res){
    fs.readFile('comments.json', 'utf8', function(err, data){
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });
});

//add comments to json file
app.post('/comments', function(req, res){
    fs.readFile('comments.json', 'utf8', function(err, data){
        if(err){
            console.log(err);
        }
        else{
            var comments = JSON.parse(data);
            comments.push(req.body);
            fs.writeFile('comments.json', JSON.stringify(comments), function(err){
                if(err){
                    console.log(err);
                }
                else{
                    res.send('Comment added');
                }
            });
        }
    });
});

//start server
app.listen(3000, function(){
    console.log('Server is running on port 3000');
});
//create a variable to store the express module
//require the express module
var express = require('express');
//create an instance of the express module
var app = express();
//require the body-parser module
var bodyParser = require('body-parser');
//parse the request body
app.use(bodyParser.json());
//require the mongodb module
var mongodb = require('mongodb');
//create a variable to store the MongoClient
var MongoClient = mongodb.MongoClient;
//create a variable to store the url of the database
var url = 'mongodb://localhost:27017/comments';
//create a variable to store the collection of the database
var collection;
//connect to the database
MongoClient.connect(url, function(err, db){
    if(err){
        console.log('Unable to connect to the Server', err);
    } else {
        console.log('Connected to Server');
        collection = db.collection('comments');
    }
});
//create a variable to store the port number
var port = 3000;
//create a variable to store the ip address
var ip = '127.0.0.1';
