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

//variables outside of the functions

let storedAnswers = [];
let answer = 0;

//POST '/calculator route
//This post route takes in the the math object 
//that includes the two num inputs and 
//boolean alerting which math operation
//has been selected.
//The object then goes through doMath function
//Does the calculation and makes a new object
//to be stored in storedAnswers array. 
app.post('/calculator', function(req,res){
    let calculation = req.body;
    //console.log(req.body);
    doMath(calculation);
    res.sendStatus(200);
});

//GET on /calculator route
//This GET request will serve the client
//the storedAnswers array that contain the 
//dataObject created from the doMath function.
app.get('/calculator', function(req,res){
    console.log('in server GET');
    console.log(storedAnswers);
    res.send(storedAnswers);
})

//Functions
//doMath function creates new variables and assigns them to 
//object properties and proceeds to do the math equation.
//the return is creating an object and pushing it to
//the storedAnswers array. 
function doMath(equationObject){
    let num1 = parseInt(equationObject.num1);
    let num2 = parseInt(equationObject.num2);
    let addOp = equationObject.add;
    let subtractOp = equationObject.subtract;
    let multiplyOp = equationObject.multiply;
    let divideOp = equationObject.divide;

    //break down different operators in conditional
    
    console.log('this is num1', num1);
    console.log('this is num2', num2);
    console.log('this is .add', addOp);
    //the conditionals to check which operator was selected.
    //if the math operator evaluates to true, that corresponding
    //operator was selected by user and math should reflect. 
    if(addOp === 'true'){
        answer = num1 + num2;
    }//end of add check
    else if(subtractOp === 'true'){
        answer = num1 - num2;
    }//end of subtract check
    else if(multiplyOp === 'true'){
        answer = num1 * num2;
    }//end of multiply check
    else if(divideOp === 'true'){
        answer = num1 / num2;
    }//end of divide check
    console.log(answer);
    storedAnswers.push({answer: answer, num1: num1, num2: num2, add: addOp, subtract: subtractOp, multiply: multiplyOp, divide: divideOp });
    // answer = 0;
    //function to reset answer to 0
}