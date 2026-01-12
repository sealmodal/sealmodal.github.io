document.getElementById("contact").addEventListener("submit", function (e) {

    e.preventDefault();

    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;
    let response = document.getElementById("response");

    var txt;

    if (name=== "" || message === "") {
        alert("Please fill out all fields.");
    } else {
        alert("Thanks for getting in contact, " + name + "! We'll get back to you shortly.");
    }

});