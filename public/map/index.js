// toggle navbar
document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.getElementById('menuIcon');
    var menuItems = document.getElementsByClassName('menuItem');

    menuIcon.addEventListener('click', function() {
        for (var i = 0; i < menuItems.length; i++) {
            if (menuItems[i].style.visibility == "visible")
                menuItems[i].style.visibility = "hidden";
            else
                menuItems[i].style.visibility = "visible";
        }
    });
});

// go to main map
document.addEventListener('DOMContentLoaded', function() {
    var map = document.getElementById('menuMap');
    map.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});

// go to right of map
document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById('rightBtn');
    button.addEventListener('click', function() {
        window.location.href = 'map2.html';
    });
});

// go to left of map
document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById('leftBtn');
    button.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});

// go to blob1
document.addEventListener('DOMContentLoaded', function() {
    var blob1Lvl = document.getElementById('blob3');
    blob1Lvl.addEventListener('click', function() {
        window.location.href = 'meet-chi.html';
    });
});
