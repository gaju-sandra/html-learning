
// ===============================
// GET HTML ELEMENTS
// ===============================

let studentName = document.getElementById("studentName");
let studentMark = document.getElementById("studentMark");
let addStudent = document.getElementById("addStudentBtn");
let studentList = document.getElementById("studentlist");


// ===============================
// STUDENT ARRAY
// ===============================

// Get existing students from localStorage
let students = JSON.parse(localStorage.getItem("students")) || [];


// ===============================
// DISPLAY MESSAGE
// ===============================

function displayMessage(message) {

    studentList.innerHTML += `<p>${message}</p>`;

}


// ===============================
// DISPLAY ALL STUDENTS
// ===============================

function displayStudents() {

    studentList.innerHTML = "<h3>Student Information</h3>";


    // forEach() goes through EVERY student
    students.forEach(function(student) {

        displayMessage(
            `Student Name: ${student.name},
             Mark: ${student.mark},
             Result: ${student.result}`
        );

    });

}


// ===============================
// GET STUDENT RESULT
// ===============================

function getResult(mark) {

    if (mark >= 50) {

        return "Passed";

    } else {

        return "Failed";

    }

}


// ===============================
// SAVE STUDENTS
// ===============================

function saveStudents() {

    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );

}


// ===============================
// DISPLAY EXISTING STUDENTS
// ===============================

// When Home page opens,
// show students already saved.

displayStudents();


// ===============================
// ADD STUDENT
// ===============================

addStudent.addEventListener("click", function() {


    // ===============================
    // GET VALUES
    // ===============================

    let name = studentName.value.trim();
    let mark = Number(studentMark.value);


    // ===============================
    // VALIDATE EMPTY FIELDS
    // ===============================

    if (name === "" || studentMark.value === "") {

        displayMessage(
            "Please enter both the name and mark."
        );

        return;
    }


    // ===============================
    // VALIDATE MARK
    // ===============================

    if (mark < 0 || mark > 100) {

        displayMessage(
            "Please enter a mark between 0 and 100."
        );

        return;
    }


    // ===============================
    // GET RESULT
    // ===============================

    let result = getResult(mark);


    // ===============================
    // CREATE STUDENT
    // ===============================

    let student = {

        name: name,
        mark: mark,
        result: result

    };


    // ===============================
    // ADD TO ARRAY
    // ===============================

    students.push(student);


    // ===============================
    // SAVE THE UPDATED ARRAY
    // ===============================

    saveStudents();


    // ===============================
    // DISPLAY ALL STUDENTS
    // ===============================

    displayStudents();


    // ===============================
    // CLEAR INPUTS
    // ===============================

    studentName.value = "";
    studentMark.value = "";

});

