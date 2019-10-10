
const signupForm = document.querySelector('#signup_form');
signupForm.addEventListener('submit', (e) =>
{
    e.preventDefault();

    const email = signupForm['signup_email'].value;
    const password = signupForm['signup_password'].value;
    const name = signupForm['lastname'].value;
    const phone =signupForm['phone'].value;
    const address =signupForm['address'].value;


    auth.createUserWithEmailAndPassword(email,password).then(cred =>
        {
            console.log(cred.user);
 
            signupForm.reset();
            
        firebase.auth().onAuthStateChanged((user) =>
        {
            if(user){
               
                db.collection("info").doc(user.uid).set({
                    Name: name,
                    Email: email,
                    Phone: phone,
                    Address: address,
                    Country :"Not provided",
                    Zipcode : "Not provided" ,
                    Occupation: "Not Provided",
                    
                }).then(() => {
                    console.log('Done');
                    window.location='log.html';
                    alert("Now login with your email and password");
        
                });

            }
 

        })

            
        })

});
