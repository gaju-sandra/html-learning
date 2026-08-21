let studentName = document.getElementById("studentName");
let studentMark = document.getElementById("studentMark");
let addStudent = document.getElementById("addStudentBtn");
let studentList = document.getElementById("studentlist");

addStudent.addEventListener("click", function() {

    let name = studentName.value;
    let mark = Number(studentMark.value);
    let result;

    function displaymessage(message){
        studentList.innerHTML += `<p>${message}</p>`;
    }

   
if(name.trim() ==="" && studentMark.value ===""){
    result = "Please enter a name and mark";
    displaymessage(result);}
    else if (name.trim() === "" || studentMark.value === "") {
        result =" please fill in the required fields";
        displaymessage(result);
    }
});