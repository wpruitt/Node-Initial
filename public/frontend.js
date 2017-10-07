console.log('frontend js connected!');

var submit = document.getElementById('submit');


var captureData = function(e) {
    var data = document.getElementById('data');
    console.log('Data received:');
    console.log(data.value);
    sendData(data.value);
}

var sendData = function(data) {
    
}

submit.addEventListener("click", captureData);

