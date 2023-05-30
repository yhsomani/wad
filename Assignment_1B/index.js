// Prompt the user for registration data
var username = prompt("Enter your username:");
var email = prompt("Enter your email:");
var password = prompt("Enter your password:");

// Create an object to hold the user registration data
var userData = {
    username: username,
    email: email,
    password: password
};

// Send the data to the server using AJAX
var xhr = new XMLHttpRequest();
xhr.open("POST", "your_server_endpoint", true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        // Data successfully sent to the server
        // Open a new page to display the data list
        window.open("data-list.html", "_blank");
    }
};
xhr.send(JSON.stringify(userData));
