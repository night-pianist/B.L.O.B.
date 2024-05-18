document.addEventListener('DOMContentLoaded', function() {
    // Get the image element by its ID
    var menuIcon = document.getElementById('menuIcon');
    var menuItems = document.getElementsByClassName('menuItem');

    // Add an event listener to the image
    menuIcon.addEventListener('click', function() {
        for (var i = 0; i < menuItems.length; i++) {
            if (menuItems[i].style.visibility == "visible")
                menuItems[i].style.visibility = "hidden";
            else
                menuItems[i].style.visibility = "visible";
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var map = document.getElementById('menuMap');
    map.addEventListener('click', function() {
        window.location.href = 'index.html';
    });

});

document.addEventListener('DOMContentLoaded', function() {
    var blob1Lvl = document.getElementById('blob1');
    blob1Lvl.addEventListener('click', function() {
        window.location.href = 'blob1Lvl/blob1.html';
    });
});
