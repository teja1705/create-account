// const emailEl = document.querySelector('#email').value;
// const phoneEl = document.querySelector('#phone').value;
// const passwordEl = document.querySelector('#password').value;
const create = document.getElementById('create');



function register(){
    var emailEl = document.querySelector('#email').value;
    var phoneEl = document.querySelector('#phone').value;
    var passwordEl = document.querySelector('#password').value;
    console.log(emailEl);
    console.log(phoneEl);
    console.log(passwordEl);
    console.log("done");
}

create.addEventListener('click',()=>{
    register();
})

