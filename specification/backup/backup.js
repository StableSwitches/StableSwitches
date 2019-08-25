function searchFunc() {
    var input, filter, maindiv, switches, i;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    maindiv = document.getElementById("switch-container");
    switches = maindiv.getElementsByTagName("div");
    for (i = 0; i < switches.length; i+=5) {
        console.log(i);
        /*
        if(i > 5) {
            i = i + 1;
        }
        */
        var title = switches[i].getElementsByTagName("h3")[0].innerHTML;
        var stats = switches[i].getElementsByTagName("table")[0];
        var switchtype = stats.getElementsByTagName("tr");
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
