// Require express - gives us a function
const express = require('express');

// Create an instance of express by calling the function returned above - gives us an object
const app = express();
const port = 5000;

// express static file serving - public is the folder name
app.use(express.static('server/public'));

// Start up our server
app.listen(port, () => {
  console.log('listening on port', port);
});

//You need this line of code otherwise your req.body
//will be undefined. 
app.use(express.urlencoded({extended : true}));

let mathResponses = [];

//POST '/calculator route
app.post('/calculator', function(req,res){
    let calculation = req.body;
    console.log(req.body);
    res.sendStatus(200);
});