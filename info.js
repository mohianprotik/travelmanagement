console.log('from info.js');


const update_form = document.querySelector('#update-form');

        firebase.auth().onAuthStateChanged((user) =>
        {
            if(user){
                db.collection('info').get().then(snapshot => {
                    
                  
                    snapshot.forEach(doc => {
                       
                        if (user.email == doc.data().Email) {
                            console.log('dhuklo');
                            console.log(doc.data().Email);
                            document.getElementById("account-email").value = doc.data().Email;
                            document.getElementById("account-name").value = doc.data().Name;
                            document.getElementById("account-phone").value = doc.data().Phone;
                            document.getElementById("account-address").value = doc.data().Address;
                            console.log(user.country);
                            document.getElementById("account-country").value = doc.data().Country;
                            document.getElementById("account-occupation").value = doc.data().Occupation;
                            document.getElementById("account-zip").value = doc.data().Zipcode;
            
                        }
                    });
                });
                document.getElementById('update').addEventListener(
                    'click',(e)=>{
            e.preventDefault();
           var zip = document.getElementById("account-zip").value;
           var occupation = document.getElementById("account-occupation").value;
            var country = document.getElementById("account-country").value;
        
        
            
                db.collection("info").doc(user.uid).update(
                {
                    Zipcode : zip,
                    Occupation :occupation,
                    Country : country,
                   
        
                  
                }
            ).then(() => {
                console.log('Done!');
                window.location='index.html';
                update_form.reset();
                alert("your account is updated into database");
                
            });
        });

            }
 

        });
       
