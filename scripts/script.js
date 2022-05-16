// JavaScript Document
console.log("Howdy!");

var deButton = document.querySelector(".logo");

var deButtonImg = document.querySelector(".logo img");
var hetHuisImg = document.querySelector(".clubhouse");


deButton.addEventListener("click", ikHebVeranderd);

function ikHebVeranderd() {
	deButtonImg.classList.toggle("ikHebHetLogoVeranderd");
	hetHuisImg.classList.toggle("ikHebHetHuisVeranderd");
}





////////
// RAAM1
////////
var raamButton1 = document.querySelector(".raam1");

var raam1 = document.querySelector(".raam1 img");
var deMinnie1Img = document.querySelector(".minnie1");
var deDeurImg = document.querySelector(".deur");


raamButton1.addEventListener("click", minnie1komt);

function minnie1komt() {
	deMinnie1Img.classList.toggle("minnie1isgekomen")
	deDeurImg.classList.toggle("deDeurIsOpenGegaan")
}


////////
// RAAM2
////////
var raamButton2 = document.querySelector(".raam2");

var raam2 = document.querySelector(".raam2 img");
var deMinnie2Img = document.querySelector(".minnie2");


raamButton2.addEventListener("click", minnie2komt);

function minnie2komt() {
	deMinnie2Img.classList.toggle("minnie2isgekomen")
	deDeurImg.classList.toggle("deDeurIsOpenGegaan")
}


////////
// RAAM3
////////
var raamButton3 = document.querySelector(".raam3");

var raam3 = document.querySelector(".raam3 img");
var deMinnie3Img = document.querySelector(".minnie3");


raamButton3.addEventListener("click", minnie3komt);

function minnie3komt() {
	deMinnie3Img.classList.toggle("minnie3isgekomen")
	deDeurImg.classList.toggle("deDeurIsOpenGegaan")
}


////////
// RAAM4
////////
var raamButton4 = document.querySelector(".raam4");

var raam4 = document.querySelector(".raam4 img");
var deMinnie4Img = document.querySelector(".minnie4");


raamButton4.addEventListener("click", minnie4komt);

function minnie4komt() {
	deMinnie4Img.classList.toggle("minnie4isgekomen")
	deDeurImg.classList.toggle("deDeurIsOpenGegaan")
}


////////
// RAAM5
////////
var raamButton5 = document.querySelector(".raam5");

var raam5 = document.querySelector(".raam5 img");
var deMinnie5Img = document.querySelector(".minnie5");


raamButton5.addEventListener("click", minnie5komt);

function minnie5komt() {
	deMinnie5Img.classList.toggle("minnie5isgekomen")
	deDeurImg.classList.toggle("deDeurIsOpenGegaan")
}


////////
// RAAM6
////////
var raamButton6 = document.querySelector(".raam6");

var raam6 = document.querySelector(".raam6 img");
var deMinnie6Img = document.querySelector(".minnie6");


raamButton6.addEventListener("click", minnie6komt);

function minnie6komt() {
	deMinnie6Img.classList.toggle("minnie6isgekomen")
	deDeurImg.classList.toggle("deDeurIsOpenGegaan")
}


////////
// RAAM7
////////
var raamButton7 = document.querySelector(".raam7");

var raam7 = document.querySelector(".raam7 img");
var deMinnie7Img = document.querySelector(".minnie7");


raamButton7.addEventListener("click", minnie7komt);


function minnie7komt() {
	deMinnie7Img.classList.toggle("minnie7isgekomen")
	deDeurImg.classList.toggle("deDeurIsOpenGegaan")
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



