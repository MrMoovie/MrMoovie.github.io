// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9yqgfHRQ1pZeQs5L3ovJD32t4badslo8",
  authDomain: "ai-chat-5bd5d.firebaseapp.com",
  databaseURL: "https://ai-chat-5bd5d-default-rtdb.firebaseio.com",
  projectId: "ai-chat-5bd5d",
  storageBucket: "ai-chat-5bd5d.appspot.com",
  messagingSenderId: "562671342561",
  appId: "1:562671342561:web:2e664e412c546f2f00f8a0",
  measurementId: "G-6GC4XVF5V1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function sendMessage() {
    var userInput = document.getElementById("user-input").value.trim();

    if (userInput !== "") {
        messagesRef.push({
            text: userInput,
            sender: "user"
        });
        document.getElementById("user-input").value = "";
    }
}

messagesRef.on('child_added', function(snapshot) {
    var message = snapshot.val();
    var chatBox = document.getElementById("chat-box");

    var messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.textContent = message.text;

    if (message.sender === "user") {
        messageElement.classList.add("user-message");
    } else {
        messageElement.classList.add("ai-message");
    }

    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
});
