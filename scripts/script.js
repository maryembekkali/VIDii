// JavaScript Document
console.log("Howdy!");

var deButton = document.querySelector("button");
var hetLogo = document.querySelector("img");

var mickeyLogo = true;

deButton.addEventListener("click", ikHebVeranderd);

function ikHebVeranderd() {
	hetLogo.classList.toggle("ikHebHetLogoVeranderd");
	
	if (mickeyLogo == true){
		deButton.textContent = "logo terug veranderen naar mickey";
		mickeyLogo = false;
	}
	else {
		deButton.textContent = "logo veranderen naar minnie ";
		mickeyLogo = true;
	}
}

// var hetLogo = document.querySelector("img");
// var hetClubhuis = document.querySelector("img");

// hetLogo.addEventListener("click", ikHebVeranderd);
// hetClubhuis.addEventListener("click", ikHebVeranderd);

// function ikHebVeranderd() {
// 	hetLogo.classList.toggle("ikHebHetLogoVeranderd");
// 	hetClubhuis.classList.toggle("ikHebHetClubhuisVeranderd");
// }

var deButton = document.querySelector("button");
var hetLogo = document.querySelector("img");
var hetHuis = document.querySelector("img");

var mickeyLogo = true;
// var mickeyHuis = true;

deButton.addEventListener("click", ikHebVeranderd);

function ikHebVeranderd() {
	hetLogo.classList.toggle("ikHebHetLogoVeranderd");
	hetHuis.classList.toggle("ikHebHetHuisVeranderd");
	
	if (mickeyLogo == true){
		deButton.textContent = "logo terug veranderen naar mickey";
		mickeyLogo = false;
	}
	else {
		deButton.textContent = "logo veranderen naar minnie ";
		mickeyLogo = true;
	}
}