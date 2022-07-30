// Require express - gives us a function
const e = require('express');
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
    //console.log(req.body);
    mathResponses.push(calculation);
    console.log('the array', mathResponses);
    doMath(calculation);
    res.sendStatus(200);
});

//Functions

function doMath(equationObject){
    let answer = 0;
    let num1 = equationObject.num1;
    let num2 = equationObject.num2;
    let addOp = equationObject.add;
    //break down different operators in conditional
    
    console.log('this is num1', num1);
    console.log('this is num2', num2);
    console.log('this is .add', addOp);
    if(addOp === true){
        answer = num1 + num2;
    }//end of add check
    else{
        answer = 5;
    }
    console.log(answer);
}