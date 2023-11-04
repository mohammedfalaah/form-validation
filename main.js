function validate(){
    var username = document.getElementById("username"); 
    var email = document.getElementById("email"); 
    var password = document.getElementById("password"); 
    var cpassword = document.getElementById("cpassword");

    if(username.value==""){
        alert("Must Have Username");
        document.form1.username.focus();
        return false;
    }

    if(email.value==""){
        alert("Must Have email");
        document.form1.email.focus();
        return false;
    }

    if(password.value==""){
        alert("Must Have Password");
        document.form1.password.focus();
        return false;
    }

    if(cpassword.value=="" || cpassword.value!=password.value){
        alert("Please confirm your password");
        document.form1.cpassword.focus();
        return false;
    }
    return true;


}