document.getElementById("uploadForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let formData = new FormData(this);
    fetch("/upload", {
        method: "POST",
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Error uploading text or document");
        }
        return response.json();
    })
    .then(data => {
        alert(data.message);
        document.getElementById("uploadForm").reset();
    })
    .catch(error => {
        console.error("Upload error:", error);
        alert("Error uploading text or document");
    });
});
