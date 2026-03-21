function validateForm(){

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm = document.getElementById("confirm").value;
    var course = document.getElementById("course").value;

    var gender = document.getElementsByName("gender");
    var genderSelected = false;

    for(var i=0; i<gender.length; i++){
        if(gender[i].checked){
            genderSelected = true;
        }
    }

    if(name==""){
        alert("Name cannot be empty");
        return false;
    }

    if(email==""){
        alert("Email cannot be empty");
        return false;
    }

    // ✅ Email format check
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!email.match(pattern)){
        alert("Enter valid email");
        return false;
    }

    if(password.length < 6){
        alert("Password must be at least 6 characters");
        return false;
    }

    if(password != confirm){
        alert("Passwords do not match");
        return false;
    }

    // ✅ Gender validation
    if(!genderSelected){
        alert("Please select gender");
        return false;
    }

    if(course == ""){
        alert("Please select a course");
        return false;
    }

    alert("Registration Successful!");
    return true;
}