function sendMessage() {
    let userInput = document.getElementById("userInput").value;
    if (userInput.trim() === "") return;
    
    let chatBox = document.getElementById("chatBox");
    chatBox.innerHTML += "<div><strong>You:</strong> " + userInput + "</div>";

    fetch("/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ query: userInput })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Error fetching response");
        }
        return response.json();
    })
    .then(data => {
        chatBox.innerHTML += "<div><strong>ChatBot:</strong> " + data.response + "</div>";
    })
    .catch(error => {
        console.error("Chat error:", error);
        chatBox.innerHTML += "<div><strong>ChatBot:</strong> Error fetching response</div>";
    });

    document.getElementById("userInput").value = "";
}
