var firebaseConfig = {
    apiKey: "AIzaSyCcG240g56z4dNdQZWy_dEs1_5fWiiZ5Pw",
    authDomain: "travelbd-288fc.firebaseapp.com",
    databaseURL: "https://travelbd-288fc.firebaseio.com",
    projectId: "travelbd-288fc",
    storageBucket: "travelbd-288fc.appspot.com",
    messagingSenderId: "215434834839",
    appId: "1:215434834839:web:0bb16c9bfba4ef594fcad2",
    measurementId: "G-E9JZRP5NDQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

auth.onAuthStateChanged(user =>
  {
    if(user)
    {
      console.log('user logged in :',user);
      document.getElementById("Log_out").style.display = "initial";
      document.getElementById("Log_in").style.display = "none";

    }
    else{
      console.log('user logged out');
      document.getElementById("Log_out").style.display = "none";
      document.getElementById("Log_in").style.display = "block";
    }
  })
  const logout = document.getElementById("Log_out");
	logout.addEventListener('click', (e) => {
		e.preventDefault();
		auth.signOut().then(() =>{
		console.log('logged out !');
		});
	});