console.log('32 from logjs')

const loginForm = document.querySelector('#login_form');
loginForm.addEventListener('submit', (e) =>
{   e.preventDefault();



    const email = loginForm['InputEmail'].value;
    const password = loginForm['InputPassword'].value;

    auth.signInWithEmailAndPassword(email,password).then(cred =>
        
          { 
            console.log(cred.user);
            if(email== 'admin@gmail.com')
            {
                window.location.href = "feedback.html";
            
            }
            setTimeout(function(){ loginForm.reset();
                window.location='index.html'; }, 3000);
        
        },err=>
        {
            let msg;
            switch(err.code)
            {
                case "auth/wrong-password":
                    msg = "email or password is incorrect.";
                    loginForm.reset();
                    console.log('112');
                    break;
            }
            alert(msg);
        }
        );
});

