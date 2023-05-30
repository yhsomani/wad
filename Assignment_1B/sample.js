// Function to send data to server using AJAX
function sendDataToServer(data) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "your_server_endpoint_url_here", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Redirect to new page with the file name
            window.location.href = "data-list.html";
        }
    };

    xhr.send(JSON.stringify(data));
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();

    // Get the form inputs
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Create an object with the registration data
    var registrationData = {
        name: name,
        email: email,
        password: password,
    };

    // Push the registration data to an array or store in local storage
    var registrations = []; // Replace with your own array or local storage mechanism
    registrations.push(registrationData);

    // Send the registration data to the server
    sendDataToServer(registrationData);
}

// Attach form submit event listener
var form = document.getElementById("registration-form");
form.addEventListener("submit", handleFormSubmit);
