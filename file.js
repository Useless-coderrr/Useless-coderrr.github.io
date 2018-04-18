function submitted(){
 var Name=document.getElementById('username');
 var Age=document.getElementById('Age');
 var Lang=document.getElementById('lang');
 var Sex=document.getElementById('Sex');
 var Job=document.getElementById('Job');
 var App=document.getElementById('app');
 var Code=document.getElementById('code');
 var Desc=document.getElementById('desc');
 
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
  	Age: Age.value,
    Gender: Sex.value,
    Job: Job.value,
    Lang: Lang.value,
    code: Code.value,
    App: App.value,
    Desc: Desc.value
  }
  console.log(answers);
 window.alert("Thank you for contributing "+Name.value);
 ref.push(answers);

}
