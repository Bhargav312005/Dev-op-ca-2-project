function validateForm() {
clearErrors();
let valid = true;

let name = document.getElementById("studentName").value.trim();
if(name===""){ show("nameError"); valid=false;}

let email = document.getElementById("emailId").value;
let regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!regex.test(email)){ show("emailError"); valid=false;}

let phone = document.getElementById("mobileNum").value;
if(!/^\d{10}$/.test(phone)){ show("mobileError"); valid=false;}

if(document.getElementById("department").value===""){
show("deptError"); valid=false;
}

let gender=document.querySelector('input[name="gender"]:checked');
if(!gender){ show("genderError"); valid=false;}

let feedback=document.getElementById("feedback").value.trim().split(/\s+/).length;
if(feedback<10){ show("feedbackError"); valid=false;}

if(valid){
document.getElementById("successMsg").style.display="block";
}
return false;
}

function show(id){
document.getElementById(id).style.display="block";
}

function clearErrors(){
document.querySelectorAll(".error-msg").forEach(e=>e.style.display="none");
document.getElementById("successMsg").style.display="none";
}