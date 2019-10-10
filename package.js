console.log('booking.js');
var email;
var name;
var phone;

const hotel_form= document.querySelector('hotel_form');

        document.getElementById('submit').addEventListener(
            'click',(e)=>{
                e.preventDefault();
                firebase.auth().onAuthStateChanged((user) =>
                {
                    if(user){
                        db.collection('info').get().then(snapshot => {
                            
                          
                            snapshot.forEach(doc => {
                               
                                if (user.email == doc.data().Email) {
                                    console.log('dhuklo');
                                   
                                    email = doc.data().Email;
                                    name= doc.data().Name;
                                    phone = doc.data().Phone;    
                                 var place = document.getElementById("place").innerHTML;
                                                                
                                            db.collection("TourPackage").add(
                                            { 
                                            Name : name,
                                            Email : email,
                                            Phone : phone,
                                            Place : place,
                                            }
                                        ).then(() => {
                                            console.log('Done!');
                                            window.location='index.html';
                                            hotel_form.reset();
                                            alert("your booking has been confirmed");
                                            
                                        });
  
                                   

                                }
                            });
                        });
                    
                    }else{
                        console.log('user logged out');
                        window.alert("please log in for booking confirmation");
                        location.href='log.html';
                     
                      }
         
        
                });
    

});
        