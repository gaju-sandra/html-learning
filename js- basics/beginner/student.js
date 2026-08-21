let studentName = document.getElementById("studentName");
let studentMark = document.getElementById("studentMark");
let addStudent = document.getElementById("addStudentBtn");
let studentList = document.getElementById("studentlist");

addStudent.addEventListener("click", function() {

    let name = studentName.value;
    let mark = Number(studentMark.value);

    let result;

    if (name.trim() === "") {
        result = "Please enter a name";
 studentList.innerHTML += `
        <p>${result}</p>
    `;
    } else if (studentMark.value === "") {
        result = "Please enter a mark";

        studentList.innerHTML += `
        <p>${result}</p>
    `;
    } else if (mark < 0 || mark > 100) {
        result = "enter a mark between 0 and 100";
studentList.innerHTML += `
        <p>Please ${name} ${result}</p>
    `;
    } else if (mark >= 50) {
        result = "Passed";

        studentList.innerHTML += `
        <p>${name} got ${mark} so the student: ${result}</p>
    `;
    } else {
        result = "Failed";
        studentList.innerHTML += `
        <p>${name} got ${mark} so the student: ${result}</p>
    `;
    }

    

}); 