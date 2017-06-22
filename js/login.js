// JavaScript Document

function login() {
   	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if ( username == "bangoga" && password == "eragons1"){
		alert ("Login successfully");
		window.location = "Notes.html"; // Redirecting to other page.
		return false;
	}
	else{
		alert ("Login successfully");
			document.getElementById("username").disabled = true;
			document.getElementById("password").disabled = true;
			document.getElementById("submit").disabled = true;
			return false;
	}
}

function displayChange(){
	window.location = "https://gooogle.com";
}