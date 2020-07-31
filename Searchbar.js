alert("Checking");

function search_animals() {
    var input = document.getElementById("searchbar").value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName("animals");

    for (i = 0; i < x.length; i = i + 1) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        } else {
            x[i].style.display = "list-item";
        }
        if (input === "") {
            x[i].style.display = "none";
        }
    }
}