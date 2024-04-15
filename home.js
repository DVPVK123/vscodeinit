 
 var button = document.createElement("button");


 button.innerHTML = "Home";

 button.className = "home-button";

 button.onclick = function() {
    
     window.location.href = "home.html";
 };

 document.getElementById("buttonContainer").appendChild(button);
