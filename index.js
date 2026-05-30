function togglePassword(id) {

const input = document.getElementById(id);

if (input.type === "password") {
input.type = "text";
}

else {
input.type = "password";
}

}


// SIGN UP
const signupForm = document.getElementById("signupForm");

if (signupForm) {

signupForm.addEventListener("submit", function(e) {

e.preventDefault();

const fullname =
document.getElementById("fullname").value.trim();

const email =
document.getElementById("email").value.trim();

const phone =
document.getElementById("phone").value.trim();

const city =
document.getElementById("city").value.trim();

const password =
document.getElementById("password").value.trim();

const confirmPassword =
document.getElementById("confirmPassword").value.trim();

if (
fullname === "" ||
email === "" ||
phone === "" ||
city === "" ||
password === "" ||
confirmPassword === ""
) {
alert("Fill all fields");
return;
}

if (phone.length !== 10) {
alert("Phone number must be 10 digits");
return;
}

if (password !== confirmPassword) {
alert("Password does not match");
return;
}

const user = {
fullname: fullname,
email: email,
phone: phone,
city: city,
password: password
};

localStorage.setItem(
"user",
JSON.stringify(user)
);

alert("Signup Successful");

window.location.href = "SignIn.html";

});

}


// SIGN IN
const signinForm =
document.getElementById("signinForm");

if (signinForm) {

signinForm.addEventListener("submit", function(e) {

e.preventDefault();

const email =
document.getElementById("signinEmail").value.trim();

const password =
document.getElementById("signinPassword").value.trim();

const storedUser =
JSON.parse(localStorage.getItem("user"));

if (
storedUser &&
email === storedUser.email &&
password === storedUser.password
) {

alert("Login Successful");

window.location.href = "travelapp.html";

}

else {

alert("Invalid Email or Password");

}

});

}