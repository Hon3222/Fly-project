
var objPeople = [
   {
       username: "hany",
       password: "12345"

   },

 {
     username: "youssef",
     password: "123456"

 }

]

   



function logIn() {

    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    if (username == "") {
        alert("Name must be filled out");
        return false;
    }
    if (password == "") {
        alert("password must be filled out");
        return false;
    }
    console.log("your user name is " + username + "password is " + password)
    for (var i = 0 ; i < objPeople.length; i++) {
        if (username == objPeople[i].username && password == objPeople[i].password) {
            console.log(username = "is loged in !")
            window.location.replace("../Home page/Home Page.html")
        }

    }

}

