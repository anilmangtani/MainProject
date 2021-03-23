function log(){
    if(document.getElementById('loginEmail').value == ""){
        alert("please enter your name");
        return false;
    }
    else if(
        document.getElementById('loginPass').value == ""
    ){
        alert("please enter your passeord")
        return false;
    }
}