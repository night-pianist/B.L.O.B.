document.addEventListener('DOMContentLoaded', function() {
    // Get the image element by its ID
    var menuIcon = document.getElementById('menuIcon');
    var menuItems = document.querySelector('menu');

    // Add an event listener to the image
    menuIcon.addEventListener('click', function() {
        // Toggle visibility of menu items
        // if (menuItems.style.display === 'none') {
        //     menuItems.style.display = 'block';
        // } else {
        //     menuItems.style.display = 'none';
        // }
    });
});