// ===============================
// GET STUDENT TABLE
// ===============================

let studentTableBody =
    document.getElementById("studentTableBody");


// ===============================
// GET STUDENTS FROM LOCAL STORAGE
// ===============================

let students =
    JSON.parse(localStorage.getItem("students")) || [];


// ===============================
// DISPLAY STUDENTS
// ===============================

function displayStudents() {

    // Clear the table first
    studentTableBody.innerHTML = "";


    // Go through every student
    students.forEach(function(student) {

        // Create one table row
        studentTableBody.innerHTML += `
        
            <tr>

                <td>${student.id}</td>

                <td>${student.name}</td>

                <td>${student.mark}</td>

                <td>${student.result}</td>

                <td>

                    <button>
                        Edit
                    </button>

                    <button>
                        Delete
                    </button>

                </td>

            </tr>
        
        `;

    });

}


// ===============================
// DISPLAY STUDENTS WHEN PAGE LOADS
// ===============================

displayStudents();