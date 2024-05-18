document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.querySelector('.loginButton'); // Get the login button
    
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
});