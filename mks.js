function vfun() {
    var uname = document.form["mks"]["uname"].value;
    var password = document.form["mks"]["password"].value;
    if (uname == null || uname == "") {
        document.getElementById("error").innerHTML = "enter the user name";
        return false;
    }
    if (password == null || uname == "") {
        document.getElementById("error").innerHTML = "enter the password";
        return false;
    }
    if (name != "" && password != "") {
        alert("login successfully");
    }
}