// JavaScript Document
console.log("Howdy!");

var deButton = document.querySelector(".logo");

var deButtonImg = document.querySelector(".logo img");
var hetHuisImg = document.querySelector(".clubhouse");
var deLinkImg = document.querySelector(".linkknop");


deButton.addEventListener("click", ikHebVeranderd);

function ikHebVeranderd() {
	deButtonImg.classList.toggle("ikHebHetLogoVeranderd");
	hetHuisImg.classList.toggle("ikHebHetHuisVeranderd");
	deLinkImg.classList.toggle("ikHebDeLinkVeranderd");
}





////////
// RAAM1
////////
var raamButton1 = document.querySelector(".raam1");

var raam1 = document.querySelector(".raam1 img");
var deMinnie1Img = document.querySelector(".minnie1");
var deDeurImg = document.querySelector(".deur");


raamButton1.addEventListener("click", minnie1komt);

// functie zodat alle andere minnies terug gaan in het huis als er een nieuwe minnie naar buiten komt
function alleMinniesTerugInHetHuis() {
	deMinnie1Img.classList.remove("minnie1isgekomen")
	deMinnie2Img.classList.remove("minnie2isgekomen")
	deMinnie3Img.classList.remove("minnie3isgekomen")
	deMinnie4Img.classList.remove("minnie4isgekomen")
	deMinnie5Img.classList.remove("minnie5isgekomen")
	deMinnie6Img.classList.remove("minnie6isgekomen")
	deMinnie7Img.classList.remove("minnie7isgekomen")
}

function minnie1komt() {
	alleMinniesTerugInHetHuis()
	deMinnie1Img.classList.add("minnie1isgekomen")
	deDeurImg.classList.add("deDeurIsOpenGegaan")

	// de class van de deur verwijderen zodat de deur weer open kan als je op een andere raam klikt
	deDeurImg.addEventListener("animationend", () =>{
		deDeurImg.classList.remove("deDeurIsOpenGegaan")
	})
}


////////
// RAAM2
////////
var raamButton2 = document.querySelector(".raam2");

var raam2 = document.querySelector(".raam2 img");
var deMinnie2Img = document.querySelector(".minnie2");


raamButton2.addEventListener("click", minnie2komt);

function minnie2komt() {
	alleMinniesTerugInHetHuis()
	deMinnie2Img.classList.add("minnie2isgekomen")
	deDeurImg.classList.add("deDeurIsOpenGegaan")

	deDeurImg.addEventListener("animationend", () =>{
		deDeurImg.classList.remove("deDeurIsOpenGegaan")
	})
}


////////
// RAAM3
////////
var raamButton3 = document.querySelector(".raam3");

var raam3 = document.querySelector(".raam3 img");
var deMinnie3Img = document.querySelector(".minnie3");


raamButton3.addEventListener("click", minnie3komt);

function minnie3komt() {
	alleMinniesTerugInHetHuis()
	deMinnie3Img.classList.add("minnie3isgekomen")
	deDeurImg.classList.add("deDeurIsOpenGegaan")

	deDeurImg.addEventListener("animationend", () =>{
		deDeurImg.classList.remove("deDeurIsOpenGegaan")
	})
}


////////
// RAAM4
////////
var raamButton4 = document.querySelector(".raam4");

var raam4 = document.querySelector(".raam4 img");
var deMinnie4Img = document.querySelector(".minnie4");


raamButton4.addEventListener("click", minnie4komt);

function minnie4komt() {
	alleMinniesTerugInHetHuis()
	deMinnie4Img.classList.add("minnie4isgekomen")
	deDeurImg.classList.add("deDeurIsOpenGegaan")

	deDeurImg.addEventListener("animationend", () =>{
		deDeurImg.classList.remove("deDeurIsOpenGegaan")
	})
}


////////
// RAAM5
////////
var raamButton5 = document.querySelector(".raam5");

var raam5 = document.querySelector(".raam5 img");
var deMinnie5Img = document.querySelector(".minnie5");


raamButton5.addEventListener("click", minnie5komt);

function minnie5komt() {
	alleMinniesTerugInHetHuis()
	deMinnie5Img.classList.add("minnie5isgekomen")
	deDeurImg.classList.add("deDeurIsOpenGegaan")

	deDeurImg.addEventListener("animationend", () =>{
		deDeurImg.classList.remove("deDeurIsOpenGegaan")
	})
}


////////
// RAAM6
////////
var raamButton6 = document.querySelector(".raam6");

var raam6 = document.querySelector(".raam6 img");
var deMinnie6Img = document.querySelector(".minnie6");


raamButton6.addEventListener("click", minnie6komt);

function minnie6komt() {
	alleMinniesTerugInHetHuis()
	deMinnie6Img.classList.add("minnie6isgekomen")
	deDeurImg.classList.add("deDeurIsOpenGegaan")

	deDeurImg.addEventListener("animationend", () =>{
		deDeurImg.classList.remove("deDeurIsOpenGegaan")
	})
}


////////
// RAAM7
////////
var raamButton7 = document.querySelector(".raam7");

var raam7 = document.querySelector(".raam7 img");
var deMinnie7Img = document.querySelector(".minnie7");


raamButton7.addEventListener("click", minnie7komt);


function minnie7komt() {
	alleMinniesTerugInHetHuis()
	deMinnie7Img.classList.add("minnie7isgekomen")
	deDeurImg.classList.add("deDeurIsOpenGegaan")

	deDeurImg.addEventListener("animationend", () =>{
		deDeurImg.classList.remove("deDeurIsOpenGegaan")
	})
}





////////////
// REGENBOOG
////////////
var handButton = document.querySelector(".hand");

var deHandImg = document.querySelector(".hand img");
var deBowRed = document.querySelector(".bowRed");
var deBowOrange = document.querySelector(".bowOrange");
var deBowYellow = document.querySelector(".bowYellow");
var deBowGreen = document.querySelector(".bowGreen");
var deBowBlue = document.querySelector(".bowBlue");
var deBowPurple = document.querySelector(".bowPurple");

var boogStaatAan = true;

handButton.addEventListener("click", tekenDeRegenboog);


function tekenDeRegenboog() {
	deBowRed.classList.toggle("tekenRood");
	deBowOrange.classList.toggle("tekenOranje");
	deBowYellow.classList.toggle("tekenGeel");
	deBowGreen.classList.toggle("tekenGroen");
	deBowBlue.classList.toggle("tekenBlauw");
	deBowPurple.classList.toggle("tekenPaars");
}
