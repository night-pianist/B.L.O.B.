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

// go to avatar
document.addEventListener('DOMContentLoaded', function() {
    var map = document.getElementById('menuAvatar');
    map.addEventListener('click', function() {
        window.location.href = 'avatarprofilev2.html';
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

// go to meet-chi
document.addEventListener('DOMContentLoaded', function() {
    var blob1Lvl = document.getElementById('blob3');
    blob1Lvl.addEventListener('click', function() {
        window.location.href = 'meet-chi.html';
    });
});

// change blob3 to happy blob3 :D
document.addEventListener('DOMContentLoaded', function() {
    var changeBlob3 = document.getElementById('blob3');
  
    // Check if the flag is set in localStorage
    if (localStorage.getItem('blob3IsHappy') == 'true') {
      changeBlob3.src = 'media/blob3-happy.png';
    }
});

// change Bob to have a green heart
document.addEventListener('DOMContentLoaded', function() {
    var changeBob = document.getElementById('dynamic-Bob');
    var changeTreasure = document.getElementById('item3');
    var changeHeartLine = document.getElementById('heart-line');
  
    // Check if the flag is set in localStorage
    if (localStorage.getItem('blob3IsHappy') == 'true') {
        changeBob.src = 'img/blob_state_green.png';
        changeTreasure.src = 'media/puzzle-piece-happy.png';
        changeHeartLine.src = 'img/heart_line_green.png';
    }
});


