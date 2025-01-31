const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

form.addEventListener('submit' , (event)=>{
    event.preventDefault();
    Validate();
    
})

const sendData = (sRate,count) =>{
    if(sRate === count){
        alert('Registration SuccessFull');
        swal(" Welcome! ", "Form Submitted !", "success");
    }


}

//final success message

const successMessage=()=>{
    let formCon = document.getElementsByClassName('form-control');
    var count = formCon.length -1 ;
    for(var i = 0;i<formCon.length;i++){
        if(formCon[i].className == "form-control success"){
            var sRate = 0 + i;
            sendData(sRate,count);
        }else{
            return false;
        }
    }

}
const isEmail = (emailVal) =>{
    var atSymbol = emailVal.indexOf("@");
    if(atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf('.');
    if(dot <= atSymbol + 2) return false;

    if(dot === emailVal.length -1 ) return false;
    return true;
}

const Validate=()=>{
const usernameVal = username.value.trim();
const emailVal = email.value.trim();
const phoneVal = phone .value.trim();
const passwordVal = password.value.trim();
const cpasswordVal = cpassword.value.trim();
//validate username
if(usernameVal === ""){
    setErrorMsg(username , "Username cannot be blank");
}else if(usernameVal.length <= 2){
    setErrorMsg(username , "Username should be minimum 3 characters");
}else{
    setSuccessMsg(username);
}
//validate email
if(emailVal === ""){
    setErrorMsg(email , "Email cannot be blank");
}else if(!isEmail(emailVal)){
    setErrorMsg(email , "invalid Email entered");
}else{
    setSuccessMsg(email);
}
//validate phone
if(phoneVal === ""){
    setErrorMsg(phone , "Phone cannot be blank");
}else if(phoneVal.length != 10){
    setErrorMsg(phone , "invalid Phone entered");
}else{
    setSuccessMsg(phone);
}

//validate password
if(passwordVal === ""){
    setErrorMsg(password , "Password cannot be null");
}else if(passwordVal.length <= 5){
    setErrorMsg(password , "Password must not be less than 5 ");
}else{
    setSuccessMsg(password);
}

//validate confirm password
if(cpasswordVal === ""){
    setErrorMsg(cpassword , "Password cannot be null");
}else if(cpasswordVal != passwordVal){
    setErrorMsg(cpassword , "Previous password not Matching");
}else{
    setSuccessMsg(cpassword);
}
 successMessage();

}
function setErrorMsg(input,errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}
function setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}