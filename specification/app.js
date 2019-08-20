function searchFunc() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    listall = document.getElementsById("myUL");
    switches = div.getElementsByTagName("title-switch-info");
    console.log("b" + "a" + + "n" + "a");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h3")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}