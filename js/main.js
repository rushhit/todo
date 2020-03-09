// function ysYonlendir(ID, adres, saniye) { 
//     if (saniye == 0) {   
//         window.location.href = adres;   
//         return; 
//     } 
//     document.getElementById(ID).innerHTML = saniye + " saniye sonra yönlendiriliyorsunuz."; 
//     saniye--; 
//     setTimeout(function() {   
//         ysYonlendir(ID, adres, saniye); 
//     }, 1000);
// }

function login() {
    var username = document.getElementById("inputEU").value;
    var password = document.getElementById("inputPassword").value;
    if (username == "Kafein" && password == "Kafein123") {

        swal({
            title: "Giriş Başarılı!",
            icon: "success",
            button: "Kapat",
        });
        //document.getElementById("successlogin").innerHTML = "Giriş Başarılı.";
        // ysYonlendir("uyari", "todolist.html", 5);

        return false;
    } else {
        swal({
            title: "Giriş Başarısız!",
            icon: "warning",
            button: "Kapat",
        });
    }
}