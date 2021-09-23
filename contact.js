// Initialize Firebase
function initializeApp() {



const firebaseConfig = {
    apiKey: "XXXXXXXXXXXXXXXXXXXXXXXX",
    authDomain: "XXXXXXXXXXXX",
    databaseURL: "https://XXXXXXXXXXXXXXXXXX.firebaseio.com",
    projectId: "XXXXXXXXXXXXXXXXXXXXXX",
    storageBucket: "XXXXXXXXXXXXXXXXXXXXXXX",
    messagingSenderId: "XXXXXXXXXXXXXXXXXXX",
    appId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXX"
  };

  // Initialize Firebase
//var app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');
 
// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
    e.preventDefault();
    // console.log(123)

// Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var company = getInputVal('subject');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, phone,subject, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}



// // Function to  get form values
// function getInputVal(id){
//   return document.getElementById(id).value;
// }




// Save message to firebase
function saveMessage(name, email, phone,subject, message){
  var newMessageRef = messagesRef.push();

  newMessageRef.set({
    name: name,
    email:email,
    phone:phone,
    subject:subject,
    message:message
  });
}
}
