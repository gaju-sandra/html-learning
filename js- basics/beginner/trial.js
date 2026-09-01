
let studentName = document.getElementById("studentName");
let studentMark = document.getElementById("studentMark");
let addStudent = document.getElementById("addStudentBtn");
let studentList = document.getElementById("studentlist");


// ===============================
// STUDENT ARRAY
// ===============================

let students = [];


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

    // Clear the previous list
    studentList.innerHTML = "";

    // forEach() goes through every student
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
// ADD STUDENT
// ===============================

addStudent.addEventListener("click", function() {

    // Get values from the inputs
    let name = studentName.value.trim();
    let mark = Number(studentMark.value);


    // ===============================
    // VALIDATE EMPTY FIELDS
    // ===============================

    if (name === "" || studentMark.value === "") {

        displayMessage("Please enter both the name and mark.");

        return;
    }


    // ===============================
    // VALIDATE MARK
    // ===============================

    if (mark < 0 || mark > 100) {

        displayMessage("Please enter a mark between 0 and 100.");

        return;
    }


    // ===============================
    // GET RESULT
    // ===============================

    let result = getResult(mark);


    // ===============================
    // CREATE STUDENT
    // ===============================

    students.push({
        name: name,
        mark: mark,
        result: result
    });


    // ===============================
    // DISPLAY STUDENTS
    // ===============================

    displayStudents();


    // ===============================
    // CLEAR INPUTS
    // ===============================

    studentName.value = "";
    studentMark.value = "";

});;
```
