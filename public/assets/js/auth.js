// Initialize Firebase
var config = {
  apiKey: "AIzaSyAgVWnmXuQ97DuIoImCE7EDjsobVwL1ezw",
  authDomain: "coffee-5b1b1.firebaseapp.com",
  databaseURL: "https://coffee-5b1b1.firebaseio.com",
  projectId: "coffee-5b1b1",
  storageBucket: "coffee-5b1b1.appspot.com",
  messagingSenderId: "60856368857"
};
firebase.initializeApp(config);

//Login Auth
$("#coffee-auth").on("click", function(event) {
  event.preventDefault();

  var email = $("#email-input").val().trim();
  var password = $("#password-input").val().trim();

  firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
    //Auth Check
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        window.location.replace("../dashboard.html");
      }
    });
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    $("#no-user").fadeIn(800);

  });
});

//Auth Check & User Log
var pathname = window.location.pathname;

if (pathname === "/dashboard.html") {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {} else {
      window.location.replace("../index.html");
    }
  });
}

//Logout Script
$("#logout").on("click", function() {
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    localStorage.clear();
    window.location.href = "index.html";
  }, function(error) {
    console.log(error);
  });
});

//Reset Password Script
$("#reset-password").on("click", function() {
  var auth = firebase.auth();
  var email = prompt("What is your user email?");

  auth.sendPasswordResetEmail(email).then(function() {
    alert('A password reset email has been to your address.')
  }).catch(function(error) {
    alert('You are not an authorized user. Password cannot be reset.')
  });
});

//Change Password Script
//Reset Password Script
$("#change-pw").on("click", function() {
  var auth = firebase.auth();
  var email = auth.currentUser.email;

  auth.sendPasswordResetEmail(email).then(function() {
    alert('A password reset email has been to your address.')
  }).catch(function(error) {
    alert('You are not an authorized user. Password cannot be reset.')
  });
});

//Signup Script
$("#coffee-signup").on("click", function(event){
  event.preventDefault();

  var email = $("#email-signup").val();
  var password = $("#password-signup").val();
  if (email.length < 4) {
    alert('Please enter a valid email address.');
    return;
  }
  if (password.length < 4) {
    alert('Passwords must contain more than 4 characters.');
    return;
  }

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

  //Auth Check
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      window.location.replace("../dashboard.html");
    }
  });
});


//Delete user
$("#close-account-submit").click(function() {
  var user = firebase.auth().currentUser;
  var userId = firebase.auth().currentUser.uid;

  user.delete().then(function() {
    localStorage.clear();
    window.location.href = "index.html";
  }).catch(function(error) {

    var auth = firebase.auth();
    var user = firebase.auth().currentUser;
    var password = $("#password-reauth").val();
    var credential = firebase.auth.EmailAuthProvider.credential(auth.currentUser.email, password);
    // Prompt the user to re-provide their sign-in credentials

    user.reauthenticateWithCredential(credential).then(function() {
      console.log("reauthenticated")
      user.delete();
      localStorage.clear();
      window.location.href = "index.html";
    }).catch(function(error) {
      console.log('error occurred')
    });
  });
})
