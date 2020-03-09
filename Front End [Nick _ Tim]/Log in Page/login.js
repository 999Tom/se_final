function login() {

    var username = document.getElementById("username");
    var pass = document.getElementById("password");

    if (username.value == "") {

        alert("Please Enter Your Username");

    } else if (pass.value  == "") {

        alert("Please Enter Your Password");

    } else if(username.value == "admin" && pass.value == "123456"){

        window.location.href="welcome.html";

    } else {

        alert("Incorrect User Name or Password")

    }
}
