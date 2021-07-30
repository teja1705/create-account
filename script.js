const create = document.getElementById('create');

function register(){
    var usernameEl = document.querySelector('#username').value;
    var emailEl = document.querySelector('#email').value;
    var phoneEl = document.querySelector('#phone').value;
    var passwordEl = document.querySelector('#password').value;
    const user ={username : usernameEl,email : emailEl,phone : phoneEl,password:passwordEl}
    getallData(user);
}

create.addEventListener('click',()=>{
    register();
})

function loadData(user){
    window.localStorage.setItem(user.username, JSON.stringify(user))
}

function getallData(user){
    var pageres = document.getElementsByClassName('page-response');
    var body=document.getElementById('container');
    var res = document.getElementById("res");
    var flag=true
    Object.entries(localStorage).forEach((ele)=>{
        if(JSON.parse(ele[1]).username === user.username){
            flag=false
        }
    })
    if(flag){
        res.innerHTML="Registered Successfully";
        res.style.color= "#2ecc71";
        pageres[0].style.display="inline";
        loadData(user)
        body.innerHTML=
        `
        <div class="atos-container">
            <div class="atos-header">
                <div class="atos-form">
                    <h2 class="atos-h2">Sign in</h2>   
                    <label class="atos-label">Email address</label>
                    <input class="atos-input" value="" type="text" id="email1"></p>     
                    <label class="atos-label">Password</label>
                    <input class="atos-input" value="" type="password" id="password1"></p>
                </div>
            </div>
            <div class="atos-button">
                <button id="create">Sign in</button>
            </div>
            </div>

        `

    }
    else{
        // location.reload();
        res.innerHTML="user exist";
        res.style.color= "#e74c3c";
        pageres[0].style.display="inline";
    }
}

