// Initialize Firebase
 var config = {
   apiKey: "AIzaSyAOifjyi3ycYE-CGpngk5VMTwhBsjQC7bw",
   authDomain: "webdev-2bbe3.firebaseapp.com",
   databaseURL: "https://webdev-2bbe3.firebaseio.com",
   projectId: "webdev-2bbe3",
   storageBucket: "webdev-2bbe3.appspot.com",
   messagingSenderId: "809384022541"
 };
 firebase.initializeApp(config);

//Login Auth
$("#coffee-auth").on("click", function(event){
  event.preventDefault();

    var email = $("#email-input").val().trim();
    var password = $("#password-input").val().trim();

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    });

    //Auth Check
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        window.location.replace("dashboard.html");
      }
    });
});


//Auth Check & User Log
var pathname = window.location.pathname;

if (pathname === "dashboard.html") {
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


$("#reset-password").on("click", function() {
  var auth = firebase.auth();
  var email = prompt("What is your user email?");

  auth.sendPasswordResetEmail(email).then(function() {
    alert('A password reset email has been to your address.')
  }).catch(function(error) {
    alert('You are not an authorized user. Password cannot be reset.')
  });
});
