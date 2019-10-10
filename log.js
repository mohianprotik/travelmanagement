console.log(' from logjs')

const loginForm = document.querySelector('#login_form');
loginForm.addEventListener('submit', (e) =>
{   e.preventDefault();



    const email = loginForm['InputEmail'].value;
    const password = loginForm['InputPassword'].value;

    auth.signInWithEmailAndPassword(email,password).then(cred =>
        
          { 
            console.log(cred.user);
            if(email== 'admin1@gmail.com')
            {
                window.location.href = "./admin.html";
            
            }
            else if(email =='admin2@gmail.com')
            {
                window.location.href = "./admin.html";
            }
            else if(email =='admin3@gmail.com')
            {
                window.location.href = "./admin.html";
            }
            
            
            else{
                window.location='index.html';
            }
                
        
        },err=>
        {
            let msg;
            switch(err.code)
            {
                case "auth/wrong-password":
                    msg = "email or password is incorrect.";
                    loginForm.reset();
                    
                    break;
            }
            alert(msg);
        }
        );
});

