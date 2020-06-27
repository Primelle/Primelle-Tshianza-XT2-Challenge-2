var datum = new Date();
var uren = datum.getHours();

//Digitale klok


function toonTijd(){
    var datum = new Date();
    var uren = datum.getHours();
    var minuten = datum.getMinutes(); 
    
	if (uren < 10){
    	uren = "0" + uren;
    }

    if (minuten < 10){
    	minuten= "0" + minuten;
    }
    
    var tijd = uren + ":" + minuten;
    document.getElementById("deKlok").innerText = tijd;
    document.getElementById("deKlok").textContent = tijd;
    
    setInterval(toonTijd, 1000);
}

//Achtergrondskleur

function achtergrondkleurDagdelen(){
	var achtergrond = document.getElementById('container');

	if (uren >= 5 && uren < 12) {
	  achtergrond.classList.add("achtergrond_ochtend");
	}

	else if (uren >= 12 && uren < 18) {
	  achtergrond.classList.add("achtergrond_middag");

	}

	else if (uren >= 18 && uren < 22) {
	  achtergrond.classList.add("achtergrond_avond");

	} 

	else {
		achtergrond.classList.add("achtergrond_nacht");
	}
}

//TIJDSKLEUR

function tijdskleurDagdelen(){
	var tijdskleur = document.getElementById('deKlok');

	if (uren >= 5 && uren < 12) {
	  tijdskleur.classList.add("tijdskleur_ochtend");
	}

	else if (uren >= 12 && uren < 18) {
	  tijdskleur.classList.add("tijdskleur_middag");

	}

	else  if (uren>= 18 && uren < 22){
	  tijdskleur.classList.add("tijdskleur_avond");
	}

	else {
	  tijdskleur.classList.add("tijdskleur_nacht");
	}
}

function tekstDagdelen(){

	if (uren >= 0 && uren < 12) {
		document.getElementById("groet").innerHTML = "Good morning, Primelle!";
	}

	else if (uren >= 12 && uren < 18) {
		document.getElementById("groet").innerHTML = "Good afternoon, Primelle!";
	}

	else  {
		document.getElementById("groet").innerHTML = "Good evening, Primelle!";
	  

	}
}

function showDate(){

	var now = new Date();
				var days = new Array("Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag");
				var months = new Array("januari","februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december");
				var date = ((now.getDate()<10) ? "0" : "")+ now.getDate();
				function fourdigits(number) {
				    return (number < 1000) ? number + 1900 : number;
				
				}

				today = days[now.getDay()] + " " +
				             date + " " +
				             months[now.getMonth()] + " " +
				               (fourdigits(now.getYear())) ;
				document.getElementById("datumDag").innerHTML = today;
}

function datumkleurVerandering(){
	var datumkleur = document.getElementById('datumDag');

	if (uren >= 5 && uren < 12) {
	  datumkleur.classList.add("datumkleur_ochtend");
	}

	else if (uren >= 12 && uren < 18) {
	  datumkleur.classList.add("datumkleur_middag");
	}

	else if (uren >= 18 && uren < 22) {
	  datumkleur.classList.add("datumkleur_avond");
	}

	else {
	  datumkleur.classList.add("datumkleur_nacht");
	}
}

function groetkleurVerandering(){
	var groetkleur = document.getElementById('groet');

	if (uren >= 5 && uren < 12) {
	  groetkleur.classList.add("groetkleur_ochtend");
	}

	else if (uren >= 12 && uren < 18) {
	  groetkleur.classList.add("groetkleur_middag");

	}

	else  if (uren>= 18 && uren < 22){
	  groetkleur.classList.add("groetkleur_avond");
	}

	else {
	  groetkleur.classList.add("groetkleur_nacht");
	}
}

function landKleurVerandering(){
	var landkleur = document.getElementById('tekstje')

	if (uren >= 5 && uren < 12) {
	  landkleur.classList.add("landkleur_ochtend");
	}

	else if (uren >= 12 && uren < 18) {
	  landkleur.classList.add("landkleur_middag");
	}

	else if (uren >= 18 && uren < 22) {
	  landkleur.classList.add("landkleur_avond");
	}

	else {
	  landkleur.classList.add("landkleur_nacht");
	}
}

function afbeeldingVerandering(){
	var afbeelding = document.getElementById('afbeeldingDag');

	if (uren >= 5 && uren < 12) {
	  afbeelding.classList.add('afbeelding_ochtend' , 'animated' , 'bounceInLeft');
	}

	else if (uren >= 12 && uren < 18) {
	  afbeelding.classList.add('afbeelding_middag', 'animated' , 'bounceInLeft');
	}

	else if (uren >= 18 && uren < 22) {
	  afbeelding.classList.add('afbeelding_avond', 'animated' , 'bounceInLeft');
	}

	else {
	  afbeelding.classList.add('afbeelding_nacht' ,'animated' , 'bounceInLeft');

	}
}


window.onload = function(){
		toonTijd(); 
		achtergrondkleurDagdelen();
		tijdskleurDagdelen();
		tekstDagdelen();
		showDate();
		landKleurVerandering();
		datumkleurVerandering();
		afbeeldingVerandering();
		groetkleurVerandering();
}