function submitted(){
 var Name=document.getElementById('username');
 var Age=document.getElementById('Age');
 var config = {
    apiKey: "AIzaSyBlsQAcsXSsaXTIVkRxHwmwZ0j78O3FPwM",
    authDomain: "project-forum-ef6a3.firebaseapp.com",
    databaseURL: "https://project-forum-ef6a3.firebaseio.com",
    projectId: "project-forum-ef6a3",
    storageBucket: "project-forum-ef6a3.appspot.com",
    messagingSenderId: "890364202003"
  };
  firebase.initializeApp(config);
  var database=firebase.database();
  var ref=database.ref('answers');
  var answers={
  	name: Name.value,
  	Age: Age.value
  }
  console.log(answers);
 window.alert("youre username is "+Name.value);
 ref.push(answers);



}