let studentName = document.getElementById("studentName");
let studentMark = document.getElementById("studentMark");
let addStudent = document.getElementById("addStudentBtn");
let studentList = document.getElementById("studentlist");


addStudent.addEventListener("click", function() {

    let name = studentName.value;
    let mark = Number(studentMark.value);

    let result;
if (name==0){
    result = "Please enter a name";
}
if (mark==0){
    result = "Please enter a mark";
}
if (mark < 0 || mark > 100){
    result = "Please enter a mark between 0 and 100";
}
    if (mark >= 50) {
        result = "Passed";
    } else {
        result = "Failed";
    }

    studentList.innerHTML += `
        <p>${name} got ${mark} so the student: ${result}</p>
    `;

});