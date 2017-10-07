var submit = document.getElementById('submit');

var captureData = function(e) {
    var data = document.getElementById('data');
    sendData(data.value);
}

var sendData = function(message) {

    var xhr = new XMLHttpRequest();
    xhr.open("POST", '/', true);
    xhr.setRequestHeader("Content-type", "text/html");
    xhr.onreadystatechange = function() {
        if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            console.log('Sending: ' + message + '. Successful!');
            console.log(xhr.response);
        }
    }
    xhr.send(message); 
}

submit.addEventListener("click", captureData);

