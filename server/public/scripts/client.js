
$(document).ready(onReady);

console.log('js here');

function onReady(){
    console.log('JQ in the house');
    $('#equalsBtn').on('click', calculateNum);
    $('#addBtn').on('click', addNum);
    $('#subtractBtn').on('click', subtractNum);
    $('#multiplyBtn').on('click', multiplyNum);
    $('#divideBtn').on('click', divideNum);

  
}

//operator buttons initialized to false
let addOp = false;
let subtractOp = false;
let multiplyOp = false;
let divideOp = false;

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
        //still to do.
    })//end of function
    displayAnswer();
    //switch back operation variables to false
    addOp = false;
    subtractOp = false;
    multiplyOp = false;
    divideOp = false;
    //clear input fields
    clearInputs();
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
        //render to DOM
        el.append(`
        <h3>${response[response.length-1].answer}</h3>
    `);
    })
}//end of displayFunction 

function clearInputs(){
    $('input').val('');
}


    

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