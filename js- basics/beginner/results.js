
// ===============================
// RESULTS PAGE
// ===============================


// ===============================
// GET HTML ELEMENTS
// ===============================

let resultsList =
    document.getElementById("resultsList");

let resultFilter =
    document.getElementById("resultFilter");


// ===============================
// GET STUDENTS FROM LOCAL STORAGE
// ===============================

let students =
    JSON.parse(localStorage.getItem("students")) || [];


// ===============================
// DISPLAY RESULTS
// ===============================

function displayResults() {

    // Clear the page first
    resultsList.innerHTML = "";


    // ===============================
    // CHECK IF THERE ARE NO STUDENTS
    // ===============================

    if (students.length === 0) {

        resultsList.innerHTML =
            "<p>No student results available.</p>";

        return;
    }


    // ===============================
    // GET SELECTED FILTER
    // ===============================

    let selectedFilter =
        resultFilter.value;


    // ===============================
    // STUDENTS TO DISPLAY
    // ===============================

    let studentsToDisplay;


    // ===============================
    // SHOW ALL STUDENTS
    // ===============================

    if (selectedFilter === "all") {

        studentsToDisplay = students;

    }


    // ===============================
    // SHOW PASSED STUDENTS
    // ===============================

    else if (selectedFilter === "passed") {

        studentsToDisplay =
            students.filter(function(student) {

                return student.result === "Passed";

            });

    }


    // ===============================
    // SHOW FAILED STUDENTS
    // ===============================

    else if (selectedFilter === "failed") {

        studentsToDisplay =
            students.filter(function(student) {

                return student.result === "Failed";

            });

    }


    // ===============================
    // NO STUDENTS FOUND
    // ===============================

    if (studentsToDisplay.length === 0) {

        resultsList.innerHTML =
            "<p>No students found for this result.</p>";

        return;
    }


    // ===============================
    // DISPLAY STUDENTS
    // ===============================

    studentsToDisplay.forEach(function(student) {

        resultsList.innerHTML += `

            <div class="result-card">

                <h3>${student.name}</h3>

                <p>Mark: ${student.mark}</p>

                <p>Result: ${student.result}</p>

            </div>

        `;

    });

}


// ===============================
// FILTER CHANGE EVENT
// ===============================

resultFilter.addEventListener("change", function() {

    displayResults();

});


// ===============================
// RUN FUNCTION
// ===============================

displayResults();

