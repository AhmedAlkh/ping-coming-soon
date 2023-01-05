function checkEmail() {

    var email = document.getElementById("emailField").value;

    if (email === "") {
        document.getElementById("message").innerHTML = "Whoops! It looks like you forgot to add your email.";
    } else if (email.indexOf("@") === -1 || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        document.getElementById("message").innerHTML = "Please provide a valid email address.";
    } else {
        document.getElementById("message").innerHTML = "Thank you for subscribing!";
    }
};