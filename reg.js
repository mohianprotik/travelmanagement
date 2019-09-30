
const signupForm = document.querySelector('#signup_form');
signupForm.addEventListener('submit', (e) =>
{
    e.preventDefault();

    const email = signupForm['signup_email'].value;
    const password = signupForm['signup_password'].value

    auth.createUserWithEmailAndPassword(email,password).then(cred =>
        {
            console.log(cred.user);
 
            signupForm.reset();
        })

});