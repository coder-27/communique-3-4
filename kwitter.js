
// Your web app's Firebase configuration
var firebaseConfig = {
     apiKey: "AIzaSyDTVjBNL2sY2SRhUCkS2oNiXMMRA7wOLGA",
    authDomain: "comunique-17914.firebaseapp.com",
    databaseURL: "https://comunique-17914.firebaseio.com",
    projectId: "comunique-17914",
    storageBucket: "comunique-17914.appspot.com",
    messagingSenderId: "542171085818",
    appId: "1:542171085818:web:a95d072054da8382cfc243",
    
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";

    function addRoom()
    {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
       purpose : "adding room name"
       });

       localStorage.setItem("room_name",room_name);
       window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names); 
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;


      //End code
      });
      });
      }
getData();

function redirectToRoomName(name) {
 console.log(name); 
 localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
   window.location="index.html"
}
