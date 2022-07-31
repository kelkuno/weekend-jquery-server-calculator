
$(document).ready(onReady);

console.log('js here');

function onReady(){
    console.log('JQ in the house');
    //click listeners-----
    //equals button fires up the math calculations
    $('#equalsBtn').on('click', calculateNum);
    $('#addBtn').on('click', addNum);
    $('#subtractBtn').on('click', subtractNum);
    $('#multiplyBtn').on('click', multiplyNum);
    $('#divideBtn').on('click', divideNum);
    $('#clearBtn').on('click', clearInputs);
}

//operator buttons initialized to false
//if they are clicked, they evaluate to true
let addOp = false;
let subtractOp = false;
let multiplyOp = false;
let divideOp = false;

//main function that sends the user input
//to server via POST on route /calculator
function calculateNum(){
    //console.log('equals clicked');
    $.ajax({
        method: 'POST',
        url: '/calculator',
        data: {
            num1: $('#numOneIn').val(),
            num2: $('#numTwoIn').val(),
            add: addOp,
            subtract: subtractOp,
            multiply: multiplyOp,
            divide: divideOp
        }//end of data being sent
    }).then(function(response){
        console.log('success');
    })//end of function
    //runs display function, which adds the result to a <h3>
    displayAnswer();
    //switch back operation variables to false so that
    //they can be used again to evaluate which operator button
    //is selected by user
    addOp = false;
    subtractOp = false;
    multiplyOp = false;
    divideOp = false;
}//end of calculateNum

function displayAnswer(){
    //empty display fields.
     el = $('#answerDisplay');
     el.empty();
    //GET request from server to get answer
     $.ajax({
        method: 'GET',
        url: '/calculator'
    }).then(function(response){
        console.log('in OG get');
        //uses the calculated answer object to display 
        //math equation in full.
        displayHistory(response);
        //renders the result of last equation to <h3>
        el.append(`
        <h3>${response[response.length-1].answer}</h3>
    `);
    })
}//end of displayFunction 

//function to clear inputs triggered by C button
function clearInputs(){
    console.log('you clicked, clear');
    $('input').val('');
}

//This function uses the answer data object to first evaluate
//which operator button was selected and then 
//reassigns the operator variable to the selected one.
function displayHistory(arrayObject){
    let operator = '';
    if(arrayObject[arrayObject.length-1].add === 'true'){
        operator = '+'
    } else if(arrayObject[arrayObject.length-1].subtract === 'true'){
        operator = '-'
    } else if(arrayObject[arrayObject.length-1].multiply === 'true'){
        operator = '*'
    } else if (arrayObject[arrayObject.length-1].divide === 'true'){
        operator = '/';
    }
    //then it appends the string to the ul list of math equations.
    $('#mathHistory').append(`
    <li>${arrayObject[arrayObject.length-1].num1} ${operator} ${arrayObject[arrayObject.length-1].num2} = ${arrayObject[arrayObject.length-1].answer}</li>
    `)
}//end of displayHistory
    
//These four functions are triggered 
//if a math operator button is selected. 
//the variable evaluates to true if button is clicked. 
function addNum(){
    console.log('add clicked');
    addOp = true;
}
function subtractNum(){
    console.log('subtract clicked');
    subtractOp = true;
}
function multiplyNum(){
    console.log('multiply clicked');
    multiplyOp = true;
}
function divideNum(){
    console.log('divide clicked');
    divideOp = true;
}