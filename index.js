const signinForm =
document.getElementById("signinForm");

if(signinForm){

signinForm.addEventListener(
"submit",
function(e){

e.preventDefault();

const email =
document.getElementById("signinEmail").value.trim();

const password =
document.getElementById("signinPassword").value.trim();

const emailError =
document.getElementById("signinEmailError");

const passwordError =
document.getElementById("signinPasswordError");

emailError.innerText = "";
passwordError.innerText = "";

const emailPattern =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(email === ""){
emailError.innerText = "Email is required";
}

else if(!emailPattern.test(email)){
emailError.innerText = "Enter valid email";
}

if(password === ""){
passwordError.innerText = "Password is required";
}

const storedUser =
JSON.parse(localStorage.getItem("user"));

if(
storedUser &&
email === storedUser.email &&
password === storedUser.password
){
alert("Login Successful");
window.location.href = "travelapp.html";
}
else if(email !== "" && password !== ""){
passwordError.innerText = "Invalid Email or Password";
}

});
}