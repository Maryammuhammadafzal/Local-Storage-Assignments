//Array of User Data 
var user_data = [];

// Functions
var submitBtn = document.getElementById('submit-btn');
function submit(){

submitBtn && submitBtn.addEventListener('click' , function(){
    var userName = document.getElementById('form3Example1c');
    var userEmail = document.getElementById('form3Example3c');
    var userpass = document.getElementById('form3Example4c');
    var repeatPass = document.getElementById('form3Example4cd');

    var userObj = {
        name : userName.value,
        email : userEmail.value,
        password : userpass.value,
        repeatPassword : repeatPass.value
    }
    
    user_data.push(userObj);
    
    
    userName.value = '';
    userEmail.value = '';
    userpass.value = '';
    repeatPass.value = '';

    
    localStorage.setItem('users' , JSON.stringify(user_data));
    var fetching_data = JSON.parse(localStorage.getItem('users'));
    user_data.push(fetching_data);
    

    window.location.href = "./login.html";
      
  

})
}

submit();

var loginBtn = document.getElementById('login-btn');
async function login(){
    
    loginBtn && loginBtn.addEventListener('click' ,async function(){
        var loginEmail = document.getElementById('loginEmail');
        var loginpass = document.getElementById('loginPassword');

        var users = JSON.parse(localStorage.getItem('users'));

        for(var user of users){
            if (user.email != loginEmail ) {
                const { value: email } = await Swal.fire({
                    title: "Wrong email address",
                    input: "email",
                    inputLabel: "Your email address",
                    inputPlaceholder: `${loginEmail}`
                  });
                  if (email) {
                    Swal.fire(`Entered email: ${email}`);
                  }

                if(loginpass != user.password){
                    const { value: password } = await Swal.fire({
                        title: "Wrong password",
                        input: "password",
                        inputLabel: "Password",
                        inputPlaceholder: `${loginpass}`,
                        inputAttributes: {
                          maxlength: "10",
                          autocapitalize: "off",
                          autocorrect: "off"
                        }
                      });
                      if (password) {
                        Swal.fire(`Entered password: ${password}`);
                      }
                }else{
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                          toast.onmouseenter = Swal.stopTimer;
                          toast.onmouseleave = Swal.resumeTimer;
                        }
                      });
                      Toast.fire({
                        icon: "success",
                        title: "Signed in successfully"
                      });
                }  
                
            }else{
                alert('login successfully')
            }
        }
       
        loginEmail = '';
        loginpass = '';
        
        // localStorage.setItem('user data' , JSON.stringify(user_data));
        
        window.location.href = "./dashboard.html";
    })
    }

login()    