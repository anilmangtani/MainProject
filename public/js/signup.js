function val(){
    if (document.getElementById('fname').value == ""){
        alert("Please enter your Name");
        return false;
    }
    else if (document.getElementById('email').value == "") {
        alert("please Enter Your Email");
        return false;
    }
    else if(document.getElementById('pass').value == "") {
        alert("please enter your password");
        return false;
    }
    else if(document.getElementById('address').value == ""){
        alert("please enter your address");
        return false;
    }
    else if(document.getElementById('phone').value == ""){
        alert("please enter your phone number");
        return false;
    }
    else {
        alert("Signed In Successful!");
        return true;
    }
}