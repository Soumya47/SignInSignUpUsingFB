moveSliderRight = () => {
    document.getElementById('overlay').classList.remove('overlay-moveHalfLeft');
    document.getElementById('overlayInner').classList.remove('overlayInner-moveHalfRight');
    document.getElementById('signInForm').classList.remove('shiftRight');
  
    document.getElementById('overlay').classList.add('overlay-moveHalfRight');
    document.getElementById('overlayInner').classList.add('overlayInner-moveHalfLeft');
    document.getElementById('signUpForm').classList.add('shiftLeft');
  }
  moveSliderLeft = () => {
    document.getElementById('overlay').classList.remove('overlay-moveHalfRight');
    document.getElementById('overlayInner').classList.remove('overlayInner-moveHalfLeft');
    document.getElementById('signUpForm').classList.remove('shiftLeft');
  
    
    document.getElementById('overlay').classList.add('overlay-moveHalfLeft');
    document.getElementById('overlayInner').classList.add('overlayInner-moveHalfRight');
    document.getElementById('signInForm').classList.add('shiftRight');
  }

  
  var firebaseConfig = {
    apiKey: "AIzaSyDNFTnuAW-Y0PK2MLew1F7lGMb5O40KJyo",
    authDomain: "signinsignupusingfb.firebaseapp.com",
    projectId: "signinsignupusingfb",
    storageBucket: "signinsignupusingfb.appspot.com",
    messagingSenderId: "962341240524",
    appId: "1:962341240524:web:4a22507bbdf4c8b4604c69",
    measurementId: "G-QFKQ5C442S"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email2");
    var password = document.getElementById("password2");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    alert("LoggedIn");
    
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);

    }
    /* else{
      alert("No Active user Found")
    } */
  })