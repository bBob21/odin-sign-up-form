function validatePassword(){
    const password = document.querySelector("#password").value;
    const cpassword = document.querySelector("#cpassword").value;

    if (password !== cpassword){
        alert("Passwords do not match!");
        return false;
    }
    else{
        return true;
    }
}