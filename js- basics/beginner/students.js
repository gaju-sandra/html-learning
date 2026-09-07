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
// SAVE STUDENTS
// ===============================

function saveStudents() {

    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );

}


// ===============================
// DISPLAY STUDENTS
// ===============================

function displayStudents() {

    studentTableBody.innerHTML = "";

    students.forEach(function(student) {

        studentTableBody.innerHTML += `
        
            <tr>

                <td>${student.id}</td>

                <td>${student.name}</td>

                <td>${student.mark}</td>

                <td>${student.result}</td>

                <td>

                    <button onclick="deleteStudent('${student.id}')">
                        Delete
                    </button>

                    <button onclick="updateStudent('${student.id}')">
                        Edit
                    </button>

                </td>

            </tr>
        
        `;

    });

}


// ===============================
// DELETE STUDENT
// ===============================

function deleteStudent(id) {

    students = students.filter(function(student) {

        return student.id !== id;

    });

    saveStudents();

    displayStudents();

}


// ===============================
// UPDATE STUDENT
// ===============================

function updateStudent(id) {

    // We will add the update code here later.



    let student = students.find(function(student) {

        return student.id === id;

    });

    let newName = prompt("Enter new name:", student.name);

    let newMark = prompt("Enter new mark:", student.mark);

    student.name = newName;

    student.mark = newMark;

    saveStudents();

    displayStudents();
}


// ===============================
// DISPLAY STUDENTS WHEN PAGE LOADS
// ===============================

displayStudents();