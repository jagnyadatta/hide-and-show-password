let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");
let eyeopen = document.getElementById("eyeopen");
function showpass(){
    password.type = "text";
    eyeopen.style.display = 'inline';
    eyeicon.style.display = 'none';
}
function hidepass(){
    password.type = "password";
    eyeopen.style.display = 'none';
    eyeicon.style.display = 'inline';
}