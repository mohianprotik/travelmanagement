console.log('hotel.js');


const hotel_form= document.querySelector('hotel_form');

        firebase.auth().onAuthStateChanged((user) =>
        {
            if(user){
                db.collection('info').get().then(snapshot => {
                    
                  
                    snapshot.forEach(doc => {
                       
                        if (user.email == doc.data().Email) {
                            console.log('dhuklo');
                            console.log(doc.data().Email);
                            document.getElementById("hotel-email").value = doc.data().Email;
                            document.getElementById("hotel-name").value = doc.data().Name;
                            document.getElementById("hotel-phone").value = doc.data().Phone;
                            
                           
                        }
                    });
                });
            
            }
 
        });
        document.getElementById('submit').addEventListener(
            'click',(e)=>{
                firebase.auth().onAuthStateChanged((user) =>
                {
                    if(user){
                      
        
        
                    }else{
                        console.log('user logged out');
                        window.alert("please log in for booking confirmation");
                        location.href='log.html';
                     
                      }
         
        
                });
    e.preventDefault();
   var name =  document.getElementById("hotel-name").value;
   var email = document.getElementById("hotel-email").value;
   var phone = document.getElementById("hotel-phone").value ;
   
    var arrival =  document.getElementById("datepicker").value;
    var deperture =  document.getElementById("datepicker1").value;
    var e = document.getElementById("country");
    var guests = e.options[e.selectedIndex].text;
    var o = document.getElementById("country1");
    var type = o.options[o.selectedIndex].text;
  
    
        db.collection("HotelBooking").add(
        {   ArrivalDate:arrival,
            DepertureDate :deperture,
           Email : email,
           Name: name,
           Phone: phone,
           NoOfGuests : guests,
           RoomType : type,
           
          
        }
    ).then(() => {
        console.log('Done!');
        alert("your booking has been confirmed");
        window.location='index.html';
        hotel_form.reset();
       
        
    });
});
        