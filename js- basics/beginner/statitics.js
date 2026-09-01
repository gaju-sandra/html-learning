
// ===============================
// STATISTICS PAGE
// ===============================


// ===============================
// GET HTML ELEMENTS
// ===============================

let totalStudents =
    document.getElementById("totalStudents");

let averageMark =
    document.getElementById("averageMark");

let highestMark =
    document.getElementById("highestMark");

let lowestMark =
    document.getElementById("lowestMark");


// ===============================
// GET STUDENTS FROM LOCAL STORAGE
// ===============================

let students =
    JSON.parse(localStorage.getItem("students")) || [];


// ===============================
// DISPLAY STATISTICS
// ===============================

function displayStatistics() {

    // ===============================
    // TOTAL STUDENTS
    // ===============================

    totalStudents.textContent = students.length;


    // ===============================
    // CHECK IF THERE ARE NO STUDENTS
    // ===============================

    if (students.length === 0) {

        averageMark.textContent = "0";
        highestMark.textContent = "0";
        lowestMark.textContent = "0";

        return;
    }


    // ===============================
    // MAP()
    // ===============================

    let marks = students.map(function(student) {

        return student.mark;

    });


    // ===============================
    // REDUCE()
    // ===============================

    let totalMarks = marks.reduce(function(total, mark) {

        return total + mark;

    }, 0);


    // ===============================
    // CALCULATE AVERAGE
    // ===============================

    let average =
        totalMarks / students.length;

    averageMark.textContent =
        average.toFixed(2);


    // ===============================
    // SORT()
    // ===============================

    let sortedMarks =
        [...marks].sort(function(a, b) {

            return a - b;

        });


    // ===============================
    // LOWEST MARK
    // ===============================

    lowestMark.textContent =
        sortedMarks[0];


    // ===============================
    // HIGHEST MARK
    // ===============================

    highestMark.textContent =
        sortedMarks[sortedMarks.length - 1];

}


// ===============================
// RUN FUNCTION
// ===============================

displayStatistics();

