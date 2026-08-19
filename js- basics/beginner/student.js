let studentName = document.getElementById("studentName");
let studentMark = document.getElementById("studentMark");
let addStudent = document.getElementById("addStudentBtn");
let studentList = document.getElementById("studentlist");


addStudent.addEventListener("click", function() {

    let name = studentName.value;
    let mark = Number(studentMark.value);

    let result;

    if (mark >= 50) {
        result = "Passed";
    } else {
        result = "Failed";
    }

    studentList.innerHTML += `
        <p>${name} got ${mark} so the student: ${result}</p>
    `;

});