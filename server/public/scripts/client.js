$(document).ready(onReady);

console.log('js here');

function onReady(){
    console.log('JQ in the house');
    $('#equalsBtn').on('click', calculateNum);
    $('#addBtn').on('click', addNum);
    // $('#subtractBtn').on('click', subtractNum);
    // $('#multiplyBtn').on('click', multiplyNum);
    // $('#divideBtn').on('click', divideNum);
}

let addOp = false;

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
}//end of calculateNum
    
    

function addNum(){
    console.log('add clicked');
    addOp = true;
}