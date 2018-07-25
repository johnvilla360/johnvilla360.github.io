$(document).ready(function() {
	// Animation after continue
	$(".continue").click(function() {

		setTimeout(resetCSS, 1000);

		$(".continue").hide();
		$("#bar1").animate({left:"100%"});
		$("#bar2").animate({right:"100%"});
		$("#bar3").animate({left:"100%"});
		$("#bar1").delay(2000).fadeOut();
		$("#bar2").delay(2000).fadeOut();
		$("#bar3").delay(2000).fadeOut();
		$("nav").delay(1000).fadeIn(1000);
		$(".topnavbar").delay(1000).fadeIn(1000);
		$(".homebg").delay(1000).fadeIn(500);
		$(".spacebg").delay(1000).fadeIn(500);
		$("footer").delay(1000).fadeIn(500);
		$('html, body').css('overflowY', 'initial');
		$('html, body').css('overflowX', 'initial');

		function resetCSS () {
		$('.content1').css('display', 'block');
		$('.content3').css('display', 'flex');
		}
	});
	// Initialize Firebase
	 var config = {
	    apiKey: "AIzaSyB4hZ2VhYLn9Ulvj0Uubk4s7p4x1K1Yeq4",
	    authDomain: "john-villa.firebaseapp.com",
	    databaseURL: "https://john-villa.firebaseio.com",
	    projectId: "john-villa",
	    storageBucket: "john-villa.appspot.com",
	    messagingSenderId: "174259639646"
	 };
	 firebase.initializeApp(config);

	 var messagesRef = firebase.database().ref('messages');

	 // Listen for form submit
	document.getElementById('contactForm').addEventListener('submit', submitForm);

	// Submit Form
	function submitForm(e){
		e.preventDefault();

		//Get values
		var name = getInput('name');
		var company = getInput('company');
		var email = getInput('email');
		var number = getInput('number');
		var message = getInput('message');

		// Save message
		saveMessage(name, company, email, phone, message);

		document.querySelecter('.msgAlert').style.display = 'block';

		setTimeout(function(){
			document.querySelecter('.msgAlert').style.display = 'none';
		}, 3000);
	}

	function getInput(id) {
		return document.getElementById(id).value;
	}

	// Save message
	function saveMessage(name, company, email, phone, message) {
		var newMessageRef = messagesRef.push();

		newMessageRef.set({
			name:name,
			company:company,
			email:email,
			phone:phone,
			message:message
		});
	}
});