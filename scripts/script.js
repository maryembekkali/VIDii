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

var hetRaam = document.querySelector(".raam img");
var deMinnieImg = document.querySelector(".minnie img");


deButton2.addEventListener("click", minnie1komt);

function minnie1komt() {
	hetRaam.classList.toggle("minnie1isgekomen");
	deMinnieImg.classList.toggle("minnie1isgekomen")

}
