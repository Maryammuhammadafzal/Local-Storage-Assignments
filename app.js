// import 'sweetalert2/src/sweetalert2.scss';
// Functions
function submit(){
    var submitBtn = document.getElementById('submit-btn');
    

    submitBtn.addEventListener('click' , function(){
        var userName = document.getElementById('form3Example1c').value;
        var userEmail = document.getElementById('form3Example3c').value;
       
        var storedName = localStorage.setItem('userName' , JSON.stringify(userName));
        var storedEmail = localStorage.setItem('userEmail' , JSON.stringify(userEmail));
       
        Swal.fire({
            template: "#my-template",
            savePasswoed :function (){
                var saveBtn = document.getElementsByClassName('swal2-confirm swal2-styled');
               
                        saveBtn.addEventListener('click' , function(){
                            var userpass = document.getElementById('form3Example4c').value;
                            var repeatPass = document.getElementById('form3Example4cd').value;
                            
                            var storedPassword = sessionStorage.setItem('userPass' , JSON.stringify(userpass));
                            var storedRepeatPassword = sessionStorage.setItem('repeatPass' , JSON.stringify(repeatPass));  
                        })
                
            }
            
        });
        
    })
     
}

submit();

   
   
   
      
    
