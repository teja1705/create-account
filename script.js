const button = document.getElementById('btn');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('password2');

function checkInputs(){
    const usernameValue = username.value.trim();    
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const cpasswordValue = cpassword.value.trim();

    if(usernameValue === ''){
        setErrorFor(username, 'Username cannot be blank');
    }
    else{
        setSuccessFor(username);
    } 


    if(emailValue === ''){
        setErrorFor(email, 'Email cannot be blank');
    }
    else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid');
    }
    else{
        setSuccessFor(email);
    }


    if(passwordValue === ''){
        setErrorFor(password, 'Password cannot be blank');
    }
    else{
        setSuccessFor(password);
    } 

    if(cpasswordValue === ''){
        setErrorFor(cpassword, 'Password cannot be blank');
    }
    else if(cpasswordValue !== passwordValue){
        setErrorFor(cpassword, 'Password does not match');
    }
    else{
        setSuccessFor(cpassword);
    } 
}
function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
}
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

button.addEventListener('click',(e)=>{
    e.preventDefault();
    
    checkInputs();
    })
    
