//Array of User Data 
var user_data = [];

// Functions
function submit(){
var submitBtn = document.getElementById('submit-btn');

submitBtn && submitBtn.addEventListener('click' , function(){
    var userName = document.getElementById('form3Example1c').value;
    var userEmail = document.getElementById('form3Example3c').value;
    var userpass = document.getElementById('form3Example4c').value;
    var repeatPass = document.getElementById('form3Example4cd').value;

    var userObj = {
        name : userName,
        email : userEmail,
        password : userpass,
        repeatPassword : repeatPass
    }

    user_data.push(userObj);

    
    userName = '';
    userEmail = '';
    userpass = '';
    repeatPass = '';
    
    localStorage.setItem('user data' , JSON.stringify(user_data));
    
    window.location.href = "./login.html";
})
}

submit();

function login(){
    var loginBtn = document.getElementById('signin-btn');
    
    loginBtn && loginBtn.addEventListener('click' , function(){
        var loginEmail = document.getElementById('loginEmail').value;
        var loginpass = document.getElementById('loginPassword').value;
    
        
       
        loginEmail = '';
        loginpass = '';
        
        localStorage.setItem('user data' , JSON.stringify(user_data));
        
        window.location.href = "./login.html";
    })
    }