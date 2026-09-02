
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

// Get students already saved in the browser
let students =
    JSON.parse(localStorage.getItem("students")) || [];


// ===============================
// DISPLAY MESSAGE
// ===============================

function displayMessage(message) {

    studentList.innerHTML = `<p>${message}</p>`;

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
// ADD STUDENT
// ===============================

addStudent.addEventListener("click", function() {

    // Get values from inputs
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
    // CREATE STUDENT
    // ===============================

    let student = {

        name: name,
        mark: mark,
        result: getResult(mark)

    };


    // ===============================
    // ADD STUDENT TO ARRAY
    // ===============================

    students.push(student);


    // ===============================
    // SAVE TO LOCAL STORAGE
    // ===============================

    saveStudents();


    // ===============================
    // SHOW SUCCESS MESSAGE
    // ===============================

    displayMessage(
        "Student added successfully!"
    );


    // ===============================
    // CLEAR INPUTS
    // ===============================

    studentName.value = "";
    studentMark.value = "";

});

