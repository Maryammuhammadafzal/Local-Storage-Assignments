// User Information 
var usersData = []

// Signup Function
var registerBtn = document.getElementById("submit-btn");
registerBtn && registerBtn.addEventListener("click", function () {

    var rName = document.getElementById("user-name")
    var rEmail = document.getElementById("user-email")
    var rPassword = document.getElementById("user-password")



    var userObj = {
        name: rName.value,
        email: rEmail.value,
        password: rPassword.value
    }
    usersData.push(userObj);


    rName.value = ""
    rEmail.value = ""
    rPassword.value = ""

    localStorage.setItem("users", JSON.stringify(usersData))
    var fetchingData = JSON.parse(localStorage.getItem("users"));
    fetchingData.push(userObj);

    console.log(fetchingData);
    


    window.location.href = "login.html"


})

// Login Function
var loginBtn = document.getElementById("login-btn")
loginBtn && loginBtn.addEventListener("click",async function (event) {


    var loginEmail = document.getElementById("login-email")
    var loginPass = document.getElementById("login-password")

    var users = JSON.parse(localStorage.getItem("users"));


    for (var user of users) {
        if (user.email == loginEmail.value) {

            if (user.password == loginPass.value) {
                // Login Successfullly 
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
                   icon: "primary",
                   title: "Signed in successfully"
                 });

            }
            else {

              if (loginPass.value != user.password) {
                // Wrong password Alert
                const { value: password } = await Swal.fire({
                    title: "Wrong password",
                    input: "password",
                    inputLabel: "Password",
                    inputPlaceholder: `${loginPass.value}`,
                    inputAttributes: {
                      maxlength: "10",
                      autocapitalize: "off",
                      autocorrect: "off"
                    }
                  });
                  if (password) {
                    Swal.fire(`Entered password: ${password}`);
                  }

            }

        }
      }
        else {
             // Wrong Email Alert
          if(loginPass.value == user.password){
            const { value: email } = await Swal.fire({
               title: "Wrong email address",
               input: "email",
               inputLabel: "Your email address",
               inputPlaceholder: `${loginEmail.value}`
             });
             if (email) {
               Swal.fire(`Entered email: ${email}`);
             }
            
          }

        }

    }

setTimeout(function(){
 
    window.location.href = "dashboard.html";
  
},4000)
});

function signup_page(){
    window.location.href = "index.html";
}
function signin_page(){
    window.location.href = "login.html";
}
