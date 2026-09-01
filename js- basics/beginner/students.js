```javascript
// ===============================
// STUDENTS PAGE
// ===============================


// ===============================
// GET HTML ELEMENT
// ===============================

let studentList = document.getElementById("studentList");


// ===============================
// GET STUDENTS
// ===============================

// Get the students saved from the Home page
let students = JSON.parse(localStorage.getItem("students")) || [];


// ===============================
// DISPLAY STUDENTS
// ===============================

function displayStudents() {

    // Make sure the element exists
    if (!studentList) {
        return;
    }


    // Clear the previous content
    studentList.innerHTML = "";


    // ===============================
    // CHECK IF THERE ARE NO STUDENTS
    // ===============================

    if (students.length === 0) {

        studentList.innerHTML =
            "<p>No students have been added yet.</p>";

        return;
    }


    // ===============================
    // FOREACH()
    // ===============================

    students.forEach(function(student) {

        studentList.innerHTML += `

            <div class="student-card">

                <h3>${student.name}</h3>

                <p>Mark: ${student.mark}</p>

                <p>Result: ${student.result}</p>

            </div>

        `;

    });

}


// ===============================
// DISPLAY STUDENTS
// ===============================

displayStudents();
```
