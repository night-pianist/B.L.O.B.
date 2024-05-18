document.addEventListener('DOMContentLoaded', (event) => {
    const myButton = document.getElementById('menuIcon'); // get menu icon
    
    myButton.onclick = function() { // nav bar opens when clicked 
        if (navbar.classList.contains('visible')) {
            navbar.classList.remove('visible');
        } else {
            navbar.classList.add('visible');
        }
    };
  });