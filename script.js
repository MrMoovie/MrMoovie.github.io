// script.js

function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    document.getElementById("chat-box").innerHTML += '<div class="user-message">' + userInput + '</div>';
    document.getElementById("user-input").value = "";

    // Simulate AI response (you can modify this logic)
    var response = generateResponse(userInput);
    document.getElementById("chat-box").innerHTML += '<div class="ai-message">' + response + '</div>';
}

function generateResponse(input) {
    // Simulate responses based on input (you can customize this)
    var responses = [
        "Interesting!",
        "Tell me more.",
        "I'm not sure I understand.",
        "That's cool!",
        "How do you feel about that?"
    ];
    var randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
}
