let studentName = document.getElementById("studentName");
let studentMark = document.getElementById("studentMark");
let addStudent = document.getElementById("addStudentBtn");
let studentList = document.getElementById("studentlist");
let student = [];
function displaymessage(message){
        studentList.innerHTML += `<p>${message}</p>`;
    }

addStudent.addEventListener("click", function() {

    let name = studentName.value;
    let mark = Number(studentMark.value);
    let result;

    

   
if(name.trim() ==="" && studentMark.value ===""){
    result = "Please enter a name and mark";
    displaymessage(result);}
    else if (name.trim() === "" || studentMark.value === "") {
        result =" please fill in the required fields";
        displaymessage(result);
    }
else if (mark < 0 || mark > 100) {
        result = "enter a mark between 0 and 100";
        displaymessage(`Please ${name} ${result}`);
    } else if (mark >= 50) {
        result = "Passed";
        displaymessage(`${name} got ${mark} so the student: ${result}`);
    } else {
        result = "Failed";
        displaymessage(`${name} got ${mark} so the student: ${result}`);
    }

    if (name.trim() !== "" && studentMark.value !== "" && mark >= 0 && mark <= 100) {
        student.push({ name: name, mark: mark, result: result });
        console.log(student);
    }

});