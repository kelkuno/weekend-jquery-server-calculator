
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
            add: addOp
        }//end of data being sent
    }).then(function(response){
        console.log('success');
        //still to do.
    })//end of function
    displayAnswer();
}//end of calculateNum

function displayAnswer(){
    //empty display fields.
     el = $('#answerDisplay');
     el.empty();

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

    //GET request from server to get answer
   
}//end of displayFunction 


    

function addNum(){
    console.log('add clicked');
    addOp = true;
}
function subtractNum(){
    console.log('subtract clicked');
    addOp = true;
}
function multiplyNum(){
    console.log('multiply clicked');
    addOp = true;
}
function divideNum(){
    console.log('divide clicked');
    addOp = true;
}