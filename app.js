
// //Array of User Data 
// var user_data = [];

// // Sign Up Button
// var submitBtn = document.getElementById('submit-btn');

// // Functions of Submit Button 
// function submit(){
  
//   submitBtn && submitBtn.addEventListener('click' , function(){
//     var userName = document.getElementById('form3Example1c').value;
//     var userEmail = document.getElementById('form3Example3c').value;
//     var userpass = document.getElementById('form3Example4c').value;
//     var repeatPass = document.getElementById('form3Example4cd').value;

//     console.log(userName.value);
    
//     var userObj = {
//         name : userName,
//         email : userEmail,
//         password : userpass,
//         repeatPassword : repeatPass
//     }
    
//     user_data.push(userObj);
    
    
//     userName = '';
//     userEmail = '';
//     userpass = '';
//     repeatPass = '';
    
    
//     localStorage.setItem('users' , JSON.stringify(user_data));
//     var fetching_data = JSON.parse(localStorage.getItem('users'));
//     user_data.push(fetching_data);
    
    
//     window.location.href = "login.html";
      
  

// })
// }

// submit();

// var loginBtn = document.getElementById('login-btn');

// // login function
// async function login(){

//   if(window.location.href === "login.html"){
//     submitBtn && submitBtn.addEventListener('click' , function(){
//       window.location.href = "index.html"
//     })
//   }  
 
//     loginBtn && loginBtn.addEventListener('click' ,async function(){
//         var loginEmail = document.getElementById('loginEmail');
//         var loginpass = document.getElementById('loginPassword');

//         var users = JSON.parse(localStorage.getItem('users'));

//         for(var user of users){
//             if (user.email != loginEmail ) {
//                 const { value: email } = await Swal.fire({
//                     title: "Wrong email address",
//                     input: "email",
//                     inputLabel: "Your email address",
//                     inputPlaceholder: `${loginEmail}`
//                   });
//                   if (email) {
//                     Swal.fire(`Entered email: ${email}`);
//                   }

//                 if(loginpass != user.password){
//                     const { value: password } = await Swal.fire({
//                         title: "Wrong password",
//                         input: "password",
//                         inputLabel: "Password",
//                         inputPlaceholder: `${loginpass}`,
//                         inputAttributes: {
//                           maxlength: "10",
//                           autocapitalize: "off",
//                           autocorrect: "off"
//                         }
//                       });
//                       if (password) {
//                         Swal.fire(`Entered password: ${password}`);
//                       }
//                 }else{
//                     const Toast = Swal.mixin({
//                         toast: true,
//                         position: "top-end",
//                         showConfirmButton: false,
//                         timer: 3000,
//                         timerProgressBar: true,
//                         didOpen: (toast) => {
//                           toast.onmouseenter = Swal.stopTimer;
//                           toast.onmouseleave = Swal.resumeTimer;
//                         }
//                       });
//                       Toast.fire({
//                         icon: "success",
//                         title: "Signed in successfully"
//                       });
//                 }  
                
//             }else{
//                 alert('login successfully')
//             }
//         }
       
//         loginEmail = '';
//         loginpass = '';
        
//         // localStorage.setItem('user data' , JSON.stringify(user_data));
        
//         window.location.href = "./dashboard.html";
//     })
//     }

 
// login();


// // else if(window.location.href == "index.html"){
// //   submitBtn && submitBtn.addEventListener('click' , function(){
// //     window.location.href == "index.html"
// //   })
// // }  

/////////////////////////////////////////////


var usersData = []

var registerBtn = document.getElementById("submit-btn");
registerBtn && registerBtn.addEventListener("click", function () {

    var rName = document.getElementById("registerName")
    var rEmail = document.getElementById("registerEmail")
    var rPassword = document.getElementById("registerPass")



    var userObj = {
        name: rName.value,
        email: rEmail.value,
        password: rPassword.value
    }
    usersData.push(userObj)


    rName.value = ""
    rEmail.value = ""
    rPassword.value = ""

    console.log(usersData);
    localStorage.setItem("users", JSON.stringify(usersData))
    var fetchingData = JSON.parse(localStorage.getItem("users"));
    fetchingData.push(userObj)


    // location.href = "login.html"


})


var loginBtn = document.getElementById("login")


loginBtn && loginBtn.addEventListener("click", function (event) {


    var loginEmail = document.getElementById("loginEmail")
    var loginPass = document.getElementById("loginPassword")

    var users = JSON.parse(localStorage.getItem("users"));


    for (var user of users) {
        if (user.email == loginEmail.value) {

            if (user.password == loginPass.value) {
                console.log("login successfully");

            }
            else {
                console.log("email is ok wrong password");

            }

        }
        else {
          if(loginPass.value == user.password){
            console.log("password is ok email is wrong");
            
          }

        }

    }
})




var usersData = []

var registerBtn = document.getElementById("register");
registerBtn && registerBtn.addEventListener("click", function () {

    var rName = document.getElementById("registerName")
    var rEmail = document.getElementById("registerEmail")
    var rPassword = document.getElementById("registerPass")



    var userObj = {
        name: rName.value,
        email: rEmail.value,
        password: rPassword.value
    }
    usersData.push(userObj)


    rName.value = ""
    rEmail.value = ""
    rPassword.value = ""

    console.log(usersData);
    localStorage.setItem("users", JSON.stringify(usersData))
    var fetchingData = JSON.parse(localStorage.getItem("users"));
    fetchingData.push(userObj)


    // location.href = "login.html"


})


var loginBtn = document.getElementById("login")


loginBtn && loginBtn.addEventListener("click", function (event) {


    var loginEmail = document.getElementById("loginEmail")
    var loginPass = document.getElementById("loginPassword")

    var users = JSON.parse(localStorage.getItem("users"));


    for (var user of users) {
        if (user.email == loginEmail.value) {

            if (user.password == loginPass.value) {
                console.log("login successfully");

            }
            else {
                console.log("email is ok wrong password");

            }

        }
        else {
          if(loginPass.value == user.password){
            console.log("password is ok email is wrong");
            
          }

        }

    }
})



var id = setInterval(function(){
  console.log("hello");
  
},1000)

console.log(id);


setTimeout(function(){
 clearInterval(id)
  
},5000)