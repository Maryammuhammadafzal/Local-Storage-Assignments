
// Functions
function submit(){
var submitBtn = document.getElementById('submit-btn');
console.log(submitBtn);

submitBtn.addEventListener('click' , function(){
    var userName = document.getElementById('form3Example1c').value;
    var userEmail = document.getElementById('form3Example3c').value;
    var userpass = document.getElementById('form3Example4c').value;
    var repeatPass = document.getElementById('form3Example4cd').value;

   var storedName = localStorage.setItem('userName' , JSON.stringify(userName));
   var storedEmail = localStorage.setItem('userEmail' , JSON.stringify(userEmail));
   var storedPassword = sessionStorage.setItem('userPass' , JSON.stringify(userpass));
   var storedRepeatPassword = sessionStorage.setItem('repeatPass' , JSON.stringify(repeatPass));

     
})
}

submit();