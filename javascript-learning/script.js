// Get HTML elements
const input = document.getElementById("studentName");
const button = document.getElementById("addBtn");
const message = document.getElementById("message");

// When button is clicked
button.addEventListener("click", function () {

    // Remove extra spaces
    const name = input.value.trim();

    // Check if input is empty
    if (name === "") {

        message.textContent = "Please enter a student name.";
        message.style.color = "red";

    } else {

        message.textContent = "Student " + name + " has been added successfully!";
        message.style.color = "green";

        // Clear the input
        input.value = "";

    }

});