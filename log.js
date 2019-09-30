console.log('32 from logjs')

const loginForm = document.querySelector('#login_form');
loginForm.addEventListener('submit', (e) =>
{   e.preventDefault();



    const email = loginForm['InputEmail'].value;
    const password = loginForm['InputPassword'].value;

    auth.signInWithEmailAndPassword(email,password).then(cred =>
        {err =>{
            let msg;
            switch(err.code){
                case "auth/wrong-password":
                    msg ="password is wrong.";
                    break;
            }
            alert(msg);
        }
            console.log(cred.user);

            loginForm.reset();
            window.location='index.html';
        })
});
