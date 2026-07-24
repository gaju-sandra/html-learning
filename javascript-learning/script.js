// Get the HTML elements
const input = document.getElementById("studentName");
const button = document.getElementById("addBtn");
const message = document.getElementById("message");

// When the button is clicked...
button.addEventListener("click", function () {

    // Get what the user typed
    const name = input.value;

    // Display a message
    message.textContent = "Welcome " + name + "!";

});