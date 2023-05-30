$(document).ready(function () {
    $("#btnAddStudent").click(function () {
        function getStudentData() {
            let student = {
                firstName: $("#firstName").val(),
                lastName: $("#lastName").val(),
                gender: $("input[name='gender']:checked").val()
            };
            return student;
        }

        function storeDataToLocalStorage() {
            if (!localStorage.getItem("students")) {
                let students = [];
                students.push(getStudentData());
                localStorage.setItem("students", JSON.stringify(students));
            } else {
                let students = JSON.parse(localStorage.getItem("students"));
                students.push(getStudentData());
                localStorage.setItem("students", JSON.stringify(students));
            }
        }

        storeDataToLocalStorage();
        window.location.href = "display.html";
    });
});
