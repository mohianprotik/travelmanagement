console.log('from hotel.js');


const flight_form= document.querySelector('flight_form');

                firebase.auth().onAuthStateChanged((user) =>
                {
                    if(user){
                        db.collection('info').get().then(snapshot => {
            
          
                            snapshot.forEach(doc => {
                               
                                if (user.email == doc.data().Email) {
                                    console.log('12');
                            
                                    document.getElementById("flight-email").value = doc.data().Email;
                                    document.getElementById("flight-name").value = doc.data().Name;
                                   
                                    
                                    
                        
                                }
                            });
                        });
                      }
                    });
                    document.getElementById('submit').addEventListener(
                        'click',(f)=>{
                            firebase.auth().onAuthStateChanged((user) =>
                            {
                                if(user){
                                  
                    
                    
                                }else{
                                    console.log('user logged out');
                                    window.alert("please log in for booking confirmation");
                                    
                                    location.href='log.html';
                                 
                                  }
                     
                    
                            });
                            f.preventDefault();
                            var name = document.getElementById("flight-name").value;
                            var email = document.getElementById("flight-email").value;
                            var triptype = document.getElementById("roundtrip").value;
                            var arrival=document.getElementById("from").value;
                            var deperture =document.getElementById("to").value;
                            var depertingDate = document.getElementById("deperture").value;
                            var returningDate = document.getElementById("return").value;
                            var e = document.getElementById("adult");
                            var adult = e.options[e.selectedIndex].text;
                            var w = document.getElementById("children");
                            var children = w.options[w.selectedIndex].text;
                            var q = document.getElementById("class");
                            var type = q.options[q.selectedIndex].text;
                          
                
                            db.collection("FlightBooking").add(
                                {  DepertingDate: depertingDate,
                                   ReturngDate :returningDate,
                                   Name: name,
                                   FlyingType : triptype,
                                   Deperture :arrival,
                                   Destination : deperture,
                                   Adult:adult,
                                   Children : children,
                                   Class : type, 
                                   Email : email 
                                }
                ).then(() => {
                    console.log('Done!');
                    alert("your booking has been confirmed");
                    window.location='index.html';
                    flight_form.reset();
                
                    
                });
            });
                        
