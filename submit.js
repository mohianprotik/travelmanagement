document.getElementById('submit').addEventListener(
    'click',()=>{auth.onAuthStateChanged(user =>
        {
          if(user)
          {window.alert("Thanks for choosing us");
            console.log('user logged in :',user);
    
          
          }
          else{
            console.log('user logged out');
            window.alert("please logged in");
            location.href='log.html';
         
          }
        })

    }
)
