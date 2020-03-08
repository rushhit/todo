function validate() {
    var username = document.getElementById("inputEU").value;
    var password = document.getElementById("inputPassword").value;
    if ((inputEU == "Kafein" || inputEU == "kafein@kafein.com") && inputPassword == "Kafein123") {
        alert("Giriş Başarılı");
        window.location = "todolist.html";
        return false;
    } else {
        attempt--; // Decrementing by one.
        alert("Giriş Başarısız");

        if (attempt == 0) {
            document.getElementById("inputEU").disabled = true;
            document.getElementById("inputPassword").disabled = true;
            document.getElementById("signin").disabled = true;
            return false;
        }
    }
}