document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.querySelector('.loginButton'); // Get the login button
    const registerButton = document.querySelector('.registerButton');
    
    loginButton.addEventListener('click', function() {
        const username = document.querySelector('.username').value; // Get the username from input
        const password = document.querySelector('.password').value; // Get the password from input
        
        // Check if fields are not empty
        if (username && password) {
            loginUser({ username, password });
        } else {
            alert('Please enter both username and password');
        }
    });

    registerButton.addEventListener('click', function() {
        const email = document.querySelector('.email').value; // Get the username from input
        const username = document.querySelector('.username').value; // Get the username from input
        const password = document.querySelector('.password').value; // Get the password from input
        
        // Check if fields are not empty
        if (username && password && email) {
            registerUser({ username, email, password});
        } else {
            alert('Please enter both username, password, and email');
        }
    });

    function loginUser(credentials) {
        fetch('http://localhost:3000/login', { // Should match the URL of your server
            method: 'POST', // Login method
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials) // Convert the credentials object into a string
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Login Successful'); // Handle your success further
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Failed to login'); // Handle the error
        });
    }
    

    function registerUser(credentials) {
        fetch('http://localhost:3000/register', { // Should match the URL of your server
            method: 'POST', // Register method
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials) // Convert the credentials object into a string
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            if (data.message === "User registered successfully.") {
                alert('Registration Successful'); // Handle your success further
            } else {
                alert('Failed to register: ' + data.message); // Handle the error
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Failed to register'); // Handle the error
        });
    }
});