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



var deButton2 = document.querySelector(".raam");

var deButton2Img = document.querySelector(".raam img");


deButton2.addEventListener("click", minnie1komt);

function minnie1komt() {
	deButton2Img.classList.toggle("minnie1isgekomen");
}