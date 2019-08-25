function searchFunc() {
    var input, filter, maindiv, switches, i;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    maindiv = document.getElementById("switch-container");
    switches = maindiv.getElementsByTagName("div");
    for (i = 0; i < switches.length; i+=5) {
        var title = switches[i].getElementsByTagName("h3")[0].innerHTML;
        /*
        if (filter == "") {
            switches[i].style.display = "";
        } else {
            if (title.toUpperCase().indexOf(filter) > -1) {
                BACKUP WORKING
                switches[i].style.display = "";
            } else {
                switches[i].style.display = "none";
            }
            
                if (switches[i].style.display = "none") {
                    switches[i].style.display = "none";
                } else {
                    switches[i].style.display = "";
                } 
            } else {
                switches[i].style.display = "none";
            }
        }
        */
       if (title.toUpperCase().indexOf(filter) > -1) {
        switches[i].style.display = "";
        } else {
            switches[i].style.display = "none";
        }
    }
}

function clearSearch() {
    var input = document.getElementById("searchInput");
    maindiv = document.getElementById("switch-container");
    switches = maindiv.getElementsByTagName("div");
    for (i = 0; i < switches.length; i+=5) {
        switches[i].style.display = "";
    }
    input.value= "";
}


function keyboardEnter() {
    var input = document.getElementById("searchInput");
    input.addEventListener("keyup", function(e) {
        var key = e.which || e.keyCode;
        if (e.key === 'Enter'){
            input.blur();
        }
    });
}

function filterCherry() {
    var filter, maindiv, switches;
    filter = "CHERRY";
    maindiv = document.getElementById("switch-container");
    switches = maindiv.getElementsByTagName("div");
    for (i = 0; i < switches.length; i+=5) {
        var title = switches[i].getElementsByTagName("h3")[0].innerHTML;
        if (title.toUpperCase().indexOf(filter) > -1) {
            switches[i].style.display = "";
        } else {
            switches[i].style.display = "none";
        }
    }
}
function filterGateron() {
    var filter, maindiv, switches;
    filter = "GATERON";
    maindiv = document.getElementById("switch-container");
    switches = maindiv.getElementsByTagName("div");
    for (i = 0; i < switches.length; i+=5) {
        var title = switches[i].getElementsByTagName("h3")[0].innerHTML;
        if (title.toUpperCase().indexOf(filter) > -1) {
            switches[i].style.display = "";
        } else {
            switches[i].style.display = "none";
        }
    }
}
function filterKailh() {
    var filter, maindiv, switches;
    filter = "KAILH";
    maindiv = document.getElementById("switch-container");
    switches = maindiv.getElementsByTagName("div");
    for (i = 0; i < switches.length; i+=5) {
        var title = switches[i].getElementsByTagName("h3")[0].innerHTML;
        if (title.toUpperCase().indexOf(filter) > -1) {
            switches[i].style.display = "";
        } else {
            switches[i].style.display = "none";
        }
    }
}