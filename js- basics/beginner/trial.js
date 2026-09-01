```javascript
// ======================================================
// STUDENT MANAGEMENT SYSTEM
// trial.js
// ======================================================


// ======================================================
// GET HTML ELEMENTS
// ======================================================

// These elements exist on the Home page
let studentName = document.getElementById("studentName");
let studentMark = document.getElementById("studentMark");
let addStudent = document.getElementById("addStudentBtn");
let studentList = document.getElementById("studentlist");

// This element exists on students.html
let studentsPageList = document.getElementById("studentList");

// This element exists on results.html
let resultsList = document.getElementById("resultsList");

// These elements exist on statistics.html
let totalStudents = document.getElementById("totalStudents");
let averageMark = document.getElementById("averageMark");
let highestMark = document.getElementById("highestMark");
let lowestMark = document.getElementById("lowestMark");


// ======================================================
// STUDENT ARRAY
// ======================================================

// Get students from localStorage
// If there are no students, use an empty array
let students = JSON.parse(localStorage.getItem("students")) || [];


// ======================================================
// SAVE STUDENTS
// ======================================================

function saveStudents() {

    localStorage.setItem("students", JSON.stringify(students));

}


// ======================================================
// DISPLAY MESSAGE
// ======================================================

function displayMessage(message) {

    if (studentList) {

        studentList.innerHTML += `<p>${message}</p>`;

    }

}


// ======================================================
// GET STUDENT RESULT
// ======================================================

function getResult(mark) {

    if (mark >= 50) {

        return "Passed";

    } else {

        return "Failed";

    }

}


// ======================================================
// DISPLAY STUDENTS ON HOME PAGE
// ======================================================

function displayHomeStudents() {

    if (!studentList) {
        return;
    }

    studentList.innerHTML = "<h3>Student Information</h3>";

    // ==============================================
    // forEach()
    // Goes through every student
    // ==============================================

    students.forEach(function(student) {

        displayMessage(
            `Student Name: ${student.name} | 
             Mark: ${student.mark} | 
             Result: ${student.result}`
        );

    });

}


// ======================================================
// DISPLAY STUDENTS PAGE
// ======================================================

function displayStudentsPage() {

    if (!studentsPageList) {
        return;
    }

    studentsPageList.innerHTML = "";

    // Check if there are no students
    if (students.length === 0) {

        studentsPageList.innerHTML = `
            <p>No students have been added yet.</p>
        `;

        return;
    }


    // ==============================================
    // forEach()
    // Display every student
    // ==============================================

    students.forEach(function(student, index) {

        studentsPageList.innerHTML += `
            <div class="student-card">

                <h3>${student.name}</h3>

                <p>Mark: ${student.mark}</p>

                <p>Result: ${student.result}</p>

                <button onclick="deleteStudent(${index})">
                    Delete
                </button>

            </div>
        `;

    });

}


// ======================================================
// DELETE STUDENT
// ======================================================

function deleteStudent(index) {

    // Remove one student from the array
    students.splice(index, 1);

    // Save the updated array
    saveStudents();

    // Refresh the page display
    displayStudentsPage();
    displayHomeStudents();
    displayResults();
    displayStatistics();

}


// ======================================================
// ADD STUDENT
// ======================================================

if (addStudent) {

    addStudent.addEventListener("click", function() {

        // ==============================================
        // GET VALUES FROM INPUTS
        // ==============================================

        let name = studentName.value.trim();
        let mark = Number(studentMark.value);


        // ==============================================
        // VALIDATE EMPTY FIELDS
        // ==============================================

        if (name === "" || studentMark.value === "") {

            displayMessage(
                "Please enter both the name and mark."
            );

            return;
        }


        // ==============================================
        // VALIDATE MARK
        // ==============================================

        if (mark < 0 || mark > 100) {

            displayMessage(
                "Please enter a mark between 0 and 100."
            );

            return;
        }


        // ==============================================
        // GET RESULT
        // ==============================================

        let result = getResult(mark);


        // ==============================================
        // CREATE STUDENT
        // ==============================================

        let student = {

            name: name,
            mark: mark,
            result: result

        };


        // ==============================================
        // ADD STUDENT TO ARRAY
        // ==============================================

        students.push(student);


        // ==============================================
        // SAVE TO LOCAL STORAGE
        // ==============================================

        saveStudents();


        // ==============================================
        // DISPLAY STUDENTS
        // ==============================================

        displayHomeStudents();


        // ==============================================
        // CLEAR INPUTS
        // ==============================================

        studentName.value = "";
        studentMark.value = "";

    });

}


// ======================================================
// RESULTS PAGE
// ======================================================

function displayResults() {

    if (!resultsList) {
        return;
    }

    resultsList.innerHTML = "";


    // ==============================================
    // CHECK FOR STUDENTS
    // ==============================================

    if (students.length === 0) {

        resultsList.innerHTML = `
            <p>No student results available.</p>
        `;

        return;
    }


    // ==============================================
    // filter()
    //
    // Get students who passed
    // ==============================================

    let passedStudents = students.filter(function(student) {

        return student.mark >= 50;

    });


    // ==============================================
    // filter()
    //
    // Get students who failed
    // ==============================================

    let failedStudents = students.filter(function(student) {

        return student.mark < 50;

    });


    // ==============================================
    // DISPLAY PASSED STUDENTS
    // ==============================================

    resultsList.innerHTML += `
        <h3>Passed Students</h3>
    `;

    passedStudents.forEach(function(student) {

        resultsList.innerHTML += `
            <p>
                ${student.name} - 
                ${student.mark} - 
                ${student.result}
            </p>
        `;

    });


    // ==============================================
    // DISPLAY FAILED STUDENTS
    // ==============================================

    resultsList.innerHTML += `
        <h3>Failed Students</h3>
    `;

    failedStudents.forEach(function(student) {

        resultsList.innerHTML += `
            <p>
                ${student.name} - 
                ${student.mark} - 
                ${student.result}
            </p>
        `;

    });

}


// ======================================================
// STATISTICS PAGE
// ======================================================

function displayStatistics() {

    if (!totalStudents) {
        return;
    }


    // ==============================================
    // TOTAL STUDENTS
    // ==============================================

    totalStudents.textContent = students.length;


    // ==============================================
    // CHECK IF THERE ARE STUDENTS
    // ==============================================

    if (students.length === 0) {

        averageMark.textContent = "0";
        highestMark.textContent = "0";
        lowestMark.textContent = "0";

        return;
    }


    // ==============================================
    // map()
    //
    // Create an array containing only marks
    // ==============================================

    let marks = students.map(function(student) {

        return student.mark;

    });


    // ==============================================
    // reduce()
    //
    // Add all marks together
    // ==============================================

    let totalMarks = marks.reduce(function(total, mark) {

        return total + mark;

    }, 0);


    // ==============================================
    // CALCULATE AVERAGE
    // ==============================================

    let average = totalMarks / students.length;


    averageMark.textContent = average.toFixed(2);


    // ==============================================
    // sort()
    //
    // Sort marks from lowest to highest
    // ==============================================

    let sortedMarks = [...marks].sort(function(a, b) {

        return a - b;

    });


    // ==============================================
    // HIGHEST AND LOWEST MARK
    // ==============================================

    lowestMark.textContent = sortedMarks[0];

    highestMark.textContent =
        sortedMarks[sortedMarks.length - 1];

}


// ======================================================
// FIND A STUDENT
// ======================================================

function findStudent(name) {

    // ==============================================
    // find()
    //
    // Find the first student with this name
    // ==============================================

    let student = students.find(function(student) {

        return student.name.toLowerCase() === name.toLowerCase();

    });


    return student;

}


// ======================================================
// INITIAL DISPLAY
// ======================================================

// Display information depending on which page
// the user is currently visiting.

displayHomeStudents();

displayStudentsPage();

displayResults();

displayStatistics();
```
