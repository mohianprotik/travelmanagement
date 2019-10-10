document.getElementById('submit').addEventListener(
    'click',(e)=>{
      e.preventDefault();
      auth.onAuthStateChanged(user =>
        {
          if(user){
            db.collection('info').get().then(snapshot => {
                
              
                snapshot.forEach(doc => {
                   
                    if (user.email == doc.data().Email) {
                        console.log('dhuklo');
                        var email = doc.data().Email;
                        var name = doc.data().Name;
                       var phone= doc.data().Phone;
                       var address = doc.data().Address;
                       var place = document.getElementById("place").value;

                      
db.collection("deals").add(
  {
     Name = name,
     Email = email,
     Phone= phone,
     Address = address,
     Place = place
    
  }
  ).then(() => {
  
  window.location='index.html';
  alert("Thank you for Choosing us");
  
  });
                       
                    }
                });
               

            });



        }
          else{
            console.log('user logged out');
            window.alert("please logged in");
            location.href='log.html';
         
          }
        })

    }
)
