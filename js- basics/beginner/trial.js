let studentName = document.getElementById("studentName");
let studentMark = document.getElementById("studentMark");
let addStudent = document.getElementById("addStudentBtn");
let studentList = document.getElementById("studentlist");
let students = [];
function displaymessage(message){
        studentList.innerHTML += `<p>${message}</p>`;
    }

function displayStudents() {
    studentList.innerHTML = "";

    students.forEach(function(student) {
        displaymessage(
            `Student Name: ${student.name}, Mark: ${student.mark}, Result: ${student.result}`
        );
    });

    let passedStudents = students.filter(student => {
        return student.mark >= 50;
    });

    displaymessage("----- Passed Students -----");

    passedStudents.forEach(function(student) {
        displaymessage(
            `Student Name: ${student.name}, Mark: ${student.mark}`
        );
    });
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
    
    } else {
        result = "Failed";
    }

    if (name.trim() !== "" && studentMark.value !== "" && mark >= 0 && mark <= 100) {
        students.push({ name: name, mark: mark, result: result });
        displayStudents();
        studentName.value = "";
        studentMark.value = "";
        
    }

});