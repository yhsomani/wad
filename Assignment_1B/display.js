$(document).ready(function () {
    displayData();
});

function displayData() {
    let localStorageData = localStorage.getItem("students");
    let students = JSON.parse(localStorageData);

    if (students) {
        let studentTable = $("#studentTable");

        students.forEach(function (student) {
            let row = "<tr><td>" + student.firstName + "</td><td>" + student.lastName + "</td><td>" + student.gender +
                "</td></tr>";
            studentTable.append(row);
        });
    }
}
