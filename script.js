// script.js

function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    document.getElementById("chat-box").innerHTML += '<div class="user-message">' + userInput + '</div>';
    document.getElementById("user-input").value = "";

    // Send user input to server and get response
    fetch('/message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userInput }),
    })
    .then(response => response.json())
    .then(data => {
        var response = data.message;
        document.getElementById("chat-box").innerHTML += '<div class="ai-message">' + response + '</div>';
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

