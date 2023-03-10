function ChangeName() {
    var txt = prompt("What is your name", "");
    document.getElementById("inputName").innerHTML = "Hello " + txt;
}

